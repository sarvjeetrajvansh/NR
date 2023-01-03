/*
 * HMR - Hot Module Replacement / Hot Reload
 * File watcher algorithm  - c++
 *      keeps track of file changed
 * Parcel is doing HMR
 *
 * Bundling
 * Minify
 * cleaning our code
 * Super Fast Build algo
 * Dev & Production Build
 * Image Optimization
 * caching while development
 * compression
 * compatibility with old version of browser
 * Adds polyfills
 * Enable HTTPS on dev
 * Port Number
 * consistent Hashing algo for bundling
 * Zero Config
 * Transitive Dependencies
 * Tree Shaking - Removing unwanted code
 */

import React from "react";
import ReactDOM from "react-dom/client";

// below code is react element at end it's a JS OBJECT
const title = (
  <h1 id="title" key="h1">
    Title : Namaste React
  </h1>
);

const Tag = () => (
  <h1 id="tag" key="t1">
    Tag : Namaste React
  </h1>
);
// Everything is component in React
/**
 * React Component
 *  Functional - NEW
 *  class - OLD
 */

// Functional Component
// A js function returing a piece of Jsx, Component or object or reactElement
/**
 * Name of component start with capital letter (convention)
 */

//const data = api.getData();

const HeaderComponent = () => {
  return (
    <div>
      {/* {data} // leads to Xss , if data containe hacked code // JSX Sanitizes the code before executing , so JSX is safe */}
      {title}
      {Tag()}
      {1 + 2}
      <Tag /> {/*Componet composition or composing component */}
      <h1>React Functional Component</h1>
      <h2>A h2 tag</h2>
    </div>
  );
};

// const HeaderComponent2 = () => (
//   <div>
//     <h1>React Functional Component</h1>
//     <h2>A h2 tag</h2>
//   </div>
// );

// const HeaderComponent3 = function () {
//   return (
//     <div>
//       <h1>React Functional Component</h1>
//       <h2>A h2 tag</h2>
//     </div>
//   );
// };

// All three above are same

const root = ReactDOM.createRoot(document.getElementById("root"));

// render react element like below
//root.render(container);

// render react component like below

root.render(<HeaderComponent />);

// Jsx is react element at end and react element is a js object

// In react component within {} you can write any piece of js code.
