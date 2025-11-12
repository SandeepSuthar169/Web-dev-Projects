import { Books } from "../models/books.models.js"
import { ApiError } from "../utils/apiError.js"
import { asyncHandler} from "../utils/asyncHandler.js"
import { ApiResponse }  from "../utils/apiResponse.js"



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
    


})


const getSingleBook =  asyncHandler(async (req, res) => {


})


const updateBook =  asyncHandler(async (req, res) => {


})


const deleteBook =  asyncHandler(async (req, res) => {


})




export { 
    addBook
}