const sections = document.querySelectorAll(".product-info");
let botonFinalizar = document.getElementById("finalizar");
let table = document.getElementById("tablabody");
console.log(table);


const getCart = () => {
  return localStorage.getItem("Cart");
};
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
if (carrito.length != 0) {
  console.log("Recuperando carro");
  dibujarTabla();
}
const productContainer = document.getElementById("img-productos");
console.log(productContainer, sections);
const secArr = Array.from(sections);
const productosarrays = [
  {
    id: 1,
    qty: 1,
    imagen: "../assetes/img/falafel.png",
    nombre: "Falafel",
    descripcion: "falafel de pesto",
    precio: 740,
  },
  {
    id: 2,
    qty: 1,
    imagen: "../assetes/img/pan-clasico.png",
    nombre: "Pan Clasico",
    descripcion: "pan de harina refinada 125gr",
    precio: 940,
  },
  {
    id: 3,
    qty: 1,
    imagen: "../assetes/img/burga-remo.png",
    nombre: "Burga de remolacha",
    descripcion: "hamburguesa de remolacha",
    precio: 640,
  },
  {
    id: 4,
    qty: 1,
    imagen: "../assetes/img/teques.png",
    nombre: "Tequeños",
    descripcion: "dedos de queso vegano",
    precio: 640,
  },
  {
    id: 5,
    qty: 1,
    imagen: "../assetes/img/pack-mix.png",
    nombre: "Burgas Mix",
    descripcion: "pack mix de hamburguesas",
    precio: 780,
  },
  {
    id: 6,
    qty: 1,
    imagen: "../assetes/img/mila-seitan.png",
    nombre: "Milanesa de seitan",
    descripcion: "milanesa de seitan",
    precio: 770,
  },
  {
    id: 7,
    qty: 1,
    imagen: "../assetes/img/nuggets-tofu.png",
    nombre: "Nuggets",
    descripcion: "nuggets de tofu",

    precio: 740,
  },
  {
    id: 8,
    qty: 1,
    imagen: "../assetes/img/burga-lente.png",
    nombre: "Burga de lente",
    descripcion: "hamburguesa de lenteja",
    precio: 640,
  },
  {
    id: 9,
    qty: 1,
    imagen: "../assetes/img/pan-remo.png",
    nombre: "Pan de remolacha",
    descripcion: "pan de remolacha",
    precio: 840,
  },
];
const fragment = document.createDocumentFragment();

// crear taarjetas de prods
productosarrays.forEach((element) => {
  let div = document.createElement("DIV");
  div.className = "products-container col";
  div.innerHTML = `<h2 class="h2-productos ">${element.nombre}</h2><img class="img-6" src=${element.imagen} alt=${element.descripcion} />  <button class="buy" onclick="respuestaClick(${element.id})" id="buy-btn" target="BLANK">Comprar</button>`;
  fragment.append(div);
});
productContainer.append(fragment);

// Añadir productos al carrito
function respuestaClick(id) {
  const getCart = () => {
    return JSON.parse(localStorage.getItem("Cart")) || [];
  };
  const newProduct = productosarrays.find((product) => product.id == id);
  console.log(newProduct);
  const updatedCart = getCart().find((product) => product?.id === id)
  ? getCart().map((el) => {
      if (el?.id === id) {
        return { ...el, qty: (el.qty + 1) };
      }
      return el;
    })
  : [...getCart(), newProduct];
localStorage.setItem("Cart", JSON.stringify(updatedCart))
  dibujarTabla();
  Toastify({
    text: "Producto agregado al carrito",
    duration: 2000,
    gravity: "top",
    position: "right",
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();

}

function dibujarTabla() {
  let totalCarrito = 0;
  table.innerHTML = "" 
  if (JSON.parse(getCart()).length) {
    for (const producto of JSON.parse(getCart())) {
      table.innerHTML += `   
<table class="table">
  <thead>
    <tr>
    <th>${producto.qty}</th>
    <th>${producto.nombre}</th>
    <th>${producto.precio}</th>
    </tr>
  </thead>
 `;
  
      totalCarrito += producto.qty * producto.precio;

    }
  }else{
    totalCarrito = 0;
  }
  let infoTotal = document.getElementById("total");
  infoTotal.innerHTML = "Total a pagar $: " + totalCarrito;
}
dibujarTabla();

botonFinalizar.addEventListener("click",() => {
  if (JSON.parse(getCart())?.length){
    localStorage.setItem("Cart","[]") 
    dibujarTabla()
    swal({
      title: "Compra realizada con éxito",
      icon: "success",
    });
  }
});

const options = {
  threshold: 1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
    return;
  });
}, options);

secArr.map((section) => {
  observer.observe(section);
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
