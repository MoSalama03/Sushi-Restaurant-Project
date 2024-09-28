function logging(msg: string): void {
  console.log(msg);
  return;
}

console.log(logging("Iam a Message"));
console.log("Test");

const fail = (msg: string): never => {
  throw new Error(msg);
};

function alwaysLog(name: string): never {
  while (true) {
    console.log(name);
  }
}

console.log(alwaysLog("Muhammed"));
