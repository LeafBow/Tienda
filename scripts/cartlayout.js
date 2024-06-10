const $main = document.getElementById("main");
//Obtenemos valores del localStorage si existe
const cartArray = JSON.parse(localStorage.getItem("cart"));
console.log(cartArray);
function createLayout(product = "") {
  const { img, name, price, color, quantity } = product;
  return `
  <div class="cart-container">
  <article class="products-container">
    <div class="img-container">
      <img src=${img || "../assets/mock1.jpg"} alt="img" id="img">
    </div>
    <div class="basic-info-container">
      <h3 class="title-product" id="name">${name || "Name"}</h3>
      <p class="product-color">${color || "Color"}</p>
      <div class="product-info">Info of the product</div>
      <div class='input-container'>
        <input id="number" type="number" value=${quantity || 3} readonly />
      </div>
    </div>
    <h3 class="product-price" id="produtPrice">
    ${`S/.${price}` || "S/.1000"}
    </h3>
  </article>
  <article class="price-total">
    <h1 class="title-cart"><span>Resumen</span><span>del</span><span>pedido</span></h1>
    <div class="price">
      <h3>Total</h3>
      <h3>${`S/.${price * quantity}` || "S/.1000"}</h3>
    </div>
    <p class="taxes">Precio Total con IGV(18%)</p>
    <button class="button-buy">Comprar</button>
  </article>
</div>

`;
}
function printCart(arrayCart, idSelector) {
  let carTemplate = "";
  for (const product of arrayCart) {
    carTemplate = carTemplate + createLayout(product);
  }
  const carSelector = document.getElementById(idSelector);
  carSelector.innerHTML = carTemplate;
}
printCart(cartArray, "main");
