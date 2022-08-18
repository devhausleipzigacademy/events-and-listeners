//////////////////////////////
////  Grab HTML Elements  ////
//////////////////////////////

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

///////////////////////////////
////  Add Event Listeners  ////
///////////////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

// grandparent.addEventListener("click", (event) => {
// 	console.log(event);
// });

// ===========================

// grandparent.addEventListener("click", (event) => {
// 	console.log("grandparent listener");
// });

// parent.addEventListener("click", (event) => {
// 	console.log("parent listener");
// });

// child.addEventListener("click", (event) => {
// 	console.log("child listener");
// });

// document.addEventListener("click", (event) => {
// 	console.log("document listener");
// });

// ===========================

// grandparent.addEventListener(
// 	"click",
// 	(event) => {
// 		console.log("grandparent capture listener");
// 	},
// 	{ capture: true }
// );

// parent.addEventListener(
// 	"click",
// 	(event) => {
// 		console.log("parent capture listener");
// 	},
// 	{ capture: true }
// );

// child.addEventListener(
// 	"click",
// 	(event) => {
// 		console.log("child capture listener");
// 	},
// 	{ capture: true }
// );

// https://www.w3.org/TR/DOM-Level-3-Events/#event-flow

// ===========================

// parent.addEventListener("click", (event) => {
// 	console.log("parent listener");
// 	event.stopPropagation();
// });

// parent.addEventListener(
// 	"click",
// 	(event) => {
// 		console.log("parent listener");
// 	},
// 	{ once: true }
// );

// ===========================

// function printSomething(event) {
// 	console.log("parent listener");
// }

// parent.addEventListener("click", printSomething);

// parent.removeEventListener("click", printSomething);

////////////////////////////
////  Event Delegation  ////
////////////////////////////

// const divs = document.querySelectorAll("#wrapper div");

// divs.forEach((div) => {
// 	div.addEventListener("click", (event) => {
// 		console.log(`${div.classList}`);
// 	});
// });

// const newDiv = document.createElement("div");
// newDiv.style.width = "500px";
// newDiv.style.height = "500px";
// newDiv.style.backgroundColor = "purple";

// document.querySelector("#wrapper").append(newDiv);

// document.addEventListener("click", (event) => {
// 	if(event.target.matches("#wrapper div")){
//         // do something
//     }
// });

// function addGlobalEventListener(type, selector, callback) {
// 	document.addEventListener(type, (event) => {
// 		if (event.target.matches(selector)) {
// 			callback(event);
// 		}
// 	});
// }

// addGlobalEventListener("click", "#wrapper div", (event) => {
// 	console.log("Success!!");
// });

////////////////////
////  Exercise  ////
////////////////////

/*
Can you replicate the behavior of all of these CSS pseudo-selectors using JavaScript?


:hover        // hint: mouseover, mouseout events
:active       // hint: mousedown, mouseup events
:focus        // hint: focus, blur events
:empty        // hint: element.children.length > 0


https://www.w3schools.com/cssref/css_selectors.asp

https://developer.mozilla.org/en-US/docs/Web/API/Element#methods

https://www.w3schools.com/jsref/obj_mouseevent.asp
*/
