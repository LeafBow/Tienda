const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");
console.log(id);
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
      <select type="text" placeholder="Selecciona un color">
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
  const checkoutTemplate = ``;
  const detailsSelector = document.getElementById("details");
  detailsSelector.innerHTML = detailsTemplate;
  const imgsSelector = document.getElementById("imagenes");
  imgsSelector.innerHTML = imgsTemplate;
}

printDetails(id);
console.log(id);
