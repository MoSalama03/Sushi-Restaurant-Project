type into = string;

let gMan: string = "Hossam";

type VIP = string | number;

let specialIndividual: VIP = "Hassan";

specialIndividual = 1000;

const promise = new Promise((resolve, reject) => {
  resolve(console.log("done"));

  reject(new Error("..."));
});

type Buttons = {
  up: string;
  right: string;
  left: string;
  bottom: string;
};

type Last = Buttons & {
  x: Boolean;
};

function getActions(btns: Last) {
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
