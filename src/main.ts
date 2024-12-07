interface User {
  id: number;
  username: string;
  country: string;
}

let user: User = {
  id: 100,
  username: "Muhammed",
  country: "Egypt",
};

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Muhammed", country: "UAE" });
