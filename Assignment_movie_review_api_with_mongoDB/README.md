#Movie Review API with MongoDB (Local Setup)

This project is a RESTful API built using Express.js and MongoDB Compass (Local Database) for managing movie reviews. It supports CRUD (Create, Read, Update, Delete) operations for movie reviews.

#Getting Started

##Prerequisites

Ensure you have the following installed:

Node.js (v18 or higher recommended)

MongoDB Compass (for local database management)


##Installation

Clone the Repository

git clone <repository-url>
cd <project-folder>

Install Dependencies

npm install

Add Environment Variables
Create a .env file in the root directory and add the following:

PORT=3000
MONGODB_URI=mongodb://localhost:3000/sample_mflix

MongoDB Compass Configuration

Open MongoDB Compass.

Connect to mongodb://localhost:3000.

Create a new database called sample_mflix with a collection called reviews.

Insert sample data using MongoDB Compass UI. Use the following sample data:

{
  "title": "The Matrix",
  "reviewer": "John Doe",
  "rating": 5,
  "review": "A groundbreaking sci-fi experience!",
  "movie": "The Matrix"
}

##How to Run the Project

Start the Server

npm start

Server Running Message
If everything is successful, you should see:

MongoDB connected successfully
Server running on port 3000

##API Endpoints


GET

/api/reviews/

Fetch all movie reviews

POST

/api/reviews/

Add a new movie review

PUT

/api/reviews/:id

Update a movie review by ID

DELETE

/api/reviews/:id

Delete a movie review by ID

##Sample Data for Postman (Body Data)

POST Request Sample Body

{
    "title": "The Matrix",
    "reviewer": "John Doe",
    "rating": 5,
    "review": "A groundbreaking sci-fi experience!",
    "movie": "The Matrix"
}

PUT Request Sample Body

{
    "title": "Inception",
    "reviewer": "Jane Doe",
    "rating": 4,
    "review": "A mind-bending thriller!",
    "movie": "Inception"
}



##Troubleshooting

MongoDB Connection Error: Ensure your .env file is correctly configured with the right MongoDB URI.

Port Already in Use: If port 3000 is busy, change the PORT value in your .env file.

Environment Variable Issues: Add this line in server.js before connecting MongoDB to verify your .env file is loaded:

console.log('MongoDB URI:', process.env.MONGODB_URI);

For further issues, feel free to ask for guidance.