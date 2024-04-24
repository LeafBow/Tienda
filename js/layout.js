const navbarSelector = document.getElementById("nav");
const uList = document.createElement("ul");
navbarSelector.appendChild(uList);

const options =
[
    { title: 'Ofertas de la semana', linkTo: './outlet.html'},
    {title: 'Como Comprar',linkTo:'./how.html'},
    {title: 'Costos y tarifas',linkTo:'./taxs.html'},
    {title: 'Mis pedidos',linkTo:'./orders1.html'},
    {title: 'Garantia',linkTo:'./orders2.html'}
]
for(let option of options)
{
    const lisItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    uList.appendChild(lisItem);
    lisItem.appendChild(anchor);
}

const footerSelector = document.querySelector('#footer');

const optionsFooter =
[
    {opt: ["ofertas","laptops","Audio","Auriculares"]},
    {opt: ["como comprar","formas de pago","envios","devoluciones"]},
    {opt: ["costos y tarifas","impuestos","facturacion"]},
    {opt: ["mis pedidos","pedir nuevamente","lista de deseos"]},
    {opt: ["garantia"]},
]
console.log(optionsFooter[0].opt[0].length);

for(let index of optionsFooter)
{
    const div_col = document.createElement("div");
    div_col.className = "col"; 
    footerSelector.appendChild(div_col);
    const ul_col = document.createElement("ul");
    div_col.appendChild(ul_col);
    
    for(i = 0;i<index.opt.length;i++)
    {

        const li_col = document.createElement("li");
        ul_col.appendChild(li_col);
        
        if(i == 0)
        {
            li_col.className ="main-item";
        }
        const anchor = document.createElement("a");
        anchor.textContent = index.opt[i]
        li_col.appendChild(anchor);
    }
    
}