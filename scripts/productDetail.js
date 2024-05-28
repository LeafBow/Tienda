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
    src="./assets/mock1.jpg"
    alt="MacBoockPro13'4-1"
    onclick="changeMini(event)"
  />
  <img
    class="miniImg"
    src="./assets/mock2.jpg"
    alt="MacBoockPro13'4-2"
    onclick="changeMini(event)"
  />
  </div>
  <img id="bigIMG" src="${product.image}" alt="" />
  </div>
  `;
  const checkoutTemplate = `<div class="checkout-container">
  <span> Total: </span>
  <div class="precio-container">
    <h2>$</h2>
    <h2 id="precio">${product.price}</h2>
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
        onchange="validNumber()"
        min="1"
      />
      <button class="btn-primary">Comprar</button>
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
  console.log("changepriceid: " + id);
  let precio = producto.price;
  let newPrice = precio * numObjetos.value;
  priceAux.innerHTML = newPrice;
  console.log(newPrice);
  console.log(producto.price);
}
let productosCart = [];
function saveProduct(id) {
  const found = productosArray.find((each) => each.id == id);
  console.log(found);
  const product = {
    id: id,
    title: found.name,
    price: found.price,
    image: found.image,
    color: document.querySelector("#color").value,
    quantity: document.querySelector("#objetos").value,
  };

  if (localStorage.getItem("cart") == null) {
    productosCart = [];
    productosCart.push(product);
  } else {
    let cartProducts = JSON.parse(localStorage.getItem("cart"));
    console.log(cartProducts);
  }

  productosCart.push(product);
  console.log(productosCart);

  const stringifyProduct = JSON.stringify(productosCart);
  localStorage.setItem("cart", stringifyProduct);
}

const addProduct = document.getElementById("add");
addProduct.addEventListener("click", () => saveProduct(id));
numObjetos.addEventListener("input", () => changePrice(id));
