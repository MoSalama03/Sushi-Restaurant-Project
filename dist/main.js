"use strict";
let gMan = "Hossam";
let specialIndividual = "Hassan";
specialIndividual = 1000;
const promise = new Promise((resolve, reject) => {
    resolve(console.log("done"));
    reject(new Error("..."));
});
function getActions(btns) {
    console.log(`Actions For Button Up is ${btns.up}`);
    console.log(`Actions For Button Up is ${btns.right}`);
    console.log(`Actions For Button Up is ${btns.left}`);
    console.log(`Actions For Button Up is ${btns.bottom}`);
}
getActions({
    up: "Jump",
    right: "Go Right",
    left: "Go Left",
    bottom: "Crouch",
    x: true,
});
//# sourceMappingURL=main.js.map