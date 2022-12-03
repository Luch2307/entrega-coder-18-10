
  const sections = document.querySelectorAll(".product-info");
  let botonFinalizar = document.getElementById("finalizar");
  let table = document.getElementById("tablabody");
  console.log(table);
  let totalCarrito = 0;
  const getCart = () => {
  return localStorage.getItem("Cart")
  }
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if(carrito.length != 0){
    console.log("Recuperando carro")
    dibujarTabla();
}
  const productContainer =  document.getElementById("img-productos")
  console.log(productContainer,sections)
  const secArr = Array.from(sections);
  const productosarrays=[
    {
        qty:1,
        imagen:"../assetes/img/falafel.png",
        nombre:"Falafel",
        descripcion:"milanesa 160gr",
        precio:740
    },{
        qty:2,
        imagen:"../assetes/img/pan-clasico.png",
        nombre:"Pan Clasico",
        descripcion:"milanesa 160gr",
        precio:940
    },{
        qty:3,
        imagen:"../assetes/img/burga-remo.png" ,
        nombre:"Burga de remolacha",
        descripcion:"milanesa 160gr",
        precio:640
    },{
        qty:4,
        imagen:"../assetes/img/teques.png" ,
        nombre:"Tequeños",
        descripcion:"milanesa 160gr",
        precio:640
    },{
      qty:5,
      imagen:"../assetes/img/pack-mix.png"  ,
      nombre:"Burgas Mix",
      descripcion:"milanesa 160gr",
      precio:780
  },{
    qty:6,
    imagen:"../assetes/img/mila-seitan.png",
    nombre:"Milanesa de seitan",
    descripcion:"milanesa 160gr",
    precio:770
},{
  qty:7,
  imagen:"../assetes/img/nuggets-tofu.png" ,
  nombre:"Nuggets",
  descripcion:"milanesa 160gr",
  precio:740
},{
  qty:8 ,   
  imagen:"../assetes/img/burga-lente.png" ,
  nombre:"Burga de lente",
  descripcion:"milanesa 160gr",
  precio:640
},{
  qty:9,    
  imagen:"../assetes/img/pan-remo.png",
  nombre:"Pan de remolacha",
  descripcion:"milanesa 160gr",
  precio:840
}
]
const fragment = document.createDocumentFragment()

// crear taarjetas de prods
productosarrays.forEach(element => {
  let div = document.createElement("DIV")
  div.className = "products-container"
  div.innerHTML = `<h2>${element.nombre}</h2><img class="img-6" src=${element.imagen} alt="mila seitan"/>  <button class="buy" onclick="respuestaClick(${element.id})" id="buy-btn" target="BLANK">Comprar</button>`
  fragment.append(div)
})
productContainer.append(fragment)


// Añadir productos al carrito
function respuestaClick(id){
  const getCart = () => {
    return localStorage.getItem("Cart")
  }
  const newProduct = productosarrays.find(product=>product.id==id)
  let updateCart = getCart() !== null ? [...JSON.parse( getCart()), newProduct] : [newProduct] 
  localStorage.setItem("Cart", JSON.stringify([newProduct]))
  let precioTotal = 0
  if( getCart() !== null) JSON.parse( getCart()).forEach(el=> precioTotal += el.precio)
  console.log(precioTotal);
dibujarTabla();
}
respuestaClick();

function dibujarTabla(){
  console.log("funcion")
  if(JSON.parse( getCart()).length)
  {
    console.log("funcion1")
  let count = 0;
  for(const producto of JSON.parse( getCart())){
  table.innerHTML = count?table.innerHTML+ `
      <tr>
          <td>${producto.qty}</td>
          <td>${producto.nombre}</td>
          <td>${producto.precio}</td>
      </tr>
  `:`   
  <tr>
    <td>${producto.qty}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
</tr>`
  count+=1
  totalCarrito+= producto.precio*producto.qty
  }
  let infoTotal = document.getElementById("total");
  infoTotal.innerHTML="Total a pagar $: "+totalCarrito;
  // storage
  localStorage.setItem("carrito",JSON.stringify(carrito))
} 
}
dibujarTabla();


botonFinalizar.onclick = () => {
  carrito = [];
  document.getElementById("tablabody").innerHTML="";
  let infoTotal = document.getElementById("total");
  infoTotal.innerText="Total a pagar $: ";
}

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
  })

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() =>{navbarLinks.classList.toggle('active')})



