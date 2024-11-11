// for (let i = 1; i < 11; i++) {
//   let j = 2;
//   result = j * i;
//   console.log(`${j} * ${i} =${result}`);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 3;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 4;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 5;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 6;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 7;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 8;
//   console.log(j * i);
// }
// for (let i = 1; i < 11; i++) {
//   let j = 9;
//   console.log(j * i);
// }

// let hafta = prompt("Bugun haftani nechanchi kuni");
// switch (hafta) {
//   case "1":
//     alert("Dushanba");
//     break;
//   case "2":
//     alert("Seshanba");
//     break;
//   case "3":
//     alert("Chorshanba");
//     break;
//   case "4":
//     alert("Payshanba");
//     break;
//   case "5":
//     alert("Juma");
//     break;
//   case "6":
//     alert("Shanba");
//     break;
//   case "7":
//     alert("Yakshanba");
//     break;
//   default:
//     alert("Bunday hafta kuni yo'q");
//     break;
// }

// function qoshish(i, j) {
// for (i; i < 11; i++) {
// console.log(j * i);
// }
// }
// qoshish(2, 3);

// let plus = function (i, j, num) {
// for (i; i < num; i++) {
// return j * i;
// }
// };
// plus(9, 3, 10);

// let minus = (nam, mus) => {
// console.log(nam + mus);
// };
// minus(12, 29);

// function answer(a, b) {
// let result = 0;
// for (i = a; i <= b; i++) {
// if (i % a === 0) result += i;
// }
// return result;
// }
// answer(3, 20);
//
// function karra(b) {
//   for (i = 1; i <= b; i++) {
// for (j = 1; j <= 10; j++) {
//   console.log(`${i} * ${j} = ${i * j}`);
// }
// console.log("===============================");
//   }
// }
// karra(100);

// let person = {
//   name: "Johons libre",
//   age: 23,
//   bithday: 10,
// };
// console.log(person);
// Object.freeze(person);

// person.name = "yasavul";
// person.age = 34;

// console.log(person);

//1 masala
// let obj = {
// id: 1,
// name: "WebBrain",
// };
// for (a in obj) {
// console.log(a);
// }

//2 masala
// let obj2 = {
// id: 1,
// name: "WebBrain",
// };
// for (let key in obj2) {
// if (typeof obj2[key] === "number") {
// console.log(obj2[key]);
// }
// }
// let obj3 = {
// id: 1,
// name: "WebBrain",
// offline: true,
// online: true,
// individual: false,
// };
//
// for (let key in obj3) {
// if (typeof obj3[key] === "boolean") {
// console.log(`${key} : ${obj3[key]};`);
// }
// }

// let obj4 = {
// id: 1,
// name: "WebBrain",
// offline: true,
// online: true,
// individual: false,
// };
// function search(obj4, keys) {
// for (let i in obj4) {
// if ((obj4 == obj4, keys == i)) {
// console.log(`${i} : ${obj4[i]}`);
// } else "undefined";
// }
// }
// search(obj4, "name");
// 5 masala

// let teach = structuredClone(user);
// teach.budbf = 2442;
// console.log(teach);
//
// console.log(teach == user);
// console.log(teach === user);
// let user = {
// id: 1,
// name: "WebBrain",
// };
// let user2 = {
// id: 1,
// name: "WebBrain",
// jov: "dfbubu",
// };
// let user3 = {
// id: 474854,
// name: "WebBrain",
// };
// Object.assign(user, user2, user3);
// console.log(user);
// let person = {
// name: "Muhmmad",
// age: 20,
// sayHi: function () {
// console.log(this);
// },
// };
// person.sayHi();
let user = {
  name: "akbar",
  id: 12,
  say: function () {
    console.log(this);
  },
};
user.say();
