import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/apiError.js"
import { ApiResponse } from "../utils/apiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"



const registerUser = asyncHandler(async (req, res) => {
        //1. get user details from fronted

        const {username, email, password}  = req.body
        // console.log("username:", username, "email:", email);

        // console.log(req.body);
        
        //2. validation- not empty
        if(
            [email, username, password].some((field) => 
                field?.trim() === "")
        ){
            throw new ApiError(404, "All filed are required")
        }

        //3. check if user already exists: username, email
        const existedUser = await User.findOne({
            $or: [{ username }, { email }] // this is mongodb aggregarion pipeline for find user base on email and username

        })

        if(existedUser){
            throw new ApiError(409, "User already exists")
        }

        
        // create user object - create entry in db
       const user = await User.create({
            email,
            password,
            username: username
        })
        // console.log(fullName, email, password, username);
        
        if(!user){
            throw new ApiError(404, "User is required!")
        }

        // remove password and refresh token field form response
        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )
        
        // check for user creation
        if(!createdUser){
            throw new ApiError(404, "createdUser is required")
        }

        // console.log(createdUser);
        
        // return res
        return res.status(201).json(
            new ApiResponse(201, 
                createdUser,
                "User registered successfully!"
            )
        )

})



const loginUser = asyncHandler(async (req, res) => {
    //1. req.body -> data
    const {email, username, password} = req.body 

    
    
    //2. username or email
    if(!email && !username){
        throw new ApiError(404, "username and email is required")
    }

    if(!password){
        throw new ApiError(404, "password is not here...")
    }
    //3. find the user
    const user = await User.findOne({
        $or: [{email}, {username}]
    })

    if(!user){
        throw new ApiError(404, "user is not exist")
    }
    // //4. passowd check

    // console.log("=================");
    
    const isPasswordValid =  await user.isPasswordCorrect(password)

    // console.log("password", password);
    // console.log("isPasswordCorrect", user.isPasswordCorrect(password));
    // console.log("user", user);
    
    // console.log("=================");

    if(!isPasswordValid){
        throw new ApiError(404, "password is not valid here")
    }
    
    
    //5. access and refresh token generate


    const accessToken = await  user.generateAccessToken()
    const refreshToken =  await user.generateRefreshToken()


        

    if(!accessToken || !refreshToken) {
        throw new ApiError(500, "access and refresh token is not found!")
    }
        
    user.refreshToken = refreshToken


        
    await user.save({ validateBeforeSave: false })
        
        
 
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")


    if(!loggedInUser){
        throw new ApiError(404, "loggedInUser is not found")
    }


    const cookieOptions = {
        httpOnly: true,
        secure: false, // must be false for localhost testing
        sameSite: "lax", // allows sending cookie on same site
      };
      

      

    //6. send to cookie
    res
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .status(200)
    .json(
      new ApiResponse(
        200,{
             user: loggedInUser, accessToken, refreshToken 
            },
        "User logged in successfully"
      )
    );
})



const logoutUser = asyncHandler(async (req, res) => {

    // console.log("req <====> ",req);
    console.log("req.user <+++++>",req.user);
    console.log("req.user._id  <=======>",req.user._id);
    
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
                // accessToken: undefined
            }
        },
        {
            new: true
        }
    )

    const cookieoption = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .clearCookie("accessToken", cookieoption)
        .clearCookie("refreshToken", cookieoption)
        .json(
        new ApiResponse(
            200,
            {},
            "User logout successfully!"
        )
    )


})


export {
    registerUser,
    loginUser,
    logoutUser
}