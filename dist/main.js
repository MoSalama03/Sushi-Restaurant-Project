"use strict";
function getHardSeconds() {
    return 3;
}
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 25] = "Five";
    Kids[Kids["Seven"] = 20] = "Seven";
    Kids[Kids["Ten"] = 15] = "Ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["Kid"] = 15] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSeconds()] = "Hard";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level is ${lvl} And Number of Seconds ${Level.Medium}`);
}
//# sourceMappingURL=main.js.map