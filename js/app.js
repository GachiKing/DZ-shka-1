// for (let i = 1; i <= 99; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }
//   for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
//   }

// function a(product, energy) {
//   switch (product) {
//     case "Сникерс":
//       switch (energy) {
//         case "Б":
//           return console.log(7);
//         case "Ж":
//           return console.log(24);
//         case "У":
//           return console.log(63);
//       }
//       break;
//     case "Твикс":
//       switch (energy) {
//         case "Б":
//           return console.log(4);

//         case "Ж":
//           return console.log(24);

//         case "У":
//           return console.log(65);
//       }
//       break;
//     case "Марс":
//       switch (energy) {
//         case "Б":
//           return console.log(5);

//         case "Ж":
//           return console.log(19);

//         case "У":
//           return console.log(68);
//       }
//       break;
//     case "Киткат":
//       switch (energy) {
//         case "Б":
//           return console.log(2);

//         case "Ж":
//           return console.log(9);

//         case "У":
//           return console.log(18);
//       }
//       break;
//     default:
//       console.log("Пример: Сникерс, Б");
//   }
// }
// a("Киткат", "У");

//_________| Б  Ж  У
// Сникерс | 7  24 63
// Твикс   | 4  24 65
// Марс    | 5  19 68
// Киткат  | 2  9  18

// const box = document.querySelector(".box");
// for (let i = 10; i < 1;  i--) {
//   for (let j = 0; j < i; j++) {
//     box.innerHTML += "$ ";
//   }
//   for (let j = 10; j > i; j--) {
//     box.innerHTML += "*";
//   }
//   box.innerHTML += "<br>";
// }



// const box = document.querySelector(".box");
// const input = document.querySelector(".input");

// input.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     box.innerText = e.target.value;
//   }
// });


const main = document.querySelector("main")
const box = document.querySelector(".box");
const input = document.querySelector(".input");

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {

    main.style.cssText=`background-color:${e.target.value};`;
  }
});