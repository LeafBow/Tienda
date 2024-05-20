// const productsSelector = document.getElementById("products");

// let productsTemplate = `<a class="product-card" href="./details.html">
// <img
//   src="./assets/mock1.jpg"
//   alt="Macbook Pro"
//   class="product-img"
// />
// <div class="product-info">
//   <span class="product-title" id="productTitle">
//     Mackbook Pro 15'4
//   </span>
//   <span class="product-description"> Space Gray </span>
//   <div class="product-price-block">
//     <span class="product-price"> $750.00 </span>
//     <span class="product-discount"> 50% Off </span>
//   </div>
//   <div class="product-tax-policy">
//     Incluye impuesto País y percepción AFIP
//   </div>
// </div>
// </a>
// <a class="product-card" href="./details.html">
// <img
//   src="./assets/mock1.jpg"
//   alt="Macbook Pro"
//   class="product-img"
// />
// <div class="product-info">
//   <span class="product-title"> Mackbook Pro 15'4 </span>
//   <span class="product-description"> Space Gray </span>
//   <div class="product-price-block">
//     <span class="product-price"> $750.00 </span>
//     <span class="product-discount"> 50% Off </span>
//   </div>
//   <div class="product-tax-policy">
//     Incluye impuesto País y percepción AFIP
//   </div>
// </div>
// </a>
// <a class="product-card" href="./details.html">
// <img
//   src="./assets/mock1.jpg"
//   alt="Macbook Pro"
//   class="product-img"
// />
// <div class="product-info">
//   <span class="product-title"> Mackbook Pro 15'4 </span>
//   <span class="product-description"> Space Gray </span>
//   <div class="product-price-block">
//     <span class="product-price"> $750.00 </span>
//     <span class="product-discount"> 50% Off </span>
//   </div>
//   <div class="product-tax-policy">
//     Incluye impuesto País y percepción AFIP
//   </div>
// </div>
// </a>
// <a class="product-card" href="./details.html">
// <img
//   src="./assets/mock1.jpg"
//   alt="Macbook Pro"
//   class="product-img"
// />
// <div class="product-info">
//   <span class="product-title"> Mackbook Pro 15'4 </span>
//   <span class="product-description"> Space Gray </span>
//   <div class="product-price-block">
//     <span class="product-price"> $750.00 </span>
//     <span class="product-discount"> 50% Off </span>
//   </div>
//   <div class="product-tax-policy">
//     Incluye impuesto País y percepción AFIP
//   </div>
// </div>
// </a>
// <a class="product-card" href="./details.html">
// <img
//   src="./assets/mock1.jpg"
//   alt="Macbook Pro"
//   class="product-img"
// />
// <div class="product-info">
//   <span class="product-title"> Mackbook Pro 15'4 </span>
//   <span class="product-description"> Space Gray </span>
//   <div class="product-price-block">
//     <span class="product-price"> $750.00 </span>
//     <span class="product-discount"> 50% Off </span>
//   </div>
//   <div class="product-tax-policy">
//     Incluye impuesto País y percepción AFIP
//   </div>
// </div>
// </a>
// <a class="product-card" href="./details.html">
// <img
//   src="./assets/mock1.jpg"
//   alt="Macbook Pro"
//   class="product-img"
// />
// <div class="product-info">
//   <span class="product-title"> Mackbook Pro 15'4 </span>
//   <span class="product-description"> Space Gray </span>
//   <div class="product-price-block">
//     <span class="product-price"> $750.00 </span>
//     <span class="product-discount"> 50% Off </span>
//   </div>
//   <div class="product-tax-policy">
//     Incluye impuesto País y percepción AFIP
//   </div>
// </div>
// </a>
// `;
function createCard(product) {
  const { id, image, name, color, price, discount, taxes } = product;
  return `<a class="product-card" href="./details.html?id=${id}">
  <img
    src="${image}"
    alt="${id}"
    class="product-img"
  />
  <div class="product-info">
    <span class="product-title"> ${name} </span>
    <span class="product-description"> ${color} </span>
    <div class="product-price-block">
      <span class="product-price">$${price} </span>
      <span class="product-discount"> ${
        discount > 0
          ? `<span class="product-discount">${discount}% Off</span>`
          : ""
      } </span>
    </div>
    <div class="product-tax-policy">
      ${taxes}
    </div>
  </div>
</a>`;
}

// let productsTemplate = "";
// productsTemplate = createCard(productosArray[0]);
// console.log(productsTemplate);

// for (let i = 1; i < productosArray.length; i++) {
//   productsTemplate = productsTemplate + createCard(productosArray[i]);
// }
// productsSelector.innerHTML = productsTemplate;
function printCards(arrayofProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayofProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}
printCards(productosArray, "products");
