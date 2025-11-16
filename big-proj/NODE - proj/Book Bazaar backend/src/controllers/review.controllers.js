import { Review } from "../models/review.models.js"
import { Books } from "../models/books.models.js"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse }  from "../utils/apiResponse.js"
import { asyncHandler} from "../utils/asyncHandler.js"
import { ReviewRatingEnum } from "../utils/constants.js"
import mongoose, { Mongoose } from "mongoose"


const addReview = asyncHandler( async (req, res) => {
    const { rating, comment} = req.body
    if(rating === undefined || !comment) throw new ApiError(401, "review fields are required!")
    
    const { email, username } = req.body
    if(!email || !username) throw new ApiError(401, "User fields are required!")

    const { bookId } = await req.params
    console.log(bookId);
    
    if(!bookId) throw new ApiError(401, "Book id is  required!")

    const book = await Books.findById(bookId)
    console.log(book);
    
    if(!book) throw new ApiError(401, "books is  required!")
    
    const user = await User.findOne({ $or: [{email}, {username}]})
    if(!user) throw new ApiError(401, "user is  required!")

    const existedReview = await Review.findOne({
       book: bookId,
       user: user._id
    })
    if(existedReview) throw new ApiError(401, "review is already required!")

    if(!Object.values(ReviewRatingEnum).includes(rating)) {
        throw new ApiError(400, "Invalid rating")
    }  

    const review  = await Review.create({
        rating,
        comment,
        user: user._id,
        book: bookId
    })
    if(!review) throw new ApiError(401, "review is not creating!")

    return res.status(200).json(new ApiResponse(
        201,
        review,
        "revie create successfully"
    ))
})


const getBookReview = asyncHandler( async (req, res) => {

    const { BookId } = req.params
    
    if(!BookId) throw new ApiError(401, "book id is required")

    const book = await Books.findById(BookId).select("name autharName averageRating totalReviews")

    if(!book) throw new ApiError(401, "id is required")

    const review = await Review.aggregate([
        {
            $match: {
                book: new mongoose.Types.ObjectId(BookId)
            }
        },
        {
            $lookup:{
                from: "users",      
                localField: "user",        
                foreignField: "_id",      
                as: "userDetails"       
            }
        },
        {
            $unwind: "$userDetails"     
          },
          {
            $project: {             
              _id: 1,
              rating: 1,
              comment: 1,
              createdAt: 1,
              "userDetails.username": 1,
              "userDetails.email": 1,
              "userDetails.fullName": 1
            }
          },
          { 
            $sort: { 
                createdAt: -1 
            }}    // latest reviews first
    ])
    if(!review) throw new ApiError(401, "id is required")


    return res.status(200).json(
        new ApiResponse(
            200,
            {
                review
            },
            "book review fatch successfully"
        )
    )
})

const deleteReview = asyncHandler( async (req, res) => {
    console.log(req.params);
    
    const {reviewId} = req.params
    console.log(reviewId);
    if(!reviewId) throw new ApiError(401, "review Id is required")

    const deleteReview = await Review.findByIdAndDelete(reviewId)
    if(!deleteReview) throw new ApiError(401, "deleteReview is required")


    return res.status(200).json(new ApiResponse(
        200,
        deleteReview,
        "delete book successfully"
    ))
})

export {
    addReview,
    getBookReview,
    deleteReview
}