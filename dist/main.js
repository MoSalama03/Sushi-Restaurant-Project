"use strict";
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
async function logger() {
    return console.log("Hello Wolrd!");
}
logger();
//# sourceMappingURL=main.js.map