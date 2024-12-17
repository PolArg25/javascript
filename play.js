// const nameP = 'Max';
// let age = 30;

// age = 31;

// //arrow functions
// const summarizeUser = (userName, userAge) => {
//     return ('Name is ' + userName + ' and age is ' + userAge);
// }
// console.log(summarizeUser(nameP, age));

// const add = (a, b) => a+b;

// console.log(add(3,5));

// const person = {
//     nme : 'Max',
//     age: 23,
//     greet () {
//         console.log ('Hi, I am ' + this.nme );
//     }
// };
// const {var1, var2} = person;
// console.log(var1, var2);

// const copiedPerson = {...person};
// console.log(copiedPerson);
// person.greet();

// const hobbies = ['Sport', 'Cooking'];
// // for(let hobby of hobbies) {
// //     console.log(hobby);
// // }
// hobbies.push('Programming');

// const copiedHobbies = [...hobbies];
// console.log(copiedHobbies);
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1,2,3,4));

// // function
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// // callback function
// function callMe() {
//     console.log('I am callback function');
// }

// // passing function as an argument
// greet('Peter', callMe);

// // Callback Function Example
// function greet(name, myFunction) {
//     console.log('Hello world');

//     // callback function
//     // executed only after the greet() is executed
//     myFunction(name);
// }

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);

//Async code
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Done!');
        }, 1500);
    });
    return promise;
};
  
setTimeout(() => {
console.log('Timer is done!');
fetchData()
    .then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
