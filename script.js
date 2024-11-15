"use strict"
// console.log('Hello JavaScript!')
const validator = require('validator');
const validateEmail = (email) => {
return validator.isEmail(email);
}
console.log('Is bob@gmail.com valid email', validateEmail('bob@gmail.com'));
