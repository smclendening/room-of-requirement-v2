// Practice with native ES6 Promises

let getFirstName = new Promise ((resolve, reject) => {
  // place your async code - http request, setTimeout etc.
  // result of your async code - pass to resolve
  // if error - pass to reject
  setTimeout(() => {
    let firstName = 'Enoch';
    resolve(firstName);
  }, 500);

});

let getMiddleName = function(name) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    let middleName = 'Joon';
    resolve(name + ' ' + middleName);
  }, 1000)
  })
}

let getLastName = function (name) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    let lastName = 'Kim';
    resolve(name + ' ' + lastName);
  }, 200)
  })
}


getFirstName
  .then((firstName) => {
    console.log('firstName:', firstName);
    return getMiddleName(firstName);
  })
  .then((firstMiddleName) => {
    console.log('firstMiddleName:', firstMiddleName)
    return getLastName(firstMiddleName);
  })
  .then((wholeName) => {
    console.log(wholeName);
  })

