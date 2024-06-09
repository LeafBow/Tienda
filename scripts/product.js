class Product {
  static _id = 1;
  constructor(image, name, color, price = 0, discount, taxes) {
    this._image = image;
    this._id = Product._id++;
    this._name = name;
    this._color = color;
    this._price = price;
    this._discount = discount;
    this._finalPrice = this._price - (this._price * this._discount) / 100;
    this._taxes = taxes;
    this.calculateFinalPrice();
  }
  calculateFinalPrice() {
    this._finalPrice = this._price - (this._price * this._discount) / 100;
  }
  get id() {
    return this._id;
  }
  get image() {
    return this._image;
  }
  set image(image) {
    this._image = image;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }

  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }

  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
    this.calculateFinalPrice(); // Recalcula el precio final cuando se cambia el precio base
  }
  get finalPrice() {
    return this._finalPrice;
  }
  get discount() {
    return this._discount;
  }

  set discount(discount) {
    this._discount = discount;
  }
  get taxes() {
    return this._taxes;
  }
}
const productTitle = document.getElementById("productTitle");

const productos = [
  {
    nombre: "Mackboock Pro 13'4",
    imgs: [
      "../assets/Products_assets/Macbook/macbook.jpg",
      "../assets/Products_assets/Macbook/macbook2.jpg",
      "../assets/Products_assets/Macbook/macbook3.jpeg",
    ],
    color: ["Green", "Red", "DarkCyan"],
    price: 600,
    discount: 20,
    taxes: "Precio Total con IGV(18%)",
  },
  {
    nombre: "AirPods",
    imgs: [
      "../assets/Products_assets/AirPods/airpods.jpeg",
      "../assets/Products_assets/AirPods/airpods.jpeg",
      "../assets/Products_assets/AirPods/airpods.jpeg",
    ],
    color: ["Green", "Red", "DarkCyan"],
    price: 300,
    discount: 10,
    taxes: "Precio Total con IGV(18%)",
  },
  {
    nombre: "Apple TV",
    imgs: [
      "../assets/Products_assets/AppleTv/apple_tv.jpeg",
      "../assets/Products_assets/AppleTv/apple_tv2.jpeg",
      "../assets/Products_assets/AppleTv/apple_tv3.jpeg",
    ],
    color: ["Green", "Red", "DarkCyan"],
    price: 700,
    discount: 10,
    taxes: "Precio Total con IGV(18%)",
  },
  {
    nombre: "Iphone",
    imgs: [
      "../assets/Products_assets/Iphone/iphone.jpeg",
      "../assets/Products_assets/Iphone/iphone.jpeg",
      "../assets/Products_assets/Iphone/iphone.jpeg",
    ],
    color: ["Green", "Red", "DarkCyan"],
    price: 500,
    discount: 0,
    taxes: "Precio Total con IGV(18%)",
  },
  {
    nombre: "Ipad Pro",
    imgs: [
      "../assets/Products_assets/Ipad/ipad_pro.jpeg",
      "../assets/Products_assets/Ipad/ipad_pro.jpeg",
      "../assets/Products_assets/Ipad/ipad_pro.jpeg",
    ],
    color: ["Green", "Red", "DarkCyan"],
    price: 350,
    discount: 15,
    taxes: "Precio Total con IGV(18%)",
  },
  {
    nombre: "Apple Watch",
    imgs: [
      "../assets/Products_assets/AppleWatch/apple_watch.jpeg",
      "../assets/Products_assets/AppleWatch/apple_watch.jpeg",
      "../assets/Products_assets/AppleWatch/apple_watch.jpeg",
    ],
    color: ["Green", "Red", "DarkCyan"],
    price: 250,
    discount: 5,
    taxes: "Precio Total con IGV(18%)",
  },
];

let productosArray = [];
for (let i = 0; i < 6; i++) {
  let nuevoProducto = new Product(
    productos[i].imgs,
    productos[i].nombre,
    productos[i].color[0],
    productos[i].price,
    productos[i].discount,
    productos[i].taxes
  );
  productosArray.push(nuevoProducto);
}
