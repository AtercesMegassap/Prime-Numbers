const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const isPrime = (number) => {
  let divisor = 0;
  
  //A loop that goes from 1 to the number being checked.
  for (let index = 1; index <= number; index++) {
    const remainder = number % index;
    
    //If the remainder of the division is 0, the number of divisors is increased.
    if (remainder === 0) divisor++;
  }

  //If the checked number has only 2 divisors, it is prime; otherwise, it is not prime.
  if (divisor === 2) return true;
  else return false;
}

app.get('/Prime', (req, res) => {
  const primeNumbers = [];
  //Numbers to be validated as prime numbers.
  let number = 0;

  //A loop that runs until we have 10 prime numbers.
  while (primeNumbers.length < 10) {
    let primeValidator = isPrime(number);
    //If the number is prime, we add it to the array of prime numbers.
    if (primeValidator){
      primeNumbers.push(number);
    }
    //After checking the number, we move on to the next number.
    number++;
  }

  return res.json(`The first 10 prime numbers are ${primeNumbers}`)
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});