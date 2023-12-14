# API Playground

## Description
API Playground is a backend project developed for practice purposes while learning backend development. It offers three routes: `/user`, `/quote`, and `/joke`, each capable of returning dummy JSON data. These routes support a `count` query parameter to specify the number of data items to retrieve.

## Routes

### `/user`
- **Description:** Returns dummy user data.
- **Example Usage:** `https://dummy-api-playground.vercel.app/user?count=5`
- **Response:** Returns 5 sets of dummy user data.

### `/quote`
- **Description:** Returns dummy quotes.
- **Example Usage:** `https://dummy-api-playground.vercel.app/quote?count=3`
- **Response:** Returns 3 sets of dummy quotes.

### `/joke`
- **Description:** Returns dummy jokes.
- **Example Usage:** `https://dummy-api-playground.vercel.app/joke?count=10`
- **Response:** Returns 10 sets of dummy jokes.

## Technologies Used
- Node.js
- Express.js

## How to Use
1. Clone the repository: `git clone https://github.com/sahilatahar/api-playground.git`
2. Install dependencies: `npm install`
3. Run the server: `npm start`
4. Access the routes using appropriate endpoints and query parameters as described above.

## Project Structure
```
api-playground/
├─ controllers
│  ├── jokeController.js
│  ├── quoteController.js 
│  └── userController.js
├─ data
│  ├── joke.json
│  └── quote.json
├─ routes/
│  ├── user.js # User route handling
│  ├── quote.js # Quote route handling
│  └── joke.js # Joke route handling
├─ services
│  ├── joke.js
│  ├── quote.js 
│  └── user.js
├─ utils 
│  └── getNumber.js
└─ index.js     # Entry point
```


## Contributing
Contributions are welcome! Feel free to fork the repository and create a pull request with your improvements or suggestions.

## License
This project is licensed under the [MIT License](LICENSE).
