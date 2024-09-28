"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("Iam a Message"));
console.log("Test");
const fail = (msg) => {
    throw new Error(msg);
};
function alwaysLog(name) {
    while (true) {
        console.log(name);
    }
}
console.log(alwaysLog("Muhammed"));
//# sourceMappingURL=main.js.map