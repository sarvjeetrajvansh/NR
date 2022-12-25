// function x() {
//   const a = 10;
// }

// var xyz = 30;

// x(); // functional exectuinal context is created

// var x = function () {
//   console.log("I am an annonumos function");
// };

// // IN ES6

// //Arrow Function takes this of it's lexical parent
// const fn = () => { 

// }

console.log(this);

const obj = {
    fn: function () {
        
    },
    fn2: () => { console.log(this); },
};

obj.fn();
obj.fn2();