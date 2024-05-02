let iconCart = document.querySelector('.iconCart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener('click', () =>{
    body.classList.toggle('mostrarCart')
})

closeCart.addEventListener('click', () =>{
    body.classList.toggle('mostrarCart')
})

const initApp = () =>{
    fetch('productos.json')
    then(Response => Response.json())  //Convierte la res
    then(data => {
        listProducts = data;
    })
}

initApp