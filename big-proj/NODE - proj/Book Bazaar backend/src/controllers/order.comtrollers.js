import mongoose, { STATES } from "mongoose"
import { Books } from "../models/books.models.js"
import { Order } from "../models/order.models.js"
import { User } from "../models/user.model.js"
import { asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { 
    OrderStateEnum, 
    AvailableOrderState, 
    AvailableOrderPaymentStatus, 
    OrderPaymentStatusEnum  
} from "../utils/constants.js"


const createOrde = asyncHandler(async (req, res) => {
    const { quantity } = req.body
    if(!quantity) throw new ApiError(401, "All order fileds are required")
        
    const { email, username } = req.body
    if(!email || !username) throw new ApiError(401, "User fields are required!")
    
    const user = await User.findOne({ $or: [{email}, {username}]})
    if(!user) throw new ApiError(401, "user is  required!")

    const { bookId } = await  req.params
    if(!bookId) throw new ApiError(401, "Book id is  required!")

    if (!mongoose.Types.ObjectId.isValid(bookId))  throw new ApiError(400, "Invalid book ID format");
    
    const book = await Books.findById(bookId)
    if(!book) throw new ApiError(401, "books is  required!")

    let total = book.price * quantity
    if(!total) throw new ApiError(401, "Total quantity price is required!")

    const order = await Order.create({        
        user: user._id,
        books: book._id,
        quantity,
        total,
        price: book.price * quantity 
    })    
    if(!order) throw new ApiError(401, "order required!")

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                order
            },
            "Order create successfully!"
        )
    )
})

const getUserOrder = asyncHandler(async (req, res) => {
    //1. get user info
    const { username, email } = req.body

    if(!username || !email) throw new ApiError(401, "user info is  required!")
    
    //2. get book info
    console.log(req.params);
    
    const { bookId } = await req.params
    console.log(bookId);
    if(!bookId) throw new ApiError(401, "Book id is  required!")

    if (!mongoose.Types.ObjectId.isValid(bookId))  throw new ApiError(400, "Invalid book ID format");
    
    const book = await Books.findById(bookId)
    if(!book) throw new ApiError(401, "books is  required!")
    
    //3. get order info
    const {orderId} = req.params
    //4. validate
    if(!orderId) throw new ApiError(400, "order id is required")

    const order = await Order.findById(orderId).populate("quantity price user books")

    if(!order) throw new ApiError(400, "order is required")

    return res.status(200).json(new ApiResponse(
        200,
        {
            order
        },
        "fetch order info successfully"
    ))
})



const updateOrder = asyncHandler(async (req, res) => {

        const { bookId } = await req.params
        if(!bookId) throw new ApiError(401, "Book id is  required!")

        const book = await Books.findById(bookId)
        if(!book) throw new ApiError(401, "books is  required!")
        
        const  {
            price,
            quantity,
            paymentStatus,
            state
        } = req.body
        // console.log("price ===>",price);
        // console.log("quantity ==> ",quantity);
        // console.log("books ==> ",book);
        // console.log("payment status == > ",paymentStatus);
        // console.log("state ==> ",state);
        
        if(!price || !quantity || !book || !paymentStatus || !state) throw new ApiError(401, "order info is  required!")


        const { orderId } = req.params
        if(!orderId) throw new ApiError(400, "order id is required")
        
        if(!Object.values(OrderStateEnum).includes(state)) throw new ApiError(400, "Invalid state")
        
        if(!Object.values(OrderPaymentStatusEnum).includes(paymentStatus)) throw new ApiError(400, "Invalid payment status")
        
        const updateOrder = await Order.findByIdAndUpdate(
            orderId,{
                quantity,
                price: book.price * quantity, 
                book,
                paymentStatus,
                state
            },
            {
                new: true, runValidators: true
            }
        )
        if(!updateOrder) throw new ApiError(400, "order id is required")
        
            return res.status(200).json(new ApiResponse(
                200,
                {
                    updateOrder
                },
                "update order info successfully"
            ))
})

const deleteOrder = asyncHandler(async (req, res) => {    
    const { orderId } = req.params
    if(!orderId) throw new ApiError(400, "order id is required")

    const deleteOrder = await Order.findByIdAndDelete(orderId)
    if(!deleteOrder) throw new ApiError(400, "order fatching error")

    return res.status(200).json(new ApiResponse(
        200,
        {},
        "order delete successfully"
    ))




})

export {
    createOrde,
    getUserOrder,
    updateOrder,
    deleteOrder
}