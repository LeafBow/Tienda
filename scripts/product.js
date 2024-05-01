// Atctividad Creacion producto

// const producto1 =
// {
//     nombre: "celular",
//      precio: "1200",
//      stock: 2,
// };
// producto1.id = 'id123';
// producto1.foto = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"

// console.log(producto1);
// console.log(producto1.nombre);

// Actividad Creacion prodcuto 2

// class Product
// {
//     constructor(id, title, price, stock, images, onsale)
//     {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.stock = stock;
//         this.images = images;
//         this.onsale = onsale;
//     }

// }
// const prod1 = new Product();
// const prod2 = new Product('id001','agua',1.5);
// const prod3 = new Product('id002','pan',1,4,"https://th.bing.com/th/id/OIP.d-zNWc9hB05nn0sO6_42EgHaHa?rs=1&pid=ImgDetMain",true);

// console.log(prod1);
// console.log(prod2);
// console.log(prod3);

// console.log("Nombre producto 2: \n"+prod2.title);
// console.log('Esta en venta del producto 3? \n'+prod3.onsale)

// Actividad Set & Get

// class Product
// {
//     constructor(id, title, price, stock, images, onsale,supplier)
//     {
//         this._id = id;
//         this._title = title;
//         this._price = price;
//         this._stock = stock;
//         this._images = images;
//         this._onsale = onsale;
//         this._supplier = supplier;
//     }
//     get getSupplier()
//     {
//         return this._supplier;
//     }
//     set setSupplier(newName)
//     {
//         this._supplier = newName;
//     }
// }

// let prod4 = new Product('id003','gaseosa', 2, 5, "#", true,"Luis.SAC");

// console.log(prod4.getSupplier);
// prod4.setSupplier = "PedroSAC"
// console.log(prod4.getSupplier);

// Actividad Venda de productos

// class Product
// {
//     constructor(id, title, price, stock, images, onsale){
//         this._id = id;
//         this._title = title;
//         this._price = price;
//         this._stock = stock;
//         this._images = images;
//         this._onsale = onsale;
//     }

//     sellUnits(units)
//     {
//         if(this._stock>=units)
//         {
//             this._stock -= units;
//         }
//         else
//         {
//             console.log("No hay suficiente stock")
//         }

//     }

// }
// const prod1 = new Product('id001');
// const prod2 = new Product('id002','agua',1.5);
// const prod3 = new Product('id003','pan',1,4,"https://th.bing.com/th/id/OIP.d-zNWc9hB05nn0sO6_42EgHaHa?rs=1&pid=ImgDetMain",true);
// const prod4 = new Product('id004','gaseosa', 2, 5, "#", true,"Luis.SAC");
// const prod5 = new Product('id005','pan',1,12,"https://th.bing.com/th/id/OIP.d-zNWc9hB05nn0sO6_42EgHaHa?rs=1&pid=ImgDetMain",true);
// const prod6 = new Product('id006','galleta',2,5,0,true);

// const products = [prod1,prod2,prod3,prod4];

// console.log(products);
// console.log(products[1]);
// console.log(products[products.length-1])
// products.unshift(prod5);
// products.push(prod6);
// console.log(products);

class Product {
  static _id = 1;
  constructor(name, color, price, discount) {
    this._id = Product._id++;
    this._name = name;
    this._color = color;
    this._price = price;
    this._discount = discount;
    this._finalPrice = this._price - (this.price * discount) / 100;
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
  }
}
const productTitle = document.getElementById("productTitle");
const productos = [
  "Macbook Pro",
  "Apple TV",
  "Iphone",
  "Ipad Pro",
  "Apple Watch",
  "AirPods",
];
const prod1 = new Product(
  productos[
    (Math.floor(Math.random() * productos.length), "Space Gray", "$750.00", "")
  ]
);

console.log(prod1);
