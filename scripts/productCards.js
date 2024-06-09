function createCard(product) {
  const { id, image, name, color, price, discount, taxes, finalPrice } =
    product;
  return `<a class="product-card" href="./details.html?id=${id}">
  <img
    src="${image[0]}"
    alt="${id}"
    class="product-img"
  />
  <div class="product-info">
    <span class="product-title"> ${name} </span>
    <span class="product-description"> ${color} </span>
    <div class="product-price-block">
      
       ${
         discount > 0
           ? `<div class="product-price-container">
           <span class="product-price">$${price} </span>
           <span class="product-finalprice">$${finalPrice} </span>
          </div>
           <span class="product-discount">${discount}% Off</span>`
           : `<span class="product-finalprice">$${price} </span>`
       } 
    </div>
    <div class="product-tax-policy">
      ${taxes}
    </div>
  </div>
</a>`;
}

function printCards(arrayofProducts, idSelector) {
  let productsTemplate = "";
  for (const element of arrayofProducts) {
    productsTemplate = productsTemplate + createCard(element);
  }
  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}
printCards(productosArray, "products");
