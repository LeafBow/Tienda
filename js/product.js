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

class Product
{
    constructor(id, title, price, stock, images, onsale)
    {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
    }

}
const prod1 = new Product();
const prod2 = new Product('id001','agua',1.5);
const prod3 = new Product('id002','pan',1,4,"https://th.bing.com/th/id/OIP.d-zNWc9hB05nn0sO6_42EgHaHa?rs=1&pid=ImgDetMain",true);

console.log(prod1);
console.log(prod2);
console.log(prod3);

console.log("Nombre producto 2: \n"+prod2.title);
console.log('Esta en venta del producto 3? \n'+prod3.onsale)

