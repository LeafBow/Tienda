function changeMini(event) {
  const miniImg = event.target.src;
  const bigImgSelector = document.getElementById("bigIMG");
  bigImgSelector.src = miniImg;
  console.log(bigImgSelector);
}

// Seleccionar todos los elementos con la clase "miniImg"
const elementos = document.getElementsByClassName("miniImg");
const elementos2 = document.getElementsByClassName("Img2");

// Iterar sobre cada elemento y agregar el estilo de cursor de puntero
function converCursor(element) {
  for (let i = 0; i < element.length; i++) {
    return (element[i].style.cursor = "pointer");
  }
}

converCursor(elementos);
converCursor(elementos2);
let precio = document.getElementById("precio");
const subprecio = Number(precio.innerHTML);
function changeSubtotal(objetos) {
  precio.innerHTML = subprecio * objetos;
}
const numObjetos = document.getElementById("objetos");

numObjetos.addEventListener("input", function () {
  const valorImput = Number(numObjetos.value);
  changeSubtotal(valorImput);
  console.log(valorImput);
});
