// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));
//////////////////////////////////////////////
//////////////////// Lesson 5.2///////////////
//////////////////////////////////////////////

import baseEl from"./template/base.hbs";
import listEl from"./template/list.hbs";
import frameworksEl from "./template/frameworks.hbs";
import libsEl from "./template/libs.hbs";

import { base,list, frameworks,libs } from "./data/hbsData";
import './styles/style.css';

const markup=baseEl(base);
const rootEl=document.querySelector("#root");
rootEl.insertAdjacentHTML("beforeend",markup);

const listsMarkup=listEl(list);
rootEl.insertAdjacentHTML("beforeend",listsMarkup);

const listOfFrameworksMarkup= frameworksEl(frameworks);
rootEl.insertAdjacentHTML("beforeend",listOfFrameworksMarkup);

const libsMarkup= libsEl(libs);
rootEl.insertAdjacentHTML("beforeend",libsMarkup);

