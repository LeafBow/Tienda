// function captureText()
// {
//     console.log("capturado")
// }
// let searchSelector = document.querySelector("#search");
// searchSelector.addEventListener("keyup",event =>captureText(event));

let searchSelector = document.querySelector("#search");
let busquedad = "";
const captureText = (event) => {
  busquedad = event.target.value;
  console.log(busquedad);
};

searchSelector.addEventListener("keyup", (event) => {
  captureText(event);
});

// --------Captura de los datos del evento----------------
// let searchSelector = document.querySelector("#search");
// const captureText = (eventData) => {
//   console.log(eventData);
// };

// searchSelector.addEventListener("keyup", (event) => {
//   captureText(event);
// });
