
  const sections = document.querySelectorAll(".product-info");
  const productContainer =  document.getElementById("img-productos")
  console.log(productContainer,sections)
  const secArr = Array.from(sections);
  const productosarrays=[
    {
        id:1,
        imagen:"../assetes/img/falafel.png",
        nombre:"Falafel",
        descripcion:"milanesa 160gr",
        precio:840
    },{
        id:2,
        imagen:"../assetes/img/pan-clasico.png",
        nombre:"Pan Clasico",
        descripcion:"milanesa 160gr",
        precio:840
    },{
        id:3,
        imagen:"../assetes/img/burga-remo.png" ,
        nombre:"Burga de remolacha",
        descripcion:"milanesa 160gr",
        precio:840
    },{
        id:4,
        imagen:"../assetes/img/teques.png" ,
        nombre:"Tequeños",
        descripcion:"milanesa 160gr",
        precio:840
    },{
      id:5,
      imagen:"../assetes/img/pack-mix.png"  ,
      nombre:"Burgas Mix",
      descripcion:"milanesa 160gr",
      precio:840
  },{
    id:6,
    imagen:"../assetes/img/mila-seitan.png",
    nombre:"Milanesa de seitan",
    descripcion:"milanesa 160gr",
    precio:840
},{
  id:7,
  imagen:"../assetes/img/nuggets-tofu.png" ,
  nombre:"Nuggets",
  descripcion:"milanesa 160gr",
  precio:840
},{
  id:8 ,   
  imagen:"../assetes/img/burga-lente.png" ,
  nombre:"Burga de lente",
  descripcion:"milanesa 160gr",
  precio:840
},{
  id:9,    
  imagen:"../assetes/img/pan-remo.png",
  nombre:"Pan de remolacha",
  descripcion:"milanesa 160gr",
  precio:840
}
]
const fragment = document.createDocumentFragment()

productosarrays.forEach(element => {
  let div = document.createElement("DIV")
  div.className = "products-container"
  div.innerHTML = `<h2>${element.nombre}</h2><img class="img-6" src=${element.imagen} alt="mila seitan"/>  <button class="buy" onclick="respuestaClick(${element.id})" id="buy-btn" target="BLANK">Comprar</button>`
  fragment.append(div)
})
productContainer.append(fragment)




let entidad1= "persona"
let entidad2="empresa"
let entrada = prompt("Indique si es empresa  o particular")
if ((entrada=="particular") ||(entrada=="empresa")){
    alert("Usted es"+entrada)
}else{
    alert("Error al ingresar su entidad")
}

function respuestaClick(id){
  const getCart = () => {
    return localStorage.getItem("Cart")
  }
  const newProduct = productosarrays.find(product=>product.id==id)
  let updateCart = getCart() !== null ? [...JSON.parse( getCart()), newProduct] : [newProduct] 
  localStorage.setItem("Cart", JSON.stringify(updateCart))
  let precioTotal = 0
  if( getCart() !== null) JSON.parse( getCart()).forEach(el=> precioTotal += el.precio)
  console.log(precioTotal);
}


let totalPrice = 0

if (entrada=="particular") {
    alert("totalprice"*1.21)
}else if(entrada=="empresa"){
    alert("totalprice")
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



