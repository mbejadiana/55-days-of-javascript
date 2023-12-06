console.log(Object.getOwnPropertyNames(window));

// window.localStorage.setItem("key", "value");
window.localStorage.setItem("firstname", "Zino");
localStorage.setItem("lastname", "Mbeja");

const person = {
  fullName: "Diana Mbeja",
  location: "Nairobi",
}

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pineapple", "Mango", "Pawpaw"];

localStorage.setItem("fruits", JSON.stringify(fruits));

console.log(localStorage.getItem("firstname"));

localStorage.removeItem("fruits");

localStorage.clear();

localStorage.setItem("name", "Diana");
localStorage.setItem("age", "27");

console.log(localStorage.key(0));