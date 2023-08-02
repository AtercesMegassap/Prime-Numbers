# Simple-Calculator

This is a basic Node.js API built with Express that performs basic arithmetic operations. It listens for requests and calculates the result based on the provided numbers and operator.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
gh repo clone AtercesMegassap/Simple-Calculator
```
Navigate to the project directory:
```bash
cd Simple-Calculator
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

number1 (number): The first number for the operation.
number2 (number): The second number for the operation.
operator (string): The arithmetic operator (+, -, *, or /).

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Calculate with the following parameters in the request body, in JSON format:
{
  "number1": 5,
  "number2": 3,
  "operator": "*"
}

The API will respond with the result of the operation if both numbers are provided and valid. If any of the provided numbers is not valid, the API will return an error message.

Example Request:
```
GET http://localhost:3000/Calculate
Request Body:
{
  "number1": 5,
  "number2": 3,
  "operator": "*"
}
```
Example Response:
```The result of the operation is: 15```

Please note that you need to use an API client (e.g., Postman) to make requests to the API.

