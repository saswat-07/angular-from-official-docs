const fs = require('fs');

exports.handler = async (event) => {
  try {
    const data = fs.readFileSync('./src/db.json', 'utf8'); // Read db.json
    return {
      statusCode: 200, // Set status code to success (200)
      body: data, // Return the read data in the response body
    };
  } catch (error) {
    console.error(error); // Log any errors to the Vercel logs
    return {
      statusCode: 500, // Set status code to internal server error (500)
      body: 'An error occurred while processing the request.',
    };
  }
};
