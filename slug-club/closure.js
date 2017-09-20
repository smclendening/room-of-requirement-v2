

const secret = secret => {
  let secretWord = secret;

  return {
    getSecret: () => {
      console.log(secretWord);
    }
  }
}

// const closureObj = secret('whoa!');

// closureObj.getSecret();

const addNums = (num1, num2) => {
  return num1 + num2;
}

const curry = (num1) => {
  return (num2) => {
    return addNums(num1, num2);
  }
};

const addTo3 = curry(3);

const shouldBe5 = addTo3(2);
console.log('should be 5', shouldBe5);