# Movie Review API

A simple API to manage movie reviews. You can list movies, view a single review, add a review, update a movie, or delete a review.

## How to Run

1. Clone the repo.
2. Run `npm install` to install all dependencies.
3. Run `npm run dev` to start the server (auto-restarts on changes).

## API Endpoints

- **GET /movies**  
  List all movie reviews.

- **GET /movie/:id**  
  Get a movie review by its ID.

- **POST /movies**  
  Add a new movie review. (Requires title and rating)

- **PUT /movie/:id**  
  Update a movie review.

- **DELETE /movie/:id**  
  Delete a movie review.

## Tools Used

- **Express.js**: Server framework.
- **Nodemon**: Auto-reloads server on changes.
- **Morgan**: Logs HTTP requests.
- **dotenv**: Manages environment variables.
