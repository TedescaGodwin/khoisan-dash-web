const dotenv = require('dotenv');

// Load the environment variables from .env file
dotenv.config();

// Export the configuration object
module.exports = {
  baseUrl: "http://localhost:8080",
};
