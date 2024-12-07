"use strict";
let user = {
    id: 100,
    username: "Muhammed",
    country: "Egypt",
};
console.log(user);
function getData(data) {
    console.log(`Id Is ${data.id}`);
    console.log(`Username Is ${data.username}`);
    console.log(`Country Is ${data.country}`);
}
getData({ id: 200, username: "Muhammed", country: "UAE" });
//# sourceMappingURL=main.js.map