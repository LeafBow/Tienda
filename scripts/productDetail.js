const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

// console.log(id);

if (!id) {
  const detailsSelector = document.getElementById("details");
  detailsSelector.innerHTML = `<h1 class="title">MacBook Pro 13'4</h1>
  <form class="selector">
    <fieldset>
      <label class="label" for="color">Color</label>
      <select type="text" placeholder="Selecciona un color">
        <option value="silver">Silver</option>
        <option value="space-gray">Space Gray</option>
      </select>
    </fieldset>
  </form>
  <h3>Descripción</h3>
  <p>
    Experience the power of creativity with the MacBook Pro13'4.
    Featuring 8GB of RAM and 512GB of storage, this laptop provides
    the performance and storage capacity needed for demanding tasks.
    The sleek design in silver and space gray adds a touch of
    sophistication. The high-resolution Retina display brings your
    visuals to life, whether you're editing photos, creating videos ,
    or simplly browsing the web. With the latest technology and
    lightweight build, the MacBoock Pro13'4 is the perfect companion
    for professionals and creative individuals alike.
  </p> `;
}

function printDetails(id) {
  const product = productosArray.find((each) => each.id == id);
  const detailsTemplate = `<h1 class="title">${product.name}</h1>
  <form class="selector">
    <fieldset>
      <label class="label" for="color">Color</label>
      <select type="text" id="color" placeholder="Selecciona un color">
        <option value="${product.color}">${product.color}</option>
        <option value="space-gray">Space Gray</option>
      </select>
    </fieldset>
  </form>
  <h3>Descripción</h3>
  <p>
    Experience the power of creativity with the ${product.name}.
    Featuring 8GB of RAM and 512GB of storage, this laptop provides
    the performance and storage capacity needed for demanding tasks.
    The sleek design in silver and space gray adds a touch of
    sophistication. The high-resolution Retina display brings your
    visuals to life, whether you're editing photos, creating videos ,
    or simplly browsing the web. With the latest technology and
    lightweight build, the MacBoock Pro13'4 is the perfect companion
    for professionals and creative individuals alike.
  </p>`;
  const imgsTemplate = `
  <div class="thumbnail-container">
   <img
    class="miniImg"
    src=${product.image[0]}
    alt="MacBoockPro13'4-1"
    onclick="changeMini(event)"
  />
  <img
    class="miniImg"
    src=${product.image[1]}
    alt="MacBoockPro13'4-1"
    onclick="changeMini(event)"
  />
  <img
    class="miniImg"
    src=${product.image[2]}
    alt="MacBoockPro13'4-2"
    onclick="changeMini(event)"
  />
  </div>
  <img id="bigIMG" src="${product.image[0]}" alt="" />
  </div>
  `;
  const checkoutTemplate = `<div class="checkout-container">
  <span> Total: </span>
  <div class="precio-container">
    ${
      product.discount > 0
        ? `<div class="precio2">
        <h2 class="price-0">Precio: </h2><span>$${product.price}</span></div>
          <h2 id="precio">$${product.finalPrice}</h2>
          `
        : `<h2 id="precio">$${product.finalPrice}</h2>`
    }
    
  </div>

  <p>
    Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
    50711 haciendo la solicitud en AFIP.
  </p>
  <ul class="instructions-container">
    <li>
      <i class="fa-solid fa-truck"></i>
      <p>
        Agregar el producto al carrito para conocer los costos de
        envío
      </p>
    </li>
    <li>
      <i class="fa-solid fa-plane"></i>
      <p>
        Recibír aproximadamente entre 10 y 15 dias habiles,
        selecionando envio normal
      </p>
    </li>
  </ul>
  <div class="checkout-process">
    <div class="top">
      <input
        type="number"
        value="1"
        id="objetos"
        
        min="1"
      />
      <button class="btn-primary" id ="buy">Comprar</button>
    </div>
    <div class="bottom">
      <button class="btn-outline" id="add">Añadir al Carrito</button>
    </div>
  </div>
</div>`;
  const detailsSelector = document.getElementById("details");
  detailsSelector.innerHTML = detailsTemplate;
  const imgsSelector = document.getElementById("imagenes");
  imgsSelector.innerHTML = imgsTemplate;
  const checkoutSelector = document.getElementById("checkout");
  checkoutSelector.innerHTML = checkoutTemplate;
}

printDetails(id);
const numObjetos = document.getElementById("objetos");
function changePrice(id) {
  const priceAux = document.getElementById("precio");

  const producto = productosArray.find((each) => each.id == id);

  if (producto.discount > 0) {
    let precio = producto.finalPrice;
    let newPrice = precio * numObjetos.value;
    priceAux.innerHTML = `$${newPrice}`;
  } else {
    let precio = producto.price;
    let newPrice = precio * numObjetos.value;
    priceAux.innerHTML = `$${newPrice}`;
  }
}
function saveProduct(id) {
  const product = productosArray.find((each) => each.id == id);
  let $price = product.discount > 0 ? product.finalPrice : product.price;
  let $quantity = parseInt(document.getElementById("objetos").value);
  let $color = document.getElementById("color").value;
  let productArray = [
    {
      id: product.id,
      name: product.name,
      price: $price,
      quantity: $quantity,
      color: $color,
      img: product.image[0],
    },
  ];

  //Obtenemos valores del localStorage si existe
  const retrievedArray = JSON.parse(localStorage.getItem("cart"));
  if (retrievedArray) {
    for (let index of retrievedArray) {
      if (
        index.id != productArray[0].id ||
        index.color != productArray[0].color
      ) {
        productArray.push(index);
        //Convertimos el array a una cadena JSON
        const jsonString = JSON.stringify(productArray);
        localStorage.setItem("cart", jsonString);
        console.log(productArray);
      } else {
        productArray[0].quantity += index.quantity;
        //Convertimos el array a una cadena JSON
        const jsonString = JSON.stringify(productArray);
        localStorage.setItem("cart", jsonString);
        console.log(productArray);
      }
    }
  } else {
    //Convertimos el array a una cadena JSON
    const jsonString = JSON.stringify(productArray);
    //Guardamos la cadena JSON en el localStorage
    localStorage.setItem("cart", jsonString);
  }

  //Convertimos el array a una cadena JSON
  const jsonString = JSON.stringify(productArray);
}
function clearLocalStorage() {
  localStorage.clear();
}
const clear = document.getElementById("buy");
const addProduct = document.getElementById("add");
addProduct.addEventListener("click", () => saveProduct(id));
numObjetos.addEventListener("input", () => changePrice(id));
clear.addEventListener("click", () => clearLocalStorage());

// window.addEventListener("load", () => {
//   console.log(
//     "Local storage on page load:",
//     JSON.parse(localStorage.getItem("cart"))
//   );
// });
