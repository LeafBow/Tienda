// function captureText()
// {
//     console.log("capturado")
// }
// let searchSelector = document.querySelector("#search");
// searchSelector.addEventListener("keyup",event =>captureText(event));

let searchSelector = document.querySelector("#search");
let busquedad = "";
let array2 = [];
let timeoutId;
const captureText = () => {
  clearTimeout(timeoutId); // Limpiar el temporizador si existe uno previo
  timeoutId = setTimeout(() => {
    // Convertir el texto de búsqueda a minúsculas para comparación sin distinción de mayúsculas y minúsculas
    busquedad = searchSelector.value.toLowerCase();

    // Limpiar array2 antes de agregar nuevos elementos
    array2 = [];

    // Si la búsqueda está vacía, imprimir el arreglo original y salir de la función
    if (!busquedad) {
      printCards(productosArray, "products");
      return;
    }

    // Filtrar productos que coincidan con la búsqueda
    for (let product of productosArray) {
      if (busquedad && product.name.toLowerCase().includes(busquedad)) {
        array2.push(product);
      }
    }

    console.log(array2);
  }, 500); // 300 milisegundos (0.3 segundos) de retraso antes de ejecutar la función captureText
  printCards(array2, "products");
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
