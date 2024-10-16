/* 
  Type Annotations With Object
*/

let myObject: {
  readonly username: string;
  id: number;
  hire?: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "Mohammed",
  id: 100,
  skills: {
    one: "HTMl",
    two: "CSS",
  },
};

myObject.id = 101;
myObject.hire = false;

console.log(myObject);
console.log(myObject.skills);
