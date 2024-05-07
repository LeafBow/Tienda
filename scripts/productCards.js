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
  return `<a class="product-card" href="./details.html?id=${product.id}">
  <img
    src="${product.image}"
    alt="${product.id}"
    class="product-img"
  />
  <div class="product-info">
    <span class="product-title"> ${product.name} </span>
    <span class="product-description"> ${product.color} </span>
    <div class="product-price-block">
      <span class="product-price"> ${product.price} </span>
      <span class="product-discount"> ${product.discount} </span>
    </div>
    <div class="product-tax-policy">
      ${product.taxes}
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
