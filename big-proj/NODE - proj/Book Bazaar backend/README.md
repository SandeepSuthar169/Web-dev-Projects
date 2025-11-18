
# Book Bazaar Backend


A robust built with Node.js, Express, and MongoDB. This server provides endpoints for user authentication, book inventory management and order processing.

## Features
- User Authentication & Authorization: Secure user registration and login using JWT (JSON Web Tokens).

- Book Management: Full CRUD (Create, Read, Update, Delete) operations for books and order. 
- Order System: Complete order system, history tracking, and status management. 
- Security: Password hashing with bcrypt, environment variable configuration, and CORS support.
- Error Handling: Centralized error handling middleware for robust API responses.

## Tech Stack
 - Runtime: Node.js

 - Framework: Express.js

 - Database: MongoDB with Mongoose ODM

 - Authentication: JSON Web Tokens (JWT)

 - Password Hashing: bcryptjs

 - Environment Variables: dotenv

 - CORS: cors

### Project Schema 

###  Installation & Setup

1. Clone the repository

```bash
git clone https://github.com/SandeepSuthar169/Web-dev-Projects.git
cd Web-dev-Projects/big-proj/NODE%20-%20proj/Book%20Bazaar%20backend 
``` 
2. Clone the repository

```bash
npm install
```

3. Start the Server
```bash
npm run dev
npm start
```

## API Endpoints & Usage

Authentication Routes (`/api/users`)
| Method | Endpoint    | Description                |
| :-------- | :------- | :------------------------- |
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate user & get token |
| GET | `/profile` | Get user profile |
| POST | `/verify` | Verify a user |

Book Routes (`/api/books`)
| Method | Endpoint    | Description                |
| :-------- | :------- | :------------------------- |
| POST | `/BookAdd` | Register new Book in DB	|
| GET | `/:id` | Fectch Book Info |
| POST | `/:id/status` | Update Book |
| DELETE | `/:id/delete` | Delete Book |

Book Routes (`/api/review`)
| Method | Endpoint    | Description                |
| :-------- | :------- | :------------------------- |
| POST | `/BookId/addReview` | Add new Review in DB	|
| GET | `/:BookId/bookReview` | Fectch Review Info |
| POST | `/:reviewId/deleteReview` | Delete Review |


Book Routes (`/api/order`)
| Method | Endpoint    | Description                |
| :-------- | :------- | :------------------------- |
| POST | `/createOrder/:bookId` | Add new Order in DB	|
| GET | `/userOrder/:bookId/:orderId` | Fectch Order Info |
| POST | `/updateOrder/:bookId/:orderId` | Update Order |
| POST | `/deleteOrder/:orderId` | Delete Order |
