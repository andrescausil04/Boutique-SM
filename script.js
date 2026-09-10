/* ===========================
   script.js — Boutique S&M
   Versión optimizada — entrega final
   =========================== */

/* ---------- CONFIG (reemplazar si hace falta) ---------- */
const WHATSAPP_NUMBER = "573245666731";
const BRAND_EMAIL = "symboutique16@gmail.com";
const INSTAGRAM = "https://www.instagram.com/sym___boutique";
const PRODUCTS_PER_PAGE = 9;

/* ---------- PRODUCTOS (deja rutas tal cual) ---------- */
const initialProducts = [
  {id:'p1', title:'Sandalias Cleo', refery:'Diva', category:'Sandalias', price:30000, desc:'diseño elegante', images:['imagenes/IMG-20251030-WA0020.jpg','imagenes/IMG-20251030-WA0018.jpg','imagenes/IMG-20251030-WA0019.jpg','imagenes/IMG-20251030-WA0021.jpg','imagenes/IMG-20251030-WA0022.jpg'], popular:10, date:'2025-10-01'},
  {id:'p2', title:'Sandalias Lupe', refery:'Lupe', category:'Sandalias', price:30000, desc:'diseño elegante', images:['imagenes/IMG-20251030-WA0004.jpg','imagenes/IMG-20251030-WA0005.jpg','imagenes/IMG-20251030-WA0002.jpg','imagenes/IMG-20251030-WA0003.jpg','imagenes/IMG-20251030-WA0006.jpg'], popular:8, date:'2025-09-15'},
  {id:'p3', title:'Sandalias Katty', refery:'Katty', category:'Sandalias', price:30000, desc:'diseño unico con tiras bordadas', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.28.59_6d9df6a4.jpg', 'imagenes/IMG-20251030-WA0007.jpg', 'imagenes/IMG-20251030-WA0008.jpg','imagenes/IMG-20251030-WA0009.jpg','imagenes/IMG-20251030-WA0010.jpg','imagenes/IMG-20251030-WA0011.jpg'], popular:6, date:'2025-08-21'},
  {id:'p4', title:'Sandalias Charlotte', refery:'Charlotte', category:'Sandalias', price:30000, desc:'Cómodas con un bordado unico', images:['imagenes/IMG-20251030-WA0016.jpg','imagenes/IMG-20251030-WA0015.jpg','imagenes/IMG-20251030-WA0014.jpg',], popular:9, date:'2025-10-10'},
  {id:'p5', title:'Sandalias Diva', refery:'Diva', category:'Sandalias', price:30000, desc:'Cómoda para uso diario', images:['imagenes/IMG-20251030-WA0019.jpg'], popular:5, date:'2025-07-05'},
  {id:'p6', title:'Sandalias Vaquita', refery:'Vaquita', category:'Sandalias', price:30000, desc:'Diseño Elegante', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.10_314cfeb7.jpg'], popular:7, date:'2025-09-05'},
  {id:'p7', title:'sandalias Coquette', refery:'Coquette', category:'Sandalias', price:30000, desc:'Bordado con flores de todos los colores', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.25_ded77ced.jpg'], popular:3, date:'2025-06-12'},
  {id:'p8', title:'Sandalias Nancy', refery:'Nancy', category:'Sandalias', price:30000, desc:'Diseño premium para eventos', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.31_89e10acd.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.30_4e059b9c.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.30_c9f3aaea.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.31_515f291c.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.31_b1c5bdb8.jpg'], popular:11, date:'2025-10-20'},
  {id:'p9', title:'Sandalias Sol', refery:'Sol', category:'Sandalias', price:30000, desc:'Diseño elegante, Para ir a la Universidad', images:['imagenes/IMG-20251030-WA0045.jpg','imagenes/IMG-20251030-WA0043.jpg','imagenes/IMG-20251030-WA0044.jpg','imagenes/IMG-20251030-WA0046.jpg','imagenes/IMG-20251030-WA0047.jpg'], popular:4, date:'2025-05-30'},
  {id:'p10', title:'Sandalias Ingrid', refery:'Ingrid', category:'Sandalias', price:30000, desc:'Diseño elegante, Para ir a la Universidad', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.29.37_c93c65c6.jpg'], popular:4, date:'2025-05-30'},
  {id:'p11', title:'Sandalias Lucia', refery:'Lucia', category:'Sandalias', price:30000, desc:'Diseño elegante', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.34.11_e8cfdecd.jpg'], popular:4, date:'2025-05-30'},
  {id:'p12', title:'Sandalias Eva', refery:'Eva', category:'Sandalias', price:30000, desc:'Cómodas para uso diario', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 10.34.12_4c2978de.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.34.12_4c2978de.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.34.12_d29affbf.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 10.34.13_ceeaee09.jpg',], popular:4, date:'2025-05-30'},
  {id:'p13', title:'Sandalias Coco', refery:'Coco', category:'Sandalias', price:30000, desc:'Diseño elegante', images:['imagenes/IMG-20251030-WA0071.jpg','imagenes/IMG-20251030-WA0072.jpg','imagenes/IMG-20251030-WA0069.jpg','imagenes/IMG-20251030-WA0070.jpg','imagenes/IMG-20251030-WA0068.jpg'], popular:4, date:'2025-05-30'},
  {id:'p14', title:'Sandalias Infantil', refery:'Niña Rapunzel', category:'Sandalias', price:30000, desc:'Hermosas, para niñas', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.33_a88f64ef.jpg', 'imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.34_e0620f17.jpg', 'imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.35_41d01c90.jpg',], popular:12, date:'2025-10-25'},
  {id:'p15', title:'Sandalias Infantil', refery:'Niña Coquette', category:'Sandalias', price:30000, desc:'Hermosas, para niñas', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.56_8a763d11.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.57_1e79c613.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.57_29400c66.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.57_29400c66.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.12.58_0fafb0e5.jpg'], popular:9, date:'2025-10-18'},
  {id:'p16', title:'Sandalias Karol', refery:'Niña Karol', category:'Sandalias', price:30000, desc:'Hermosas, para niñas', images:['imagenes/Imagen de WhatsApp 2025-10-30 a las 19.13.24_4b6bb4ce.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.13.25_f0498dfd.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.13.26_37f1a393.jpg','imagenes/Imagen de WhatsApp 2025-10-30 a las 19.13.27_eb9ab33b.jpg'], popular:15, date:'2025-10-28'},
  {id:'p17', title:'Sandalias Ingrid', refery:'Ingrid', category:'Sandalias', price:30000, desc:'Diseño elegante', images:['imagenes/IMG-20251030-WA0050.jpg','imagenes/IMG-20251030-WA0051.jpg','imagenes/IMG-20251030-WA0054.jpg','imagenes/IMG-20251030-WA0055.jpg','imagenes/IMG-20251030-WA0057.jpg','imagenes/IMG-20251030-WA0059.jpg'], popular:7, date:'2025-10-12'},
  {id:'p18', title:'Sandalias Altas', refery:'Carlota', category:'Sandalias', price:50000, desc:'diseño elegante', images:['imagenes/Sandalias_altas_Carlota.jpg','imagenes/Sandalias_altas_Natasha.jpg'], popular:10, date:'2025-10-01'}, 
  {id:'p19', title:'Sandalias Altas', refery:'Patty', category:'Sandalias', price:50000, desc:'diseño unico con tiras bordadas', images:['imagenes/Sandalias_altas_Patty.jpg'], popular:6, date:'2025-08-21'},
  {id:'p20', title:'Sandalias Altas', refery:'Cami', category:'Sandalias', price:50000, desc:'Cómodas con un bordado unico', images:['imagenes/Sandalias_Altas_Cami.jpg'], popular:9, date:'2025-10-10'},
  {id:'p21', title:'Sandalias Altas', refery:'Salome', category:'Sandalias', price:50000, desc:'Cómoda para uso diario', images:['imagenes/Sandalias_alta_Salome.jpg'], popular:5, date:'2025-07-05'},
  {id:'p22', title:'Sandalias Altas', refery:'Ana', category:'Sandalias', price:50000, desc:'Diseño Elegante', images:['imagenes/Angie.jpg'], popular:7, date:'2025-09-05'},
];

/* ---------- STATE ---------- */
let products = [...initialProducts];
let filtered = [...products];
let page = 1;
let favorites = JSON.parse(localStorage.getItem('sm_favs') || '[]');
let cart = JSON.parse(localStorage.getItem('sm_cart') || '{}');

/* Guarda estado del quick view: id + índice de imagen visible */
window.currentQuickViewId = null;
window.currentQuickViewImageIndex = 0;

/* ---------- UTILIDADES ---------- */
function escapeHtml(str){
  if(!str) return '';
  return String(str).replace(/[&<>"'`=\/]/g, function (s) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#x60;','/':'&#x2F;','=':'&#61;'})[s];
  });
}
function formatMoney(n){ return `$${Number(n).toLocaleString()}`; }
function saveCart(){ localStorage.setItem('sm_cart', JSON.stringify(cart)); }
function saveFavs(){ localStorage.setItem('sm_favs', JSON.stringify(favorites)); }

/* ---------- INICIALIZACIÓN UI ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // footer year y links
  const yearEl = document.getElementById('year'); if(yearEl) yearEl.textContent = new Date().getFullYear();
  const ig = document.getElementById('igLink'); if(ig) ig.href = INSTAGRAM;
  const wh = document.getElementById('whLink'); if(wh) wh.href = `https://wa.me/${WHATSAPP_NUMBER}`;

  // categorías nav bind
  const nav = document.getElementById('categoriesNav');
  if(nav){
    nav.querySelectorAll('.nav-link').forEach(a=>{
      a.addEventListener('click', (e)=>{
        e.preventDefault();
        const cat = a.getAttribute('data-cat') || '';
        filterCategory(cat);
        scrollToSection('productos');
      });
    });
  }

  // inputs: búsqueda y filtros
  const search = document.getElementById('searchInput');
  if(search) search.addEventListener('input', ()=> applyFilters());

  applyFilters();
});

/* ---------- CATEGORÍAS / FILTROS / ORDEN ---------- */
function setActiveCategory(cat) {
  const nav = document.getElementById('categoriesNav');
  if(!nav) return;
  nav.querySelectorAll('.nav-link').forEach(a=>{
    const aCat = a.getAttribute('data-cat') || '';
    if(aCat === cat) a.classList.add('active'); else a.classList.remove('active');
  });
}

function filterCategory(cat){
  const normalized = (cat || '').toString().trim();
  if(normalized === ''){
    products = [...initialProducts];
  } else {
    products = initialProducts.filter(p => ((p.category||'').toString().toLowerCase() === normalized.toLowerCase()));
  }
  filtered = [...products];
  page = 1;
  setActiveCategory(cat || '');
  applyFilters();
  scrollToSection('productos');
}

function applyFilters(){
  const q = (document.getElementById('searchInput')?.value || '').trim().toLowerCase();
  const sort = document.getElementById('sortSelect')?.value || 'popular';
  const min = parseInt(document.getElementById('priceMin')?.value || '0', 10) || 0;
  const max = parseInt(document.getElementById('priceMax')?.value || '0', 10) || 0;

  filtered = products.filter(p=>{
    const hay = `${p.title} ${p.desc} ${p.category} ${p.refery}`.toLowerCase();
    const matchesQ = q === '' || hay.includes(q);
    const matchesPrice = (min === 0 || p.price >= min) && (max === 0 || p.price <= max);
    return matchesQ && matchesPrice;
  });

  if(sort === 'price-asc') filtered.sort((a,b)=>a.price - b.price);
  else if(sort === 'price-desc') filtered.sort((a,b)=>b.price - a.price);
  else if(sort === 'new') filtered.sort((a,b)=> new Date(b.date) - new Date(a.date));
  else filtered.sort((a,b)=> (b.popular || 0) - (a.popular || 0));

  page = 1;
  renderGrid();
}

/* ---------- PAGINACIÓN ---------- */
function prevPage(){ 
  if(page > 1){ 
    page--; 
    console.log('Página actual:', page);
    renderGrid();
  } 
}

function nextPage(){ 
  const max = Math.ceil(filtered.length / PRODUCTS_PER_PAGE); 
  console.log('Página:', page, 'Máximo:', max);
  if(page < max){ 
    page++; 
    console.log('Página actual:', page);
    renderGrid();
  } 
}
/* ---------- FAVORITOS ---------- */
function toggleFav(id, el){
  if(favorites.includes(id)) favorites = favorites.filter(x=>x!==id);
  else favorites.push(id);
  saveFavs();
  if(el){
    el.classList.toggle('heart', favorites.includes(id));
    el.textContent = favorites.includes(id)?'❤':'♡';
  }
}

/* ---------- CARRITO ---------- */
function addToCart(id, imageIndex = null){
  const p = initialProducts.find(x=>x.id === id);
  if(!p){ alert('Producto no encontrado'); return; }

  // decidir índice: preferir el quickview si corresponde
  if(imageIndex === null){
    if(window.currentQuickViewId === id) imageIndex = window.currentQuickViewImageIndex || 0;
    else imageIndex = 0;
  }

  const imgs = (p.images && Array.isArray(p.images) && p.images.length) ? p.images : (p.image ? [p.image] : []);
  const selectedImage = imgs.length ? (imgs[imageIndex] || imgs[0]) : null;
  const key = `${id}::img${imageIndex}`;

  if(!cart[key]){
    cart[key] = {
      id: p.id,
      title: p.title,
      price: p.price,
      qty: 0,
      selectedImage: selectedImage,
      refery: p.refery || ''
    };
  }
  cart[key].qty++;
  saveCart();
  updateCartCount();
  renderCart();
  alert(`${p.title} agregado al carrito`);
}

/* ---------- RENDER GRID (cards) ---------- */
function renderGrid(){
  const grid = document.getElementById('productsGrid');
  if(!grid) return console.warn('renderGrid: no #productsGrid');
  grid.innerHTML = '';
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const pageItems = filtered.slice(start, start + PRODUCTS_PER_PAGE);

  if(!pageItems || pageItems.length === 0){
    grid.innerHTML = '<div class="col-12"><div class="text-center py-4 text-muted">No hay productos para mostrar</div></div>';
    document.getElementById('resultCount').textContent = `Mostrando 0 productos`;
    document.getElementById('pageNumbers').textContent = `Página ${page} de 1`;
    updateCartCount();
    return;
  }

  pageItems.forEach(p=>{
    const imgSrc = (p.images && p.images.length) ? p.images[0] : (p.image || 'https://via.placeholder.com/800x600.png?text=Sin+imagen');
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4';
    const card = document.createElement('div');
    card.className = 'card h-100 position-relative';

    card.innerHTML = `
      <button class="fav ${favorites.includes(p.id)?'heart':''}" title="Favorito" onclick="toggleFav('${p.id}', this)">${favorites.includes(p.id)?'❤':'♡'}</button>
      <img src="${imgSrc}" class="card-img-top img-fit" alt="${escapeHtml(p.title)}" onclick="openQuickView('${p.id}')" style="cursor:pointer;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${escapeHtml(p.title)}</h5>
        <p class="text-muted small mb-1">Ref: ${escapeHtml(p.refery || '')}</p>
        <p class="card-text text-muted mb-2">${escapeHtml(p.desc || '')}</p>
        <div class="mt-auto">
          <div class="d-flex justify-content-between align-items-center">
            <div class="price">${formatMoney(p.price)}</div>
            <div class="muted">⭐ ${p.popular || 0}</div>
          </div>
          <div class="mt-2 d-flex gap-2">
            <button class="btn btn-primary w-100" onclick="addToCart('${p.id}')">Agregar</button>
            <button class="btn btn-outline-secondary w-100" onclick="openQuickView('${p.id}')">Ver</button>
          </div>
        </div>
      </div>
    `;
    col.appendChild(card);
    grid.appendChild(col);
  });

  // En la función renderGrid(), al final (después de updateCartCount()):

  document.getElementById('resultCount').textContent = `Mostrando ${filtered.length} productos`;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
  document.getElementById('pageNumbers').textContent = `Página ${page} de ${totalPages}`;
  updateCartCount();
  renderCart();
  updatePaginationDisplay(); // ← Añade esta línea
}


/* ---------- CARRITO UI ---------- */
function updateCartCount(){
  const count = Object.values(cart).reduce((s,i)=> s + (i.qty || 0), 0);
  const el = document.getElementById('cartCount');
  if(el) el.textContent = count;
}

function renderCart(){
  const itemsDiv = document.getElementById('cartItems');
  if(!itemsDiv) return;
  itemsDiv.innerHTML = '';
  const keys = Object.keys(cart);
  if(keys.length === 0){
    document.getElementById('cartTotal').textContent = '$0.00';
    itemsDiv.innerHTML = '<div class="text-center text-muted py-3">Tu carrito está vacío</div>';
    updateCartCount();
    return;
  }

  let total = 0;
  keys.forEach(k=>{
    const it = cart[k];
    total += it.price * it.qty;
    const item = document.createElement('div');
    item.className = 'list-group-item d-flex justify-content-between align-items-center';
    item.innerHTML = `
      <div class="d-flex flex-column" style="flex:1">
        <div class="fw-semibold">${escapeHtml(it.title)}</div>
        <div class="text-muted small">Precio unitario: ${formatMoney(it.price)}</div>
        <div class="mt-2">
          <div class="input-group input-group-sm" style="width:140px;">
            <button class="btn btn-outline-secondary" type="button" onclick="changeQty('${k}', -1)">−</button>
            <input type="text" class="form-control text-center" value="${it.qty}" readonly>
            <button class="btn btn-outline-secondary" type="button" onclick="changeQty('${k}', 1)">＋</button>
          </div>
        </div>
      </div>
      <div class="text-end" style="min-width:120px">
        <div class="fw-bold">${formatMoney(it.price * it.qty)}</div>
        <button class="btn btn-sm btn-outline-danger mt-2" onclick="removeFromCart('${k}')">
          <i class="fa-solid fa-trash"></i> Eliminar
        </button>
      </div>
    `;
    itemsDiv.appendChild(item);
  });

  document.getElementById('cartTotal').textContent = formatMoney(total);
  updateCartCount();
}

/* ---------- modificar cantidad / eliminar ---------- */
function changeQty(id, delta){
  if(!cart[id]) return;
  cart[id].qty += delta;
  if(cart[id].qty <= 0) delete cart[id];
  saveCart();
  renderCart();
}

function removeFromCart(id){
  if(!cart[id]) return;
  if(confirm(`¿Eliminar "${cart[id].title}" del carrito?`)){
    delete cart[id];
    saveCart();
    renderCart();
    updateCartCount();
  }
}

function clearCart(){ if(confirm('Vaciar carrito?')){ cart = {}; saveCart(); renderCart(); } }

function checkout(){
  const total = Object.values(cart).reduce((s,i)=> s + (i.price * i.qty), 0);
  if(total <= 0){ alert('Tu carrito está vacío.'); return; }
  if(confirm(`Total: ${formatMoney(total)}\n¿Deseas confirmar y coordinar por WhatsApp?`)){
    const lines = Object.values(cart).map(i=> `${i.qty} x ${i.title} - ${formatMoney(i.price*i.qty)}\nImagen: ${i.selectedImage || 'sin imagen'}`);
    lines.push(`Total: ${formatMoney(total)}`);
    const text = encodeURIComponent(`Hola Boutique S&M, quiero confirmar mi pedido:\n${lines.join('\n')}\n\nDirección: [tu dirección]\nNombre: [tu nombre]\nTel: [tu teléfono]`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    cart = {}; saveCart(); renderCart();
    // cerrar modal carrito si está abierto
    const modalEl = document.getElementById('cartModal');
    const bm = bootstrap.Modal.getInstance(modalEl);
    if(bm) bm.hide();
  }
}

/* ---------- WHATSAPP RÁPIDO (producto desde modal) ---------- */
function openWhatsAppProduct(title, selectedImageUrl = null){
  const imageLine = selectedImageUrl ? `\nImagen: ${selectedImageUrl}` : '';
  const text = encodeURIComponent(`Hola, quisiera información sobre: ${title}${imageLine}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

/* ---------- RATINGS (localStorage) ---------- */
function _loadRatingsStore() { return JSON.parse(localStorage.getItem('sm_ratings') || '{}'); }
function _saveRatingsStore(store) { localStorage.setItem('sm_ratings', JSON.stringify(store)); }
function getProductRatingInfo(productId){
  const store = _loadRatingsStore();
  const rec = store[productId];
  if(!rec) return { avg: 0, count: 0 };
  return { avg: rec.count ? rec.sum / rec.count : 0, count: rec.count };
}
function saveProductRating(productId, rating){
  if(rating < 1 || rating > 5) return;
  const store = _loadRatingsStore();
  if(!store[productId]) store[productId] = { sum: 0, count: 0 };
  store[productId].sum += rating;
  store[productId].count += 1;
  _saveRatingsStore(store);
}

/* ---------- QUICK VIEW (modal con carousel) ---------- */
/* ---------- QUICK VIEW (modal con carousel) ---------- */
function openQuickView(id){
  const p = initialProducts.find(x=> x.id === id);
  if(!p) { console.warn('openQuickView: producto no encontrado', id); return; }

  // nodos
  const modalEl = document.getElementById('quickViewModal');
  const imagesDiv = document.getElementById('quickViewImages');
  const titleEl = document.getElementById('qvTitle');
  const catEl = document.getElementById('qvCategory');
  const priceEl = document.getElementById('qvPrice');
  const descEl = document.getElementById('qvDesc');
  const starsEl = document.getElementById('qvStars');
  const ratingInfoText = document.getElementById('qvRatingInfo');
  let addBtn = document.getElementById('qvAddBtn');
  let whatsBtn = document.getElementById('qvWhatsBtn');

  if(!modalEl || !imagesDiv || !titleEl || !priceEl || !descEl || !addBtn || !whatsBtn){
    console.error('openQuickView: faltan elementos del modal');
    return;
  }

  titleEl.textContent = p.title || '';
  catEl.textContent = p.category || '';
  priceEl.textContent = p.price ? formatMoney(p.price) : '';
  descEl.textContent = p.desc || '';

  // imágenes (array o string)
  const imgs = (p.images && Array.isArray(p.images) && p.images.length) ? p.images.slice() : (p.image ? [p.image] : ['https://via.placeholder.com/800x600.png?text=Sin+imagen']);
  const carouselId = `qvCarousel-${p.id}`;

  // reset estado quick view
  window.currentQuickViewId = p.id;
  window.currentQuickViewImageIndex = 0;

  // render carrusel bootstrap
  imagesDiv.innerHTML = `
    <div id="${carouselId}" class="carousel slide">
      <div class="carousel-inner">
        ${imgs.map((img, idx) => `
          <div class="carousel-item ${idx === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100 rounded" alt="Producto ${idx + 1}">
          </div>
        `).join('')}
      </div>
      ${imgs.length > 1 ? `
        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      ` : ''}
    </div>
  `;

  // ratings
  const ratingInfo = getProductRatingInfo(id);
  if(starsEl){
    starsEl.innerHTML = '';
    for(let i = 1; i <= 5; i++){
      const star = document.createElement('span');
      star.style.cursor = 'pointer';
      star.style.fontSize = '1.3rem';
      star.style.marginRight = '4px';
      star.textContent = i <= Math.round(ratingInfo.avg) ? '⭐' : '☆';
      star.onclick = () => {
        saveProductRating(id, i);
        openQuickView(id);
      };
      starsEl.appendChild(star);
    }
  }
  if(ratingInfoText) ratingInfoText.textContent = ratingInfo.count > 0 ? `${ratingInfo.avg.toFixed(1)}/5 (${ratingInfo.count} calificaciones)` : 'Sin calificaciones aún';

  // botones
  addBtn.onclick = () => {
    addToCart(p.id, p.title, p.price, p.image || imgs[0]);
  };
  whatsBtn.onclick = () => {
    const selectedImg = imgs[window.currentQuickViewImageIndex] || imgs[0];
    openWhatsAppProduct(p.title, selectedImg);
  };

  // abrir modal
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

/* ---------- UTIL: scroll a sección ---------- */
function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return window.scrollTo({ top: 0, behavior: 'smooth' });
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}
// ...existing code...

/* ---------- UTIL: scroll a sección ---------- */
function scrollToSection(id){
  const el = document.getElementById(id);
  if(!el) return window.scrollTo({ top: 0, behavior: 'smooth' });
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
}

/* ---------- Actualizar display de paginación ---------- */
function updatePaginationDisplay(){
  const totalPages = Math.max(1, Math.ceil(filtered.length / PRODUCTS_PER_PAGE));
  const pageNumEl = document.getElementById('pageNumbers');
  if(pageNumEl) pageNumEl.textContent = `Página ${page} de ${totalPages}`;
}