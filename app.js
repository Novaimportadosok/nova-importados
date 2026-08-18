// ===============================
// NOVA IMPORTADOS - CONFIGURACIÓN
// ===============================
// IMPORTANTE: reemplazá este número por el WhatsApp del negocio.
// Formato: código de país + número, sin +, espacios ni guiones.
// Ejemplo Argentina: 5493511234567
const WHATSAPP_NUMBER = "549XXXXXXXXXX";

const INSTAGRAM_URL = "https://instagram.com/nova.importados";

// Agregá, quitá o modificá productos en esta lista.
const products = [
    {id:1,name:"Asad Bourbon",category:"Árabes",price:70000,image:"https://placehold.co/700x700/f0ede5/333?text=Asad+Bourbon",description:"Fragancia intensa y sofisticada."},
  {id:2,name:"Asad Negro",category:"Árabes",price:60000,image:"https://placehold.co/700x700/e9eee5/333?text=Asad+Negro",description:"Aroma elegante y de gran presencia."},
  {id:3,name:"Asad Elixir",category:"Árabes",price:62000,image:"https://placehold.co/700x700/eee8df/333?text=Asad+Elixir",description:"Una fragancia intensa y especial."},
  {id:4,name:"Badee Al Oud Amethyst",category:"Árabes",price:65000,image:"https://placehold.co/700x700/e5eee7/333?text=Badee+Amethyst",description:"Aroma sofisticado y envolvente."},
  {id:5,name:"Badee Al Oud For Glory",category:"Árabes",price:46000,image:"https://placehold.co/700x700/eee9e0/333?text=For+Glory",description:"Una opción elegante para todos los días."},
  {id:6,name:"Khamrah",category:"Árabes",price:70000,image:"https://placehold.co/700x700/e8eee8/333?text=Khamrah",description:"Fragancia cálida y sofisticada."},
  {id:7,name:"Khamrah Qahwa",category:"Árabes",price:53000,image:"https://placehold.co/700x700/f0ede5/333?text=Khamrah+Qahwa",description:"Aroma intenso y especial."},
  {id:8,name:"Yara Candy",category:"Perfumes",price:51000,image:"https://placehold.co/700x700/e9eee5/333?text=Yara+Candy",description:"Fragancia dulce y encantadora."},
  {id:9,name:"Yara Rosa",category:"Perfumes",price:67000,image:"https://placehold.co/700x700/eee8df/333?text=Yara+Rosa",description:"Una fragancia femenina y elegante."},
  {id:10,name:"Yara Elixir",category:"Perfumes",price:90000,image:"https://placehold.co/700x700/e5eee7/333?text=Yara+Elixir",description:"Aroma sofisticado y duradero."}
];
let cart = JSON.parse(localStorage.getItem("novaCart") || "[]")
let activeCategory = "Todos";

const money = n => "$ " + Number(n).toLocaleString("es-AR");
const save = () => localStorage.setItem("novaCart", JSON.stringify(cart));

function categories(){
  const cats = ["Todos", ...new Set(products.map(p=>p.category))];
  document.getElementById("filters").innerHTML = cats.map(c =>
    `<button class="filter ${c===activeCategory?"active":""}" onclick="setCategory('${c}')">${c}</button>`
  ).join("");
}

function setCategory(cat){ activeCategory=cat; categories(); renderProducts(); }

function renderProducts(){
  const list = activeCategory==="Todos" ? products : products.filter(p=>p.category===activeCategory);
  document.getElementById("productGrid").innerHTML = list.map(p => `
    <article class="card">
      <img class="photo" src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="card-body">
        <div class="tag">${p.category.toUpperCase()}</div>
        <h3>${p.name}</h3>
        <div class="desc">${p.description}</div>
        <div class="price-row">
          <span class="price">${money(p.price)}</span>
          <button class="add" onclick="addToCart(${p.id})">Agregar</button>
        </div>
      </div>
    </article>`).join("");
}

function addToCart(id){
  const found = cart.find(i=>i.id===id);
  if(found) found.qty++;
  else cart.push({id,qty:1});
  save(); renderCart(); openCart();
}

function changeQty(id, delta){
  const item=cart.find(i=>i.id===id);
  if(!item)return;
  item.qty += delta;
  if(item.qty<=0) cart=cart.filter(i=>i.id!==id);
  save(); renderCart();
}

function renderCart(){
  const items=document.getElementById("cartItems");
  const count=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("cartCount").textContent=count;
  if(!cart.length){
    items.innerHTML='<div class="empty">Tu carrito está vacío.<br>Agregá algún perfume para comenzar.</div>';
  } else {
    items.innerHTML=cart.map(i=>{
      const p=products.find(x=>x.id===i.id);
      return `<div class="cart-item">
        <img src="${p.image}" alt="">
        <div><h4>${p.name}</h4><small>${money(p.price)} c/u</small>
          <div class="qty">
            <button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button>
          </div>
        </div>
        <button class="remove" onclick="changeQty(${p.id},-${i.qty})">🗑</button>
      </div>`;
    }).join("");
  }
  const total=cart.reduce((s,i)=>s+(products.find(p=>p.id===i.id).price*i.qty),0);
  document.getElementById("subtotal").textContent=money(total);
}

function openCart(){document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show")}

function checkout(){
  if(!cart.length){alert("El carrito está vacío.");return}
  if(WHATSAPP_NUMBER.includes("X")){alert("Primero colocá el número de WhatsApp del negocio en app.js.");return}
  const lines=cart.map(i=>{
    const p=products.find(x=>x.id===i.id);
    return `• ${p.name} x${i.qty} — ${money(p.price*i.qty)}`;
  });
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
  const msg=`Hola! 👋 Quiero hacer un pedido en Nova Importados:%0A%0A${lines.join("%0A")}%0A%0A*Total: ${money(total)}*%0A%0ALocalidad: %0AForma de pago: `;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
}

document.getElementById("cartButton").onclick=openCart;
document.getElementById("closeCart").onclick=closeCart;
document.getElementById("overlay").onclick=closeCart;
document.getElementById("checkout").onclick=checkout;
document.getElementById("clearCart").onclick=()=>{cart=[];save();renderCart()};
document.getElementById("instagramLink").href=INSTAGRAM_URL;
document.getElementById("waFloat").href=`https://wa.me/${WHATSAPP_NUMBER}`;
categories(); renderProducts(); renderCart();
