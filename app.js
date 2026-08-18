// ======================================================
// NOVA IMPORTADOS - APP.JS
// ======================================================

const WHATSAPP_NUMBER = "5493543313011";
const INSTAGRAM_URL = "https://www.instagram.com/novaimportados.ok/";

// ======================================================
// PRODUCTOS
// ======================================================

const products = [
  {id:1,name:"Art of Universe",category:"Lattafa",price:72000,price2:70000,price3:68000,image:"01-art-of-universe.jpeg",description:"Fragancia seleccionada."},
  {id:2,name:"Asad Bourbon",category:"Lattafa",price:70000,price2:69000,price3:67000,image:"02-asad-bourbon.jpeg",description:"Fragancia intensa y sofisticada."},
  {id:3,name:"Asad Negro",category:"Lattafa",price:60000,price2:58000,price3:55000,image:"03-asad-negro.jpeg",description:"Aroma elegante y de gran presencia."},
  {id:4,name:"Asad Elixir",category:"Lattafa",price:62000,price2:60000,price3:59000,image:"04-asad-elixir.jpeg",description:"Fragancia intensa y especial."},
  {id:5,name:"Asad Zanzibar",category:"Lattafa",price:null,price2:null,price3:null,image:"05-asad-zanzibar.jpeg",description:"Consultar precio."},
  {id:6,name:"Badee Al Oud Amethyst",category:"Lattafa",price:65000,price2:63000,price3:60000,image:"06-badee-al-oud-amethyst.jpeg",description:"Aroma sofisticado y envolvente."},
  {id:7,name:"Badee Al Oud For Glory",category:"Lattafa",price:46000,price2:45000,price3:43000,image:"07-badee-al-oud-for-glory.jpeg",description:"Fragancia elegante y sofisticada."},
  {id:8,name:"Badee Al Oud Honor and Glory",category:"Lattafa",price:53000,price2:51000,price3:49000,image:"08-badee-al-oud-honor-and-glory.jpeg",description:"Aroma intenso y especial."},
  {id:9,name:"Badee Al Oud Noble Blush",category:"Lattafa",price:69000,price2:67000,price3:65000,image:"09-badee-al-oud-noble-blush.jpeg",description:"Fragancia elegante."},
  {id:10,name:"Badee Al Oud Sublime",category:"Lattafa",price:62000,price2:61000,price3:59000,image:"10-badee-al-oud-sublime.jpeg",description:"Aroma sofisticado."},
  {id:11,name:"Eclaire",category:"Lattafa",price:74000,price2:72000,price3:71000,image:"11-eclaire.jpeg",description:"Fragancia dulce y envolvente."},
  {id:12,name:"Fakhar Gold",category:"Lattafa",price:60000,price2:59000,price3:57000,image:"12-fakhar-gold.jpeg",description:"Fragancia elegante."},
  {id:13,name:"Fakhar Masculino",category:"Lattafa",price:65000,price2:63000,price3:62000,image:"13-fakhar-masculino.jpeg",description:"Fragancia masculina."},
  {id:14,name:"Fakhar Femenino",category:"Lattafa",price:80000,price2:79000,price3:78000,image:"14-fakhar-femenino.jpeg",description:"Fragancia femenina."},
  {id:15,name:"Hayaati Negro",category:"Lattafa",price:50000,price2:49000,price3:46000,image:"15-hayaati-negro.jpeg",description:"Aroma intenso."},
  {id:16,name:"Hayaatim",category:"Lattafa",price:null,price2:null,price3:null,image:"16-hayaatim.jpeg",description:"Consultar precio."},
  {id:17,name:"Her Confession",category:"Lattafa",price:63000,price2:61000,price3:59000,image:"17-her-confession.jpeg",description:"Fragancia sofisticada."},
  {id:18,name:"His Confession",category:"Lattafa",price:67000,price2:65000,price3:63000,image:"18-his-confession.jpeg",description:"Fragancia sofisticada."},
  {id:19,name:"Khamrah",category:"Lattafa",price:70000,price2:69000,price3:67000,image:"19-khamrah.jpeg",description:"Fragancia cálida y sofisticada."},
  {id:20,name:"Khamrah Dukhan",category:"Lattafa",price:null,price2:null,price3:null,image:"20-khamrah-dukhan.jpeg",description:"Consultar precio."},
  {id:21,name:"Khamrah Qahwa",category:"Lattafa",price:53000,price2:51000,price3:49000,image:"21-khamrah-qahwa.jpeg",description:"Aroma intenso y especial."},
  {id:22,name:"Kit Asad & Asad Zanzibar",category:"Lattafa",price:null,price2:null,price3:null,image:"22-kit-asad-asad-zanzibar.jpeg",description:"Consultar precio."},
  {id:23,name:"Kit Yara & Yara Candy",category:"Lattafa",price:null,price2:null,price3:null,image:"23-kit-yara-yara-candy.jpeg",description:"Consultar precio."},
  {id:24,name:"Mayar",category:"Lattafa",price:null,price2:null,price3:null,image:"24-mayar.jpeg",description:"Consultar precio."},
  {id:25,name:"Musamam White",category:"Lattafa",price:144000,price2:142000,price3:139000,image:"25-musamam-white.jpeg",description:"Fragancia premium."},
  {id:26,name:"Nebras",category:"Lattafa",price:70000,price2:69000,price3:68000,image:"26-nebras.jpeg",description:"Fragancia sofisticada."},
  {id:27,name:"Qaed Al Fursan",category:"Lattafa",price:44000,price2:42000,price3:39000,image:"27-qaed-al-fursan.jpeg",description:"Aroma intenso."},
  {id:28,name:"Qaed Al Fursan Unlimited",category:"Lattafa",price:30000,price2:29000,price3:28000,image:"28-qaed-al-fursan-unlimited.jpeg",description:"Fragancia fresca."},
  {id:29,name:"Teriaq Femenino",category:"Lattafa",price:78000,price2:77000,price3:75000,image:"29-teriaq-femenino.jpeg",description:"Fragancia femenina."},
  {id:30,name:"The Kingdom Femenino",category:"Lattafa",price:55000,price2:53000,price3:51000,image:"30-the-kingdom-femenino.jpeg",description:"Fragancia elegante."},
  {id:31,name:"The Kingdom Masculino",category:"Lattafa",price:84000,price2:82000,price3:79000,image:"31-the-kingdom-masculino.jpeg",description:"Fragancia masculina."},
  {id:32,name:"Vintage Radio",category:"Lattafa",price:61000,price2:60000,price3:58000,image:"32-vintage-radio.jpeg",description:"Aroma sofisticado."},
  {id:33,name:"Yara Candy",category:"Lattafa",price:51000,price2:50000,price3:48000,image:"33-yara-candy.jpeg",description:"Fragancia dulce y encantadora."},
  {id:34,name:"Yara Moi",category:"Lattafa",price:55000,price2:53000,price3:49000,image:"34-yara-moi.jpeg",description:"Fragancia elegante."},
  {id:35,name:"Yara Rosa",category:"Lattafa",price:67000,price2:65000,price3:62000,image:"35-yara-rosa.jpeg",description:"Fragancia femenina y elegante."},
  {id:36,name:"Yara Elixir",category:"Lattafa",price:90000,price2:88000,price3:84000,image:"36-yara-elixir.jpeg",description:"Aroma sofisticado y duradero."},
  {id:37,name:"Yara Tous",category:"Lattafa",price:54000,price2:52000,price3:49000,image:"37-yara-tous.jpeg",description:"Fragancia especial."},

  {id:38,name:"Royal Amber",category:"Luxury Collection",price:240000,price2:234000,price3:210000,image:"38-royal-amber.jpeg",description:"Luxury Collection."},

  {id:39,name:"Liquid Brun",category:"Otros",price:80000,price2:79000,price3:76000,image:"39-liquid-brun.jpeg",description:"Fragancia seleccionada."},
  {id:40,name:"Vulcan Feu",category:"Otros",price:85000,price2:83000,price3:79000,image:"40-vulcan-feu.jpeg",description:"Fragancia seleccionada."},

  {id:41,name:"Club de Nuit Iconic",category:"Armaf",price:78000,price2:75000,price3:72000,image:"41-club-de-nuit-iconic.jpeg",description:"Fragancia Armaf."},
  {id:42,name:"Club de Nuit Intense Man",category:"Armaf",price:86000,price2:83000,price3:79000,image:"42-club-de-nuit-intense-man.jpeg",description:"Fragancia Armaf."},
  {id:43,name:"Club de Nuit Untold",category:"Armaf",price:86000,price2:83000,price3:79000,image:"43-club-de-nuit-untold.jpeg",description:"Fragancia Armaf."},
  {id:44,name:"Club de Nuit Urban Man Elixir",category:"Armaf",price:90000,price2:89000,price3:85000,image:"44-club-de-nuit-urban-man-elixir.jpeg",description:"Fragancia Armaf."},
  {id:45,name:"Club de Nuit Woman",category:"Armaf",price:65000,price2:62000,price3:59000,image:"45-club-de-nuit-woman.jpeg",description:"Fragancia Armaf."},
  {id:46,name:"Odyssey Candee",category:"Armaf",price:57000,price2:54000,price3:52000,image:"46-odyssey-candee.jpeg",description:"Fragancia Armaf."},
  {id:47,name:"Odyssey Mandarin Sky",category:"Armaf",price:61000,price2:58000,price3:55000,image:"47-odyssey-mandarin-sky.jpeg",description:"Fragancia Armaf."},
  {id:48,name:"Odyssey Mega Limited Edition",category:"Armaf",price:69000,price2:67000,price3:65000,image:"48-odyssey-mega-limited-edition.jpeg",description:"Fragancia Armaf."},
  {id:49,name:"Yum Yum Delights",category:"Armaf",price:70000,price2:65000,price3:63000,image:"49-yum-yum-delights.jpeg",description:"Fragancia seleccionada."},

  {id:50,name:"9AM Dive",category:"Afnan",price:55000,price2:52000,price3:51000,image:"50-9am-dive.jpeg",description:"Fragancia Afnan."},
  {id:51,name:"9PM",category:"Afnan",price:81000,price2:79000,price3:75000,image:"51-9pm.jpeg",description:"Fragancia Afnan."},
  {id:52,name:"9PM Elixir",category:"Afnan",price:98000,price2:95000,price3:94000,image:"52-9pm-elixir.jpeg",description:"Fragancia Afnan."},
  {id:53,name:"9PM Night Out",category:"Afnan",price:120000,price2:118000,price3:115000,image:"53-9pm-night-out.jpeg",description:"Fragancia Afnan."},
  {id:54,name:"9PM Rebel",category:"Afnan",price:80000,price2:79000,price3:77000,image:"54-9pm-rebel.jpeg",description:"Fragancia Afnan."},

  {id:55,name:"Amber Oud Gold Edition 120ml",category:"Al Haramain",price:122000,price2:120000,price3:117000,image:"55-amber-oud-gold-edition-120ml.jpeg",description:"Fragancia Al Haramain."},
  {id:56,name:"Amber Oud Dubai Night",category:"Al Haramain",price:null,price2:null,price3:null,image:"56-amber-oud-dubai-night.jpeg",description:"Consultar precio."},
  {id:57,name:"Amber Oud Aqua Dubai",category:"Al Haramain",price:120000,price2:119000,price3:116000,image:"57-amber-oud-aqua-dubai.jpeg",description:"Fragancia Al Haramain."},

  {id:58,name:"Bharara King 100ml",category:"Bharara",price:110000,price2:108000,price3:105000,image:"58-bharara-king-100ml.jpeg",description:"Fragancia Bharara."},
  {id:59,name:"Bharara King 150ml",category:"Bharara",price:160000,price2:159000,price3:155000,image:"59-bharara-king-150ml.jpeg",description:"Fragancia Bharara."},
  {id:60,name:"Bharara King Parfum",category:"Bharara",price:158000,price2:155000,price3:153000,image:"60-bharara-king-parfum.jpeg",description:"Fragancia Bharara."},

  {id:61,name:"Hawas Ice",category:"Rasasi",price:84000,price2:81000,price3:79000,image:"61-hawas-ice.jpeg",description:"Fragancia Rasasi."},
  {id:62,name:"Hawas For Him",category:"Rasasi",price:65000,price2:62000,price3:59000,image:"62-hawas-for-him.jpeg",description:"Fragancia Rasasi."},
  {id:63,name:"Hawas Malibu",category:"Rasasi",price:101000,price2:98000,price3:93000,image:"63-hawas-malibu.jpeg",description:"Fragancia Rasasi."},

  {id:64,name:"Salvo Intense",category:"Diseñador",price:50000,price2:47000,price3:43000,image:"64-salvo-intense.jpeg",description:"Fragancia seleccionada."},
  {id:65,name:"La Vie Est Belle Lancôme 100ml",category:"Diseñador",price:390000,price2:384000,price3:365000,image:"65-la-vie-est-belle-lancome-100ml.jpeg",description:"Fragancia Lancôme."},
  {id:66,name:"Jean Paul Gaultier Le Male Le Parfum Intense 125ml",category:"Diseñador",price:200000,price2:197000,price3:194000,image:"66-jean-paul-gaultier-le-male-le-parfum-intense-125ml.jpeg",description:"Fragancia Jean Paul Gaultier."},
  {id:67,name:"Jean Paul Gaultier Le Male Elixir 125ml",category:"Diseñador",price:225000,price2:213000,price3:205000,image:"67-jean-paul-gaultier-le-male-elixir-125ml.jpeg",description:"Fragancia Jean Paul Gaultier."},
  {id:68,name:"Jean Paul Gaultier Scandal Pour Homme Absolu Parfum 100ml",category:"Diseñador",price:210000,price2:202000,price3:194000,image:"68-jean-paul-gaultier-scandal-pour-homme-absolu-parfum-100ml.jpeg",description:"Fragancia Jean Paul Gaultier."},
  {id:69,name:"Emporio Armani Stronger With You Intensely EDP 100ml",category:"Diseñador",price:300000,price2:290000,price3:250000,image:"69-emporio-armani-stronger-with-you-intensely-edp-100ml.jpeg",description:"Fragancia Emporio Armani."},
  {id:70,name:"Versace Eros Flame EDP 100ml",category:"Diseñador",price:160000,price2:155000,price3:152000,image:"70-versace-eros-flame-edp-100ml.jpeg",description:"Fragancia Versace."},
  {id:71,name:"Montale Arabians Tonka EDP",category:"Diseñador",price:295000,price2:288000,price3:null,image:"71-montale-arabians-tonka-edp.jpeg",description:"Fragancia Montale."}
];

// ======================================================
// VARIABLES
// ======================================================

let cart = JSON.parse(localStorage.getItem("novaCart") || "[]");
let activeCategory = "Todos";
let searchTerm = "";
let sortOrder = "default";

// ======================================================
// UTILIDADES
// ======================================================

function money(n) {
  return "$ " + Number(n).toLocaleString("es-AR");
}

function save() {
  localStorage.setItem("novaCart", JSON.stringify(cart));
}

// ======================================================
// CATEGORÍAS
// ======================================================

function categories() {

  const filters = document.getElementById("filters");

  if (!filters) return;

  const cats = [
    "Todos",
    ...new Set(products.map(product => product.category))
  ];

  filters.innerHTML = "";

  cats.forEach(cat => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "filter";

    if (cat === activeCategory) {
      button.classList.add("active");
    }

    button.textContent = cat;

    button.addEventListener("click", function() {
      setCategory(cat);
    });

    filters.appendChild(button);
  });
}

function setCategory(cat) {

  activeCategory = cat;

  categories();

  renderProducts();
}

// ======================================================
// PRODUCTOS
// ======================================================

function renderProducts() {

  const grid = document.getElementById("productGrid");

  if (!grid) return;

  let list = [...products];

  // Categoría
  if (activeCategory !== "Todos") {
    list = list.filter(
      product => product.category === activeCategory
    );
  }

  // Búsqueda
  if (searchTerm !== "") {

    const term = searchTerm.toLowerCase();

    list = list.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }

  // Orden
  if (sortOrder === "az") {

    list.sort((a,b) =>
      a.name.localeCompare(b.name)
    );

  } else if (sortOrder === "za") {

    list.sort((a,b) =>
      b.name.localeCompare(a.name)
    );

  } else if (sortOrder === "low") {

    list.sort((a,b) =>
      (a.price ?? Infinity) -
      (b.price ?? Infinity)
    );

  } else if (sortOrder === "high") {

    list.sort((a,b) =>
      (b.price ?? -1) -
      (a.price ?? -1)
    );
  }

  // Sin resultados
  if (list.length === 0) {

    grid.innerHTML = `
      <div class="empty">
        No encontramos perfumes con esa búsqueda.
      </div>
    `;

    return;
  }

  // Mostrar productos
  grid.innerHTML = list.map(product => `

    <article class="card">

      <img
        class="photo"
        src="images/${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="this.src='https://placehold.co/700x700/f0ede5/333?text=Sin+imagen'"
      >

      <div class="card-body">

        <div class="tag">
          ${product.category.toUpperCase()}
        </div>

        <h3>
          ${product.name}
        </h3>

        <div class="desc">
          ${product.description}
        </div>

        <div class="price-row">

          <span class="price">
            ${
              product.price === null
              ? "Consultar"
              : money(product.price)
            }
          </span>

          <button
            type="button"
            class="add"
            onclick="${
              product.price === null
              ? `consultProduct(${product.id})`
              : `addToCart(${product.id})`
            }"
          >
            ${
              product.price === null
              ? "Consultar"
              : "Agregar"
            }
          </button>

        </div>

      </div>

    </article>

  `).join("");
}

// ======================================================
// CONSULTAR PRODUCTO
// ======================================================

function consultProduct(id) {

  const product = products.find(
    p => p.id === id
  );

  if (!product) return;

  const message =
    `Hola! 👋 Quiero consultar el precio de ${product.name}.`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// ======================================================
// CARRITO
// ======================================================

function getUnitPrice(product, qty) {

  if (
    qty >= 3 &&
    product.price3 !== null
  ) {
    return product.price3;
  }

  if (
    qty === 2 &&
    product.price2 !== null
  ) {
    return product.price2;
  }

  return product.price;
}

function addToCart(id) {

  const product = products.find(
    p => p.id === id
  );

  if (!product) return;

  if (product.price === null) {
    consultProduct(id);
    return;
  }

  const found = cart.find(
    item => item.id === id
  );

  if (found) {

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

function changeQty(id, delta) {

  const item = cart.find(
    i => i.id === id
  );

  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {

    cart = cart.filter(
      i => i.id !== id
    );
  }

  save();
  renderCart();
}

// ======================================================
// MOSTRAR CARRITO
// ======================================================

function renderCart() {

  const items = document.getElementById("cartItems");
  const count = document.getElementById("cartCount");
  const subtotal = document.getElementById("subtotal");

  if (!items) return;

  const totalItems = cart.reduce(
    (sum,item) => sum + item.qty,
    0
  );

  if (count) {
    count.textContent = totalItems;
  }

  if (cart.length === 0) {

    items.innerHTML = `
      <div class="empty">
        Tu carrito está vacío.<br>
        Agregá algún perfume para comenzar.
      </div>
    `;

  } else {

    items.innerHTML = cart.map(item => {

      const product = products.find(
        p => p.id === item.id
      );

      if (!product) return "";

      const unitPrice =
        getUnitPrice(product,item.qty);

      const totalProduct =
        unitPrice * item.qty;

      return `

        <div class="cart-item">

          <img
            src="images/${product.image}"
            alt="${product.name}"
            onerror="this.src='https://placehold.co/150x150/f0ede5/333?text=Sin+imagen'"
          >

          <div>

            <h4>
              ${product.name}
            </h4>

            <small>
              ${money(unitPrice)} c/u
            </small>

            <div class="qty">

              <button
                type="button"
                onclick="changeQty(${product.id},-1)"
              >
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                type="button"
                onclick="changeQty(${product.id},1)"
              >
                +
              </button>

            </div>

            <small
              style="
                display:block;
                margin-top:6px;
                color:#3b713b;
                font-weight:700;
              "
            >
              ${money(totalProduct)}
            </small>

          </div>

          <button
            type="button"
            class="remove"
            onclick="changeQty(${product.id},-${item.qty})"
          >
            🗑
          </button>

        </div>

      `;

    }).join("");
  }

  const total = cart.reduce(
    (sum,item) => {

      const product = products.find(
        p => p.id === item.id
      );

      if (!product) return sum;

      const unitPrice =
        getUnitPrice(product,item.qty);

      return sum +
        unitPrice * item.qty;

    },
    0
  );

  if (subtotal) {
    subtotal.textContent = money(total);
  }
}

// ======================================================
// ABRIR CARRITO
// ======================================================

function openCart() {

  const cartPanel =
    document.getElementById("cartPanel");

  const overlay =
    document.getElementById("overlay");

  if (cartPanel) {
    cartPanel.classList.add("open");
  }

  if (overlay) {
    overlay.classList.add("show");
  }
}

// ======================================================
// CERRAR CARRITO
// ======================================================

function closeCart() {

  const cartPanel =
    document.getElementById("cartPanel");

  const overlay =
    document.getElementById("overlay");

  if (cartPanel) {
    cartPanel.classList.remove("open");
  }

  if (overlay) {
    overlay.classList.remove("show");
  }
}

// ======================================================
// FINALIZAR PEDIDO
// ======================================================

function checkout() {

  if (cart.length === 0) {

    alert("El carrito está vacío.");

    return;
  }

  const lines = cart.map(item => {

    const product = products.find(
      p => p.id === item.id
    );

    if (!product) return "";

    const unitPrice =
      getUnitPrice(product,item.qty);

    const totalProduct =
      unitPrice * item.qty;

    return `• ${product.name} x${item.qty} — ${money(totalProduct)}`;

  }).filter(Boolean);

  const total = cart.reduce(
    (sum,item) => {

      const product = products.find(
        p => p.id === item.id
      );

      if (!product) return sum;

      const unitPrice =
        getUnitPrice(product,item.qty);

      return sum +
        unitPrice * item.qty;

    },
    0
  );

  const message =
    `Hola! 👋 Quiero hacer un pedido en Nova Importados:\n\n` +
    `${lines.join("\n")}\n\n` +
    `Total: ${money(total)}\n\n` +
    `Localidad: \n` +
    `Forma de pago: `;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// ======================================================
// MÁS VENDIDOS
// ======================================================

const bestSellerIds = [
  19,
  21,
  33,
  51,
  42,
  55,
  65,
  67
];

function renderBestSellers() {

  const grid =
    document.getElementById("bestSellersGrid");

  if (!grid) return;

  const bestSellers =
    bestSellerIds
      .map(id =>
        products.find(p => p.id === id)
      )
      .filter(Boolean);

  grid.innerHTML =
    bestSellers.map(product => `

      <article class="card">

        <img
          class="photo"
          src="images/${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://placehold.co/700x700/f0ede5/333?text=Sin+imagen'"
        >

        <div class="card-body">

          <div class="tag">
            ${product.category.toUpperCase()}
          </div>

          <h3>
            ${product.name}
          </h3>

          <div class="desc">
            ${product.description}
          </div>

          <div class="price-row">

            <span class="price">
              ${
                product.price === null
                ? "Consultar"
                : money(product.price)
              }
            </span>

            <button
              type="button"
              class="add"
              onclick="${
                product.price === null
                ? `consultProduct(${product.id})`
                : `addToCart(${product.id})`
              }"
            >
              ${
                product.price === null
                ? "Consultar"
                : "Agregar"
              }
            </button>

          </div>

        </div>

      </article>

    `).join("");
}

// ======================================================
// INICIAR TODO
// ======================================================

document.addEventListener("DOMContentLoaded", function() {

  // Categorías
  categories();

  // Productos
  renderProducts();

  // Carrito
  renderCart();

  // Más vendidos
  renderBestSellers();

  // ----------------------------
  // BOTÓN CARRITO
  // ----------------------------

  const cartButton =
    document.getElementById("cartButton");

  if (cartButton) {
    cartButton.addEventListener(
      "click",
      openCart
    );
  }

  // ----------------------------
  // CERRAR CARRITO
  // ----------------------------

  const closeButton =
    document.getElementById("closeCart");

  if (closeButton) {
    closeButton.addEventListener(
      "click",
      closeCart
    );
  }

  // ----------------------------
  // OVERLAY
  // ----------------------------

  const overlay =
    document.getElementById("overlay");

  if (overlay) {
    overlay.addEventListener(
      "click",
      closeCart
    );
  }

  // ----------------------------
  // FINALIZAR
  // ----------------------------

  const checkoutButton =
    document.getElementById("checkout");

  if (checkoutButton) {
    checkoutButton.addEventListener(
      "click",
      checkout
    );
  }

  // ----------------------------
  // VACIAR CARRITO
  // ----------------------------

  const clearButton =
    document.getElementById("clearCart");

  if (clearButton) {

    clearButton.addEventListener(
      "click",
      function() {

        cart = [];

        save();

        renderCart();
      }
    );
  }

  // ----------------------------
  // INSTAGRAM
  // ----------------------------

  const instagram =
    document.getElementById("instagramLink");

  if (instagram) {
    instagram.href = INSTAGRAM_URL;
  }

  // ----------------------------
  // WHATSAPP
  // ----------------------------

  const whatsapp =
    document.getElementById("waFloat");

  if (whatsapp) {
    whatsapp.href =
      `https://wa.me/${WHATSAPP_NUMBER}`;
  }

  // ----------------------------
  // BUSCADOR
  // ----------------------------

  const search =
    document.getElementById("searchInput");

  if (search) {

    search.addEventListener(
      "input",
      function() {

        searchTerm =
          this.value.trim();

        renderProducts();
      }
    );
  }

  // ----------------------------
  // ORDENAR
  // ----------------------------

  const sort =
    document.getElementById("sortSelect");

  if (sort) {

    sort.addEventListener(
      "change",
      function() {

        sortOrder = this.value;

        renderProducts();
      }
    );
  }

  console.log(
    "Nova Importados cargado correctamente:",
    products.length,
    "productos"
  );
});
