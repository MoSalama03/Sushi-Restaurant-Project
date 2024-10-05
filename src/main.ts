function getHardSeconds(): number {
  return 3;
}

const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;

enum Kids {
  Five = 25,
  Seven = 20,
  Ten = 15,
}

enum Level {
  Kid = Kids.Ten,
  Easy = 9,
  Medium = Easy - 3,
  Hard = getHardSeconds(),
}

let lvl: string = "Easy";

if (lvl === "Easy") {
  console.log(`The Level is ${lvl} And Number of Seconds ${Level.Medium}`);
}

let myImg = <HTMLImageElement>document.getElementById("img");

console.log(myImg.src);
