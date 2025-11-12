import { Books } from "../models/books.models.js"
import { ApiError } from "../utils/apiError.js"
import { asyncHandler} from "../utils/asyncHandler.js"
import { ApiResponse }  from "../utils/apiResponse.js"
import { BooksStatusEnum } from "../utils/constants.js"



const addBook =  asyncHandler(async (req, res) => {
    const { name, description, autharName, price, stock, ISBN, publishDate,  averageRating  } = req.body

    if(!name || !description || !autharName || !price || !ISBN || !stock || !publishDate || !averageRating ) throw new ApiError(401, "All book fileds are required")

    const exsitingBook = await Books.findOne({ ISBN })
    
    if(exsitingBook) throw new ApiError(404, "book is already exist") 

    const  book  = await Books.create({
        name,
        description,
        autharName,
        price,
        ISBN,
        stock,
        publishDate,
        averageRating,

    })

    // console.log(book);
    

    if(!book) throw new ApiError(404, "book not found") 

    return res.status(200).json(new ApiResponse(
        200,
        {
            book
        },
        "Book add in database successfully"    
    ))


    
    

})

const getBookInfo =  asyncHandler(async (req, res) => {


    // console.log(req.params);
    const { id } = await req.params

    // console.log(id);
    
    if(!id){ 
        throw new ApiError(404, "book id is not found") 
    } 
    
    const  book  = await Books.findById(id).populate("name autharName price stock publishDate ISBN averageRating")
    
    if(!book){ 
        throw new ApiError(404, "book is not found") 
    } 
    //3. return success
    return res.status(201).json(new ApiResponse(
        200,
        book,
        "get book info successfully"
    ))
})





const updateBook =  asyncHandler(async (req, res) => {
    const { id } = await req.params

    if(!id) throw new ApiError(401, "book id not found")
    
    const {price, name, stock, averageRating, totalReviews, status} = req.body
    

    if(price === undefined ||name === undefined||  stock === undefined || averageRating === undefined || totalReviews === undefined || status === undefined) throw new ApiError(401, "All book fileds are required")
    


    if(!Object.values(BooksStatusEnum).includes(status)){
        throw new ApiError(400, "Invalid status")
    }

    const UpdateBooksValue = await Books.findByIdAndUpdate(
        id,
        {   
            name,
            price,
            stock,
            averageRating,
            totalReviews,
            status
        },
        { new: true, runValidators: true }
    )
    if(!UpdateBooksValue) throw new ApiError(401, "book not update")

    // console.log(UpdateBooksValue);
        

    return res.status(200).json(new ApiResponse(
        200,
        {
            UpdateBooksValue,
        },
        "Update book successfully!"
    ))
})


const deleteBook =  asyncHandler(async (req, res) => {
    const { id } = await req.params

    if(!id) throw new ApiError(401, "book id not found")

    const deleteBook = await Books.findByIdAndDelete(id)

    if(!deleteBook) throw new ApiError(401, "book not update")

    return res.status(200).json(new ApiResponse(
        200,
        deleteBook,
        "delete book successfully"
    ))



})




export { 
    addBook,
    getBookInfo,
    updateBook,
    deleteBook
}