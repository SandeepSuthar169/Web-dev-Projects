import mongoose from "mongoose"
import { Books } from "../models/books.models.js"
import { Order } from "../models/order.models.js"
import { User } from "../models/user.model.js"
import { asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"


const createOrde = asyncHandler(async (req, res) => {
    const { quantity } = req.body
    if(!quantity ) throw new ApiError(401, "All order fileds are required")
        
    const { email, username } = req.body
    if(!email || !username) throw new ApiError(401, "User fields are required!")
    
    const user = await User.findOne({ $or: [{email}, {username}]})
    if(!user) throw new ApiError(401, "user is  required!")

    const { bookId } = await  req.params
    // console.log(bookId);
    // console.log(req.params);

    if(!bookId) throw new ApiError(401, "Book id is  required!")
    
    const book = await Books.findById(bookId)
    console.log(book);     
    if(!book) throw new ApiError(401, "books is  required!")

    let total = book.price * quantity
    if(!total) throw new ApiError(401, "Total quantity price is required!")

    const order = await Order.create({
        user: user._id,
        book: bookId,
        quantity,
        totalAmount: total
    })    
    if(!order) throw new ApiError(401, "order required!")

    return res.status(200).json(
        new ApiResponse(
            200,
            order,
            "Order create successfully!"
        )
    )
})

const getUserOrder = asyncHandler(async (req, res) => {

})



const getOrderOrderDetails = asyncHandler(async (req, res) => {

})

const updateOrder = asyncHandler(async (req, res) => {

})

const deleteOrder = asyncHandler(async (req, res) => {

})

export {
    createOrde
}