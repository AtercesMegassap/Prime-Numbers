# Prime Numbers API

This is a simple Node.js API built with Express that generates the first 10 prime numbers. It listens for requests and calculates prime numbers using a custom prime number checking function.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Prime-Numbers
```
Navigate to the project directory:
```bash
cd Prime-Numbers
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

Use an API client (e.g., Postman) to send a GET request to http://localhost:3000/Prime. The API will respond with a JSON message containing the first 10 prime numbers.

Example Request:
```
GET http://localhost:3000/Prime
```
Example Response:
```"Os 10 primeiros numeros primos são 2,3,5,7,11,13,17,19,23,29"```

Prime Number Checking
The API uses a custom prime number checking function to calculate prime numbers. The function checks if a given number has exactly two divisors (1 and itself). The /Prime endpoint generates and returns the first 10 prime numbers.

