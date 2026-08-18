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
      {id:1,name:"Art of Universe",category:"Lattafa",price:72000,image:"https://placehold.co/700x700/f0ede5/333?text=Art+of+Universe",description:"Fragancia seleccionada."},
  {id:2,name:"Asad Bourbon",category:"Lattafa",price:70000,image:"https://placehold.co/700x700/f0ede5/333?text=Asad+Bourbon",description:"Fragancia intensa y sofisticada."},
  {id:3,name:"Asad Negro",category:"Lattafa",price:60000,image:"https://placehold.co/700x700/e9eee5/333?text=Asad+Negro",description:"Aroma elegante y de gran presencia."},
  {id:4,name:"Asad Elixir",category:"Lattafa",price:62000,image:"https://placehold.co/700x700/eee8df/333?text=Asad+Elixir",description:"Fragancia intensa y especial."},
  {id:5,name:"Asad Zanzibar",category:"Lattafa",price:null,image:"https://placehold.co/700x700/e5eee7/333?text=Asad+Zanzibar",description:"Consultar precio."},
  {id:6,name:"Badee Al Oud Amethyst",category:"Lattafa",price:65000,image:"https://placehold.co/700x700/eee9e0/333?text=Amethyst",description:"Aroma sofisticado y envolvente."},
  {id:7,name:"Badee Al Oud For Glory",category:"Lattafa",price:46000,image:"https://placehold.co/700x700/e8eee8/333?text=For+Glory",description:"Fragancia elegante y sofisticada."},
  {id:8,name:"Badee Al Oud Honor and Glory",category:"Lattafa",price:53000,image:"https://placehold.co/700x700/f0ede5/333?text=Honor+and+Glory",description:"Aroma intenso y especial."},
  {id:9,name:"Badee Al Oud Noble Blush",category:"Lattafa",price:69000,image:"https://placehold.co/700x700/e9eee5/333?text=Noble+Blush",description:"Fragancia elegante."},
  {id:10,name:"Badee Al Oud Sublime",category:"Lattafa",price:62000,image:"https://placehold.co/700x700/eee8df/333?text=Sublime",description:"Aroma sofisticado."},
  {id:11,name:"Eclaire",category:"Lattafa",price:74000,image:"https://placehold.co/700x700/e5eee7/333?text=Eclaire",description:"Fragancia dulce y envolvente."},
  {id:12,name:"Fakhar Gold",category:"Lattafa",price:60000,image:"https://placehold.co/700x700/eee9e0/333?text=Fakhar+Gold",description:"Fragancia elegante."},
  {id:13,name:"Fakhar Masculino",category:"Lattafa",price:65000,image:"https://placehold.co/700x700/e8eee8/333?text=Fakhar+Masculino",description:"Fragancia masculina."},
  {id:14,name:"Fakhar Femenino",category:"Lattafa",price:80000,image:"https://placehold.co/700x700/f0ede5/333?text=Fakhar+Femenino",description:"Fragancia femenina."},
  {id:15,name:"Hayaati Negro",category:"Lattafa",price:50000,image:"https://placehold.co/700x700/e9eee5/333?text=Hayaati+Negro",description:"Aroma intenso."},
  {id:16,name:"Hayaatim",category:"Lattafa",price:null,image:"https://placehold.co/700x700/eee8df/333?text=Hayaatim",description:"Consultar precio."},
  {id:17,name:"Her Confession",category:"Lattafa",price:63000,image:"https://placehold.co/700x700/e5eee7/333?text=Her+Confession",description:"Fragancia sofisticada."},
  {id:18,name:"His Confession",category:"Lattafa",price:67000,image:"https://placehold.co/700x700/eee9e0/333?text=His+Confession",description:"Fragancia sofisticada."},
  {id:19,name:"Khamrah",category:"Lattafa",price:70000,image:"https://placehold.co/700x700/e8eee8/333?text=Khamrah",description:"Fragancia cálida y sofisticada."},
  {id:20,name:"Khamrah Dukhan",category:"Lattafa",price:null,image:"https://placehold.co/700x700/f0ede5/333?text=Khamrah+Dukhan",description:"Consultar precio."},
  {id:21,name:"Khamrah Qahwa",category:"Lattafa",price:53000,image:"https://placehold.co/700x700/e9eee5/333?text=Khamrah+Qahwa",description:"Aroma intenso y especial."},
  {id:22,name:"Kit Asad & Asad Zanzibar",category:"Lattafa",price:null,image:"https://placehold.co/700x700/eee8df/333?text=Kit+Asad",description:"Consultar precio."},
  {id:23,name:"Kit Yara & Yara Candy",category:"Lattafa",price:null,image:"https://placehold.co/700x700/e5eee7/333?text=Kit+Yara",description:"Consultar precio."},
  {id:24,name:"Mayar",category:"Lattafa",price:null,image:"https://placehold.co/700x700/eee9e0/333?text=Mayar",description:"Consultar precio."},
  {id:25,name:"Musamam White",category:"Lattafa",price:144000,image:"https://placehold.co/700x700/e8eee8/333?text=Musamam+White",description:"Fragancia premium."},
  {id:26,name:"Nebras",category:"Lattafa",price:70000,image:"https://placehold.co/700x700/f0ede5/333?text=Nebras",description:"Fragancia sofisticada."},
  {id:27,name:"Qaed Al Fursan",category:"Lattafa",price:44000,image:"https://placehold.co/700x700/e9eee5/333?text=Qaed+Al+Fursan",description:"Aroma intenso."},
  {id:28,name:"Qaed Al Fursan Unlimited",category:"Lattafa",price:30000,image:"https://placehold.co/700x700/eee8df/333?text=Qaed+Unlimited",description:"Fragancia fresca."},
  {id:29,name:"Teriaq Femenino",category:"Lattafa",price:78000,image:"https://placehold.co/700x700/e5eee7/333?text=Teriaq",description:"Fragancia femenina."},
  {id:30,name:"The Kingdom Femenino",category:"Lattafa",price:55000,image:"https://placehold.co/700x700/eee9e0/333?text=The+Kingdom",description:"Fragancia elegante."},
  {id:31,name:"The Kingdom Masculino",category:"Lattafa",price:84000,image:"https://placehold.co/700x700/e8eee8/333?text=The+Kingdom",description:"Fragancia masculina."},
  {id:32,name:"Vintage Radio",category:"Lattafa",price:61000,image:"https://placehold.co/700x700/f0ede5/333?text=Vintage+Radio",description:"Aroma sofisticado."},
  {id:33,name:"Yara Candy",category:"Lattafa",price:51000,image:"https://placehold.co/700x700/e9eee5/333?text=Yara+Candy",description:"Fragancia dulce y encantadora."},
  {id:34,name:"Yara Moi",category:"Lattafa",price:55000,image:"https://placehold.co/700x700/eee8df/333?text=Yara+Moi",description:"Fragancia elegante."},
  {id:35,name:"Yara Rosa",category:"Lattafa",price:67000,image:"https://placehold.co/700x700/e5eee7/333?text=Yara+Rosa",description:"Fragancia femenina y elegante."},
  {id:36,name:"Yara Elixir",category:"Lattafa",price:90000,image:"https://placehold.co/700x700/eee9e0/333?text=Yara+Elixir",description:"Aroma sofisticado y duradero."},
  {id:37,name:"Yara Tous",category:"Lattafa",price:54000,image:"https://placehold.co/700x700/e8eee8/333?text=Yara+Tous",description:"Fragancia especial."},

  {id:38,name:"Royal Amber",category:"Luxury Collection",price:240000,image:"https://placehold.co/700x700/f0ede5/333?text=Royal+Amber",description:"Luxury Collection."},

  {id:39,name:"Liquid Brun",category:"Otros",price:80000,image:"https://placehold.co/700x700/e9eee5/333?text=Liquid+Brun",description:"Fragancia seleccionada."},
  {id:40,name:"Vulcan Feu",category:"Otros",price:85000,image:"https://placehold.co/700x700/eee8df/333?text=Vulcan+Feu",description:"Fragancia seleccionada."},

  {id:41,name:"Club de Nuit Iconic",category:"Armaf",price:78000,image:"https://placehold.co/700x700/e5eee7/333?text=Club+de+Nuit+Iconic",description:"Fragancia Armaf."},
  {id:42,name:"Club de Nuit Intense Man",category:"Armaf",price:86000,image:"https://placehold.co/700x700/eee9e0/333?text=Intense+Man",description:"Fragancia Armaf."},
  {id:43,name:"Club de Nuit Untold",category:"Armaf",price:86000,image:"https://placehold.co/700x700/e8eee8/333?text=Untold",description:"Fragancia Armaf."},
  {id:44,name:"Club de Nuit Urban Man Elixir",category:"Armaf",price:90000,image:"https://placehold.co/700x700/f0ede5/333?text=Urban+Man+Elixir",description:"Fragancia Armaf."},
  {id:45,name:"Club de Nuit Woman",category:"Armaf",price:65000,image:"https://placehold.co/700x700/e9eee5/333?text=Club+de+Nuit+Woman",description:"Fragancia Armaf."},
  {id:46,name:"Odyssey Candee",category:"Armaf",price:57000,image:"https://placehold.co/700x700/eee8df/333?text=Odyssey+Candee",description:"Fragancia Armaf."},
  {id:47,name:"Odyssey Mandarin Sky",category:"Armaf",price:61000,image:"https://placehold.co/700x700/e5eee7/333?text=Mandarin+Sky",description:"Fragancia Armaf."},
  {id:48,name:"Odyssey Mega Limited Edition",category:"Armaf",price:69000,image:"https://placehold.co/700x700/eee9e0/333?text=Odyssey+Mega",description:"Fragancia Armaf."},
  {id:49,name:"Yum Yum Delights",category:"Armaf",price:70000,image:"https://placehold.co/700x700/e8eee8/333?text=Yum+Yum+Delights",description:"Fragancia seleccionada."},

  {id:50,name:"9AM Dive",category:"Afnan",price:55000,image:"https://placehold.co/700x700/f0ede5/333?text=9AM+Dive",description:"Fragancia Afnan."},
  {id:51,name:"9PM",category:"Afnan",price:81000,image:"https://placehold.co/700x700/e9eee5/333?text=9PM",description:"Fragancia Afnan."},
  {id:52,name:"9PM Elixir",category:"Afnan",price:98000,image:"https://placehold.co/700x700/eee8df/333?text=9PM+Elixir",description:"Fragancia Afnan."},
  {id:53,name:"9PM Night Out",category:"Afnan",price:120000,image:"https://placehold.co/700x700/e5eee7/333?text=9PM+Night+Out",description:"Fragancia Afnan."},
  {id:54,name:"9PM Rebel",category:"Afnan",price:80000,image:"https://placehold.co/700x700/eee9e0/333?text=9PM+Rebel",description:"Fragancia Afnan."},

  {id:55,name:"Amber Oud Gold Edition 120ml",category:"Al Haramain",price:122000,image:"https://placehold.co/700x700/e8eee8/333?text=Amber+Oud+Gold",description:"Fragancia Al Haramain."},
  {id:56,name:"Amber Oud Dubai Night",category:"Al Haramain",price:null,image:"https://placehold.co/700x700/f0ede5/333?text=Dubai+Night",description:"Consultar precio."},
  {id:57,name:"Amber Oud Aqua Dubai",category:"Al Haramain",price:120000,image:"https://placehold.co/700x700/e9eee5/333?text=Aqua+Dubai",description:"Fragancia Al Haramain."},

  {id:58,name:"Bharara King 100ml",category:"Bharara",price:110000,image:"https://placehold.co/700x700/eee8df/333?text=Bharara+King+100ml",description:"Fragancia Bharara."},
  {id:59,name:"Bharara King 150ml",category:"Bharara",price:160000,image:"https://placehold.co/700x700/e5eee7/333?text=Bharara+King+150ml",description:"Fragancia Bharara."},
  {id:60,name:"Bharara King Parfum",category:"Bharara",price:158000,image:"https://placehold.co/700x700/eee9e0/333?text=Bharara+King+Parfum",description:"Fragancia Bharara."},

  {id:61,name:"Hawas Ice",category:"Rasasi",price:84000,image:"https://placehold.co/700x700/e8eee8/333?text=Hawas+Ice",description:"Fragancia Rasasi."},
  {id:62,name:"Hawas For Him",category:"Rasasi",price:65000,image:"https://placehold.co/700x700/f0ede5/333?text=Hawas+For+Him",description:"Fragancia Rasasi."},
  {id:63,name:"Hawas Malibu",category:"Rasasi",price:101000,image:"https://placehold.co/700x700/e9eee5/333?text=Hawas+Malibu",description:"Fragancia Rasasi."},

  {id:64,name:"Salvo Intense",category:"Diseñador",price:50000,image:"https://placehold.co/700x700/eee8df/333?text=Salvo+Intense",description:"Fragancia seleccionada."},
  {id:65,name:"La Vie Est Belle Lancôme 100ml",category:"Diseñador",price:390000,image:"https://placehold.co/700x700/e5eee7/333?text=La+Vie+Est+Belle",description:"Fragancia Lancôme."},
  {id:66,name:"Jean Paul Gaultier Le Male Le Parfum Intense 125ml",category:"Diseñador",price:200000,image:"https://placehold.co/700x700/eee9e0/333?text=Le+Male+Le+Parfum",description:"Fragancia Jean Paul Gaultier."},
  {id:67,name:"Jean Paul Gaultier Le Male Elixir 125ml",category:"Diseñador",price:225000,image:"https://placehold.co/700x700/e8eee8/333?text=Le+Male+Elixir",description:"Fragancia Jean Paul Gaultier."},
  {id:68,name:"Jean Paul Gaultier Scandal Pour Homme Absolu Parfum 100ml",category:"Diseñador",price:210000,image:"https://placehold.co/700x700/f0ede5/333?text=Scandal+Absolu",description:"Fragancia Jean Paul Gaultier."},
  {id:69,name:"Emporio Armani Stronger With You Intensely EDP 100ml",category:"Diseñador",price:300000,image:"https://placehold.co/700x700/e9eee5/333?text=Stronger+With+You",description:"Fragancia Emporio Armani."},
  {id:70,name:"Versace Eros Flame EDP 100ml",category:"Diseñador",price:160000,image:"https://placehold.co/700x700/eee8df/333?text=Eros+Flame",description:"Fragancia Versace."},
    {id:71,name:"Montale Arabians Tonka EDP",category:"Diseñador",price:295000,image:"https://placehold.co/700x700/e5eee7/333?text=Arabians+Tonka",description:"Fragancia Montale."}
];

let cart = JSON.parse(localStorage.getItem("novaCart") || "[]");
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
