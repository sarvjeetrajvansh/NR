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

const heading1 = React.createElement("h1", { id: "head1" }, "Head1");
const heading2 = React.createElement("h2", { id: "head2" }, "Head2");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
