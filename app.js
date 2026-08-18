// ===============================
// NOVA IMPORTADOS - CONFIGURACIÓN
// ===============================
// IMPORTANTE: reemplazá este número por el WhatsApp del negocio.
// Formato: código de país + número, sin +, espacios ni guiones.
// Ejemplo Argentina: 5493511234567
const WHATSAPP_NUMBER = "5493543313011";

const INSTAGRAM_URL = "https://www.instagram.com/novaimportados.ok/";

// Agregá, quitá o modificá productos en esta lista.
const products = [
        {id:1,name:"Art of Universe",category:"Lattafa",price:72000,price2:70000,price3:68000,image:"https://placehold.co/700x700/f0ede5/333?text=Art+of+Universe",description:"Fragancia seleccionada."},
  {id:2,name:"Asad Bourbon",category:"Lattafa",price:70000,price2:69000,price3:67000,image:"https://placehold.co/700x700/f0ede5/333?text=Asad+Bourbon",description:"Fragancia intensa y sofisticada."},
  {id:3,name:"Asad Negro",category:"Lattafa",price:60000,price2:58000,price3:55000,image:"https://placehold.co/700x700/e9eee5/333?text=Asad+Negro",description:"Aroma elegante y de gran presencia."},
  {id:4,name:"Asad Elixir",category:"Lattafa",price:62000,price2:60000,price3:59000,image:"https://placehold.co/700x700/eee8df/333?text=Asad+Elixir",description:"Fragancia intensa y especial."},
  {id:5,name:"Asad Zanzibar",category:"Lattafa",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/e5eee7/333?text=Asad+Zanzibar",description:"Consultar precio."},
  {id:6,name:"Badee Al Oud Amethyst",category:"Lattafa",price:65000,price2:63000,price3:60000,image:"https://placehold.co/700x700/eee9e0/333?text=Amethyst",description:"Aroma sofisticado y envolvente."},
  {id:7,name:"Badee Al Oud For Glory",category:"Lattafa",price:46000,price2:45000,price3:43000,image:"https://placehold.co/700x700/e8eee8/333?text=For+Glory",description:"Fragancia elegante y sofisticada."},
  {id:8,name:"Badee Al Oud Honor and Glory",category:"Lattafa",price:53000,price2:51000,price3:49000,image:"https://placehold.co/700x700/f0ede5/333?text=Honor+and+Glory",description:"Aroma intenso y especial."},
  {id:9,name:"Badee Al Oud Noble Blush",category:"Lattafa",price:69000,price2:67000,price3:65000,image:"https://placehold.co/700x700/e9eee5/333?text=Noble+Blush",description:"Fragancia elegante."},
  {id:10,name:"Badee Al Oud Sublime",category:"Lattafa",price:62000,price2:61000,price3:59000,image:"https://placehold.co/700x700/eee8df/333?text=Sublime",description:"Aroma sofisticado."},
  {id:11,name:"Eclaire",category:"Lattafa",price:74000,price2:72000,price3:71000,image:"https://placehold.co/700x700/e5eee7/333?text=Eclaire",description:"Fragancia dulce y envolvente."},
  {id:12,name:"Fakhar Gold",category:"Lattafa",price:60000,price2:59000,price3:57000,image:"https://placehold.co/700x700/eee9e0/333?text=Fakhar+Gold",description:"Fragancia elegante."},
  {id:13,name:"Fakhar Masculino",category:"Lattafa",price:65000,price2:63000,price3:62000,image:"https://placehold.co/700x700/e8eee8/333?text=Fakhar+Masculino",description:"Fragancia masculina."},
  {id:14,name:"Fakhar Femenino",category:"Lattafa",price:80000,price2:79000,price3:78000,image:"https://placehold.co/700x700/f0ede5/333?text=Fakhar+Femenino",description:"Fragancia femenina."},
  {id:15,name:"Hayaati Negro",category:"Lattafa",price:50000,price2:49000,price3:46000,image:"https://placehold.co/700x700/e9eee5/333?text=Hayaati+Negro",description:"Aroma intenso."},
  {id:16,name:"Hayaatim",category:"Lattafa",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/eee8df/333?text=Hayaatim",description:"Consultar precio."},
  {id:17,name:"Her Confession",category:"Lattafa",price:63000,price2:61000,price3:59000,image:"https://placehold.co/700x700/e5eee7/333?text=Her+Confession",description:"Fragancia sofisticada."},
  {id:18,name:"His Confession",category:"Lattafa",price:67000,price2:65000,price3:63000,image:"https://placehold.co/700x700/eee9e0/333?text=His+Confession",description:"Fragancia sofisticada."},
  {id:19,name:"Khamrah",category:"Lattafa",price:70000,price2:69000,price3:67000,image:"https://placehold.co/700x700/e8eee8/333?text=Khamrah",description:"Fragancia cálida y sofisticada."},
  {id:20,name:"Khamrah Dukhan",category:"Lattafa",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/f0ede5/333?text=Khamrah+Dukhan",description:"Consultar precio."},
  {id:21,name:"Khamrah Qahwa",category:"Lattafa",price:53000,price2:51000,price3:49000,image:"https://placehold.co/700x700/e9eee5/333?text=Khamrah+Qahwa",description:"Aroma intenso y especial."},
  {id:22,name:"Kit Asad & Asad Zanzibar",category:"Lattafa",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/eee8df/333?text=Kit+Asad",description:"Consultar precio."},
  {id:23,name:"Kit Yara & Yara Candy",category:"Lattafa",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/e5eee7/333?text=Kit+Yara",description:"Consultar precio."},
  {id:24,name:"Mayar",category:"Lattafa",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/eee9e0/333?text=Mayar",description:"Consultar precio."},
  {id:25,name:"Musamam White",category:"Lattafa",price:144000,price2:142000,price3:139000,image:"https://placehold.co/700x700/e8eee8/333?text=Musamam+White",description:"Fragancia premium."},
  {id:26,name:"Nebras",category:"Lattafa",price:70000,price2:69000,price3:68000,image:"https://placehold.co/700x700/f0ede5/333?text=Nebras",description:"Fragancia sofisticada."},
  {id:27,name:"Qaed Al Fursan",category:"Lattafa",price:44000,price2:42000,price3:39000,image:"https://placehold.co/700x700/e9eee5/333?text=Qaed+Al+Fursan",description:"Aroma intenso."},
  {id:28,name:"Qaed Al Fursan Unlimited",category:"Lattafa",price:30000,price2:29000,price3:28000,image:"https://placehold.co/700x700/eee8df/333?text=Qaed+Unlimited",description:"Fragancia fresca."},
  {id:29,name:"Teriaq Femenino",category:"Lattafa",price:78000,price2:77000,price3:75000,image:"https://placehold.co/700x700/e5eee7/333?text=Teriaq",description:"Fragancia femenina."},
  {id:30,name:"The Kingdom Femenino",category:"Lattafa",price:55000,price2:53000,price3:51000,image:"https://placehold.co/700x700/eee9e0/333?text=The+Kingdom",description:"Fragancia elegante."},
  {id:31,name:"The Kingdom Masculino",category:"Lattafa",price:84000,price2:82000,price3:79000,image:"https://placehold.co/700x700/e8eee8/333?text=The+Kingdom",description:"Fragancia masculina."},
  {id:32,name:"Vintage Radio",category:"Lattafa",price:61000,price2:60000,price3:58000,image:"https://placehold.co/700x700/f0ede5/333?text=Vintage+Radio",description:"Aroma sofisticado."},
  {id:33,name:"Yara Candy",category:"Lattafa",price:51000,price2:50000,price3:48000,image:"https://placehold.co/700x700/e9eee5/333?text=Yara+Candy",description:"Fragancia dulce y encantadora."},
  {id:34,name:"Yara Moi",category:"Lattafa",price:55000,price2:53000,price3:49000,image:"https://placehold.co/700x700/eee8df/333?text=Yara+Moi",description:"Fragancia elegante."},
  {id:35,name:"Yara Rosa",category:"Lattafa",price:67000,price2:65000,price3:62000,image:"https://placehold.co/700x700/e5eee7/333?text=Yara+Rosa",description:"Fragancia femenina y elegante."},
  {id:36,name:"Yara Elixir",category:"Lattafa",price:90000,price2:88000,price3:84000,image:"https://placehold.co/700x700/eee9e0/333?text=Yara+Elixir",description:"Aroma sofisticado y duradero."},
  {id:37,name:"Yara Tous",category:"Lattafa",price:54000,price2:52000,price3:49000,image:"https://placehold.co/700x700/e8eee8/333?text=Yara+Tous",description:"Fragancia especial."},

  {id:38,name:"Royal Amber",category:"Luxury Collection",price:240000,price2:234000,price3:210000,image:"https://placehold.co/700x700/f0ede5/333?text=Royal+Amber",description:"Luxury Collection."},

  {id:39,name:"Liquid Brun",category:"Otros",price:80000,price2:79000,price3:76000,image:"https://placehold.co/700x700/e9eee5/333?text=Liquid+Brun",description:"Fragancia seleccionada."},
  {id:40,name:"Vulcan Feu",category:"Otros",price:85000,price2:83000,price3:79000,image:"https://placehold.co/700x700/eee8df/333?text=Vulcan+Feu",description:"Fragancia seleccionada."},

  {id:41,name:"Club de Nuit Iconic",category:"Armaf",price:78000,price2:75000,price3:72000,image:"https://placehold.co/700x700/e5eee7/333?text=Club+de+Nuit+Iconic",description:"Fragancia Armaf."},
  {id:42,name:"Club de Nuit Intense Man",category:"Armaf",price:86000,price2:83000,price3:79000,image:"https://placehold.co/700x700/eee9e0/333?text=Intense+Man",description:"Fragancia Armaf."},
  {id:43,name:"Club de Nuit Untold",category:"Armaf",price:86000,price2:83000,price3:79000,image:"https://placehold.co/700x700/e8eee8/333?text=Untold",description:"Fragancia Armaf."},
  {id:44,name:"Club de Nuit Urban Man Elixir",category:"Armaf",price:90000,price2:89000,price3:85000,image:"https://placehold.co/700x700/f0ede5/333?text=Urban+Man+Elixir",description:"Fragancia Armaf."},
  {id:45,name:"Club de Nuit Woman",category:"Armaf",price:65000,price2:62000,price3:59000,image:"https://placehold.co/700x700/e9eee5/333?text=Club+de+Nuit+Woman",description:"Fragancia Armaf."},
  {id:46,name:"Odyssey Candee",category:"Armaf",price:57000,price2:54000,price3:52000,image:"https://placehold.co/700x700/eee8df/333?text=Odyssey+Candee",description:"Fragancia Armaf."},
  {id:47,name:"Odyssey Mandarin Sky",category:"Armaf",price:61000,price2:58000,price3:55000,image:"https://placehold.co/700x700/e5eee7/333?text=Mandarin+Sky",description:"Fragancia Armaf."},
  {id:48,name:"Odyssey Mega Limited Edition",category:"Armaf",price:69000,price2:67000,price3:65000,image:"https://placehold.co/700x700/eee9e0/333?text=Odyssey+Mega",description:"Fragancia Armaf."},
  {id:49,name:"Yum Yum Delights",category:"Armaf",price:70000,price2:65000,price3:63000,image:"https://placehold.co/700x700/e8eee8/333?text=Yum+Yum+Delights",description:"Fragancia seleccionada."},

  {id:50,name:"9AM Dive",category:"Afnan",price:55000,price2:52000,price3:51000,image:"https://placehold.co/700x700/f0ede5/333?text=9AM+Dive",description:"Fragancia Afnan."},
  {id:51,name:"9PM",category:"Afnan",price:81000,price2:79000,price3:75000,image:"https://placehold.co/700x700/e9eee5/333?text=9PM",description:"Fragancia Afnan."},
  {id:52,name:"9PM Elixir",category:"Afnan",price:98000,price2:95000,price3:94000,image:"https://placehold.co/700x700/eee8df/333?text=9PM+Elixir",description:"Fragancia Afnan."},
  {id:53,name:"9PM Night Out",category:"Afnan",price:120000,price2:118000,price3:115000,image:"https://placehold.co/700x700/e5eee7/333?text=9PM+Night+Out",description:"Fragancia Afnan."},
  {id:54,name:"9PM Rebel",category:"Afnan",price:80000,price2:79000,price3:77000,image:"https://placehold.co/700x700/eee9e0/333?text=9PM+Rebel",description:"Fragancia Afnan."},

  {id:55,name:"Amber Oud Gold Edition 120ml",category:"Al Haramain",price:122000,price2:120000,price3:117000,image:"https://placehold.co/700x700/e8eee8/333?text=Amber+Oud+Gold",description:"Fragancia Al Haramain."},
  {id:56,name:"Amber Oud Dubai Night",category:"Al Haramain",price:null,price2:null,price3:null,image:"https://placehold.co/700x700/f0ede5/333?text=Dubai+Night",description:"Consultar precio."},
  {id:57,name:"Amber Oud Aqua Dubai",category:"Al Haramain",price:120000,price2:119000,price3:116000,image:"https://placehold.co/700x700/e9eee5/333?text=Aqua+Dubai",description:"Fragancia Al Haramain."},

  {id:58,name:"Bharara King 100ml",category:"Bharara",price:110000,price2:108000,price3:105000,image:"https://placehold.co/700x700/eee8df/333?text=Bharara+King+100ml",description:"Fragancia Bharara."},
  {id:59,name:"Bharara King 150ml",category:"Bharara",price:160000,price2:159000,price3:155000,image:"https://placehold.co/700x700/e5eee7/333?text=Bharara+King+150ml",description:"Fragancia Bharara."},
  {id:60,name:"Bharara King Parfum",category:"Bharara",price:158000,price2:155000,price3:153000,image:"https://placehold.co/700x700/eee9e0/333?text=Bharara+King+Parfum",description:"Fragancia Bharara."},

  {id:61,name:"Hawas Ice",category:"Rasasi",price:84000,price2:81000,price3:79000,image:"https://placehold.co/700x700/e8eee8/333?text=Hawas+Ice",description:"Fragancia Rasasi."},
  {id:62,name:"Hawas For Him",category:"Rasasi",price:65000,price2:62000,price3:59000,image:"https://placehold.co/700x700/f0ede5/333?text=Hawas+For+Him",description:"Fragancia Rasasi."},
  {id:63,name:"Hawas Malibu",category:"Rasasi",price:101000,price2:98000,price3:93000,image:"https://placehold.co/700x700/e9eee5/333?text=Hawas+Malibu",description:"Fragancia Rasasi."},

  {id:64,name:"Salvo Intense",category:"Diseñador",price:50000,price2:47000,price3:43000,image:"https://placehold.co/700x700/eee8df/333?text=Salvo+Intense",description:"Fragancia seleccionada."},
  {id:65,name:"La Vie Est Belle Lancôme 100ml",category:"Diseñador",price:390000,price2:384000,price3:365000,image:"https://placehold.co/700x700/e5eee7/333?text=La+Vie+Est+Belle",description:"Fragancia Lancôme."},
  {id:66,name:"Jean Paul Gaultier Le Male Le Parfum Intense 125ml",category:"Diseñador",price:200000,price2:197000,price3:194000,image:"https://placehold.co/700x700/eee9e0/333?text=Le+Male+Le+Parfum",description:"Fragancia Jean Paul Gaultier."},
  {id:67,name:"Jean Paul Gaultier Le Male Elixir 125ml",category:"Diseñador",price:225000,price2:213000,price3:205000,image:"https://placehold.co/700x700/e8eee8/333?text=Le+Male+Elixir",description:"Fragancia Jean Paul Gaultier."},
  {id:68,name:"Jean Paul Gaultier Scandal Pour Homme Absolu Parfum 100ml",category:"Diseñador",price:210000,price2:202000,price3:194000,image:"https://placehold.co/700x700/f0ede5/333?text=Scandal+Absolu",description:"Fragancia Jean Paul Gaultier."},
  {id:69,name:"Emporio Armani Stronger With You Intensely EDP 100ml",category:"Diseñador",price:300000,price2:290000,price3:250000,image:"https://placehold.co/700x700/e9eee5/333?text=Stronger+With+You",description:"Fragancia Emporio Armani."},
  {id:70,name:"Versace Eros Flame EDP 100ml",category:"Diseñador",price:160000,price2:155000,price3:152000,image:"https://placehold.co/700x700/eee8df/333?text=Eros+Flame",description:"Fragancia Versace."},
 {id:71,name:"Montale Arabians Tonka EDP",category:"Diseñador",price:295000,price2:288000,price3:null,image:"https://placehold.co/700x700/e5eee7/333?text=Arabians+Tonka",description:"Fragancia Montale."}
];
// ===============================
// IMÁGENES REALES DEL CATÁLOGO
// ===============================

const imageFiles = {
  1: "01-art-of-universe.jpeg",
  2: "02-asad-bourbon.jpeg",
  3: "03-asad-negro.jpeg",
  4: "04-asad-elixir.jpeg",
  5: "05-asad-zanzibar.jpeg",
  6: "06-badee-al-oud-amethyst.jpeg",
  7: "07-badee-al-oud-for-glory.jpeg",
  8: "08-badee-al-oud-honor-and-glory.jpeg",
  9: "09-badee-al-oud-noble-blush.jpeg",
  10: "10-badee-al-oud-sublime.jpeg",
  11: "11-eclaire.jpeg",
  12: "12-fakhar-gold.jpeg",
  13: "13-fakhar-masculino.jpeg",
  14: "14-fakhar-femenino.jpeg",
  15: "15-hayaati-negro.jpeg",
  16: "16-hayaatim.jpeg",
  17: "17-her-confession.jpeg",
  18: "18-his-confession.jpeg",
  19: "19-khamrah.jpeg",
  20: "20-khamrah-dukhan.jpeg",
  21: "21-khamrah-qahwa.jpeg",
  22: "22-kit-asad-asad-zanzibar.jpeg",
  23: "23-kit-yara-yara-candy.jpeg",
  24: "24-mayar.jpeg",
  25: "25-musamam-white.jpeg",
  26: "26-nebras.jpeg",
  27: "27-qaed-al-fursan.jpeg",
  28: "28-qaed-al-fursan-unlimited.jpeg",
  29: "29-teriaq-femenino.jpeg",
  30: "30-the-kingdom-femenino.jpeg",
  31: "31-the-kingdom-masculino.jpeg",
  32: "32-vintage-radio.jpeg",
  33: "33-yara-candy.jpeg",
  34: "34-yara-moi.jpeg",
  35: "35-yara-rosa.jpeg",
  36: "36-yara-elixir.jpeg",
  37: "37-yara-tous.jpeg",
  38: "38-royal-amber.jpeg",
  39: "39-liquid-brun.jpeg",
  40: "40-vulcan-feu.jpeg",
  41: "41-club-de-nuit-iconic.jpeg",
  42: "42-club-de-nuit-intense-man.jpeg",
  43: "43-club-de-nuit-untold.jpeg",
  44: "44-club-de-nuit-urban-man-elixir.jpeg",
  45: "45-club-de-nuit-woman.jpeg",
  46: "46-odyssey-candee.jpeg",
  47: "47-odyssey-mandarin-sky.jpeg",
  48: "48-odyssey-mega-limited-edition.jpeg",
  49: "49-yum-yum-delights.jpeg",
  50: "50-9am-dive.jpeg",
  51: "51-9pm.jpeg",
  52: "52-9pm-elixir.jpeg",
  53: "53-9pm-night-out.jpeg",
  54: "54-9pm-rebel.jpeg",
  55: "55-amber-oud-gold-edition-120ml.jpeg",
  56: "56-amber-oud-dubai-night.jpeg",
  57: "57-amber-oud-aqua-dubai.jpeg",
  58: "58-bharara-king-100ml.jpeg",
  59: "59-bharara-king-150ml.jpeg",
  60: "60-bharara-king-parfum.jpeg",
  61: "61-hawas-ice.jpeg",
  62: "62-hawas-for-him.jpeg",
  63: "63-hawas-malibu.jpeg",
  64: "64-salvo-intense.jpeg",
  65: "65-la-vie-est-belle-lancome-100ml.jpeg",
  66: "66-jean-paul-gaultier-le-male-le-parfum-intense-125ml.jpeg",
  67: "67-jean-paul-gaultier-le-male-elixir-125ml.jpeg",
  68: "68-jean-paul-gaultier-scandal-pour-homme-absolu-parfum-100ml.jpeg",
  69: "69-emporio-armani-stronger-with-you-intensely-edp-100ml.jpeg",
  70: "70-versace-eros-flame-edp-100ml.jpeg",
  71: "71-montale-arabians-tonka-edp.jpeg"
};

products.forEach(product => {
  if (imageFiles[product.id]) {
    product.image = `images/${imageFiles[product.id]}`;
  }
});
let cart = JSON.parse(localStorage.getItem("novaCart") || "[]");

let activeCategory = "Todos";
let searchTerm = "";
let sortOrder = "default";
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
  let list = activeCategory === "Todos"
    ? [...products]
    : products.filter(p => p.category === activeCategory);

  if(searchTerm){
    const term = searchTerm.toLowerCase();

    list = list.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term)
    );
  }

  if(sortOrder === "az"){
    list.sort((a,b) => a.name.localeCompare(b.name));
  }

  if(sortOrder === "za"){
    list.sort((a,b) => b.name.localeCompare(a.name));
  }

  if(sortOrder === "low"){
    list.sort((a,b) =>
      (a.price ?? Infinity) - (b.price ?? Infinity)
    );
  }

  if(sortOrder === "high"){
    list.sort((a,b) =>
      (b.price ?? -1) - (a.price ?? -1)
    );
  }

  const grid = document.getElementById("productGrid");

  if(!grid) return;

  if(!list.length){
    grid.innerHTML =
      `<div class="empty">No encontramos perfumes con esa búsqueda.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="card">
      <img
        class="photo"
        src="${p.image}"
        alt="${p.name}"
        loading="lazy"
      >

      <div class="card-body">

        <div class="tag">
          ${p.category.toUpperCase()}
        </div>

        <h3>${p.name}</h3>

        <div class="desc">
          ${p.description}
        </div>

        <div class="price-row">

          <span class="price">
            ${p.price === null ? "Consultar" : money(p.price)}
          </span>

          <button
            class="add"
            onclick="${p.price === null
              ? `consultProduct(${p.id})`
              : `addToCart(${p.id})`
            }"
          >
            ${p.price === null ? "Consultar" : "Agregar"}
          </button>

        </div>

      </div>
    </article>
  `).join("");
}
function consultProduct(id){
  const p = products.find(x => x.id === id);

  if(!p) return;

  const message =
    `Hola! 👋 Quiero consultar el precio de ${p.name}.`;

  if(!WHATSAPP_NUMBER.includes("X")){
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  } else {
    alert(`Precio a consultar: ${p.name}`);
  }
}


function getUnitPrice(product, qty){
  if(qty >= 3 && product.price3 !== null){
    return product.price3;
  }

  if(qty === 2 && product.price2 !== null){
    return product.price2;
  }

  return product.price;
}


function addToCart(id){
  const product = products.find(p => p.id === id);

  if(!product) return;

  if(product.price === null){
    consultProduct(id);
    return;
  }

  const found = cart.find(i => i.id === id);

  if(found){
    found.qty++;
  } else {
    cart.push({
      id: id,
      qty: 1
    });
  }

  save();
  renderCart();
  openCart();
}


function changeQty(id, delta){
  const item = cart.find(i => i.id === id);

  if(!item) return;

  item.qty += delta;

  if(item.qty <= 0){
    cart = cart.filter(i => i.id !== id);
  }

  save();
  renderCart();
}


function renderCart(){
  const items = document.getElementById("cartItems");

  const count = cart.reduce(
    (s,i) => s + i.qty,
    0
  );

  document.getElementById("cartCount").textContent = count;

  if(!cart.length){

    items.innerHTML = `
      <div class="empty">
        Tu carrito está vacío.<br>
        Agregá algún perfume para comenzar.
      </div>
    `;

  } else {

    items.innerHTML = cart.map(i => {

      const p = products.find(x => x.id === i.id);

      if(!p) return "";

      const unitPrice = getUnitPrice(p, i.qty);

      const itemTotal = unitPrice * i.qty;

      return `
        <div class="cart-item">

          <img
            src="${p.image}"
            alt="${p.name}"
          >

          <div>

            <h4>${p.name}</h4>

            <small>
              ${money(unitPrice)} c/u
            </small>

            <div class="qty">

              <button
                onclick="changeQty(${p.id},-1)"
              >
                −
              </button>

              <span>
                ${i.qty}
              </span>

              <button
                onclick="changeQty(${p.id},1)"
              >
                +
              </button>

            </div>

            <small style="display:block;margin-top:6px;color:#3b713b;font-weight:700;">
              ${money(itemTotal)}
            </small>

          </div>

          <button
            class="remove"
            onclick="changeQty(${p.id},-${i.qty})"
          >
            🗑
          </button>

        </div>
      `;

    }).join("");

  }


  const total = cart.reduce((sum,i) => {

    const p = products.find(x => x.id === i.id);

    if(!p) return sum;

    const unitPrice = getUnitPrice(p, i.qty);

    return sum + (unitPrice * i.qty);

  }, 0);


  document.getElementById("subtotal").textContent =
    money(total);
}


function openCart(){

  document
    .getElementById("cartPanel")
    .classList.add("open");

  document
    .getElementById("overlay")
    .classList.add("show");

}


function closeCart(){

  document
    .getElementById("cartPanel")
    .classList.remove("open");

  document
    .getElementById("overlay")
    .classList.remove("show");

}


function checkout(){

  if(!cart.length){

    alert("El carrito está vacío.");

    return;
  }


  if(WHATSAPP_NUMBER.includes("X")){

    alert(
      "Primero colocá el número de WhatsApp del negocio en app.js."
    );

    return;
  }


  const lines = cart.map(i => {

    const p = products.find(x => x.id === i.id);

    if(!p) return "";

    const unitPrice = getUnitPrice(p, i.qty);

    const totalProduct = unitPrice * i.qty;

    return (
      `• ${p.name} x${i.qty} — ` +
      `${money(totalProduct)}`
    );

  }).filter(Boolean);


  const total = cart.reduce((sum,i) => {

    const p = products.find(x => x.id === i.id);

    if(!p) return sum;

    const unitPrice = getUnitPrice(p, i.qty);

    return sum + (unitPrice * i.qty);

  }, 0);


  const msg =
    `Hola! 👋 Quiero hacer un pedido en Nova Importados:\n\n` +
    `${lines.join("\n")}\n\n` +
    `Total: ${money(total)}\n\n` +
    `Localidad: \n` +
    `Forma de pago: `;


  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

}


// ===============================
// EVENTOS
// ===============================

document.getElementById("cartButton").onclick = openCart;

document.getElementById("closeCart").onclick = closeCart;

document.getElementById("overlay").onclick = closeCart;

document.getElementById("checkout").onclick = checkout;


document.getElementById("clearCart").onclick = () => {

  cart = [];

  save();

  renderCart();

};


document.getElementById("instagramLink").href =
  INSTAGRAM_URL;


document.getElementById("waFloat").href =
  `https://wa.me/${WHATSAPP_NUMBER}`;


document
  .getElementById("searchInput")
  .addEventListener("input", function(){

    searchTerm = this.value.trim();

    renderProducts();

  });


document
  .getElementById("sortSelect")
  .addEventListener("change", function(){

    sortOrder = this.value;

    renderProducts();

  });


// ===============================
// INICIAR TIENDA
// ===============================

categories();

renderProducts();

renderCart();
