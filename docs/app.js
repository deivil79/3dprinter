/* LayerLab · sin frameworks, sin servicios externos ni cobros. */
"use strict";
const PRODUCTS = [
  {
    "id": "key",
    "name": "Llavero Sevilla 3D",
    "category": "Sevilla",
    "price": 5.5,
    "bg": "#e7dcff",
    "tag": "MODO SEVILLA",
    "description": "La Giralda y tu nombre para la mochila o las llaves. Un recuerdo con rollo."
  },
  {
    "id": "stand",
    "name": "Stand modo estudio",
    "category": "Estudio",
    "price": 8.9,
    "bg": "#d9f4e8",
    "tag": "MUY ÚTIL",
    "description": "El móvil en su sitio para estudiar, ver apuntes o hacer videollamadas."
  },
  {
    "id": "fidget",
    "name": "Fidget de bolsillo",
    "category": "Regalos",
    "price": 5.9,
    "bg": "#e1dbff",
    "tag": "TOP ANTIESTRÉS",
    "description": "Un gadget articulado para llevar en el bolsillo y tener las manos entretenidas."
  },
  {
    "id": "cable",
    "name": "Cable Buddy",
    "category": "Estudio",
    "price": 3.5,
    "bg": "#ffe2d6",
    "tag": "ADIÓS ENREDOS",
    "description": "Clips para ordenar cargadores y auriculares en el escritorio."
  },
  {
    "id": "bookmark",
    "name": "Marcapáginas Giralda",
    "category": "Sevilla",
    "price": 4.9,
    "bg": "#fff0c5",
    "tag": "DE SEVILLA",
    "description": "Un guiño a la Giralda para acompañar libros, cómics y apuntes."
  },
  {
    "id": "creature",
    "name": "Mini criatura kawaii",
    "category": "Regalos",
    "price": 8.9,
    "bg": "#f8dceb",
    "tag": "ADORABLE",
    "description": "Una criatura original para decorar tu mesa o regalar a alguien."
  },
  {
    "id": "pencil",
    "name": "Portalápices Triana",
    "category": "Estudio",
    "price": 11.9,
    "bg": "#e6dcff",
    "tag": "ESCRITORIO PRO",
    "description": "Para bolis, rotuladores y subrayadores, con diseño inspirado en azulejos."
  },
  {
    "id": "notebook",
    "name": "Clips para apuntes",
    "category": "Estudio",
    "price": 3.9,
    "bg": "#fff0d6",
    "tag": "PACK ESTUDIO",
    "description": "Sujeta hojas, separa temas y pon un toque de color a tus cuadernos."
  },
  {
    "id": "headset",
    "name": "Soporte para cascos",
    "category": "Gaming",
    "price": 13.9,
    "bg": "#d7e6ff",
    "tag": "SETUP GAMER",
    "description": "Tus auriculares siempre a mano y tu mesa un poquito más ordenada."
  },
  {
    "id": "gamepad",
    "name": "Base para mando",
    "category": "Gaming",
    "price": 9.9,
    "bg": "#ded7ff",
    "tag": "MODO GAMING",
    "description": "Una base para tu mando que combina con tu setup. Sin logos ni marcas."
  },
  {
    "id": "basket",
    "name": "Mini canasta de mesa",
    "category": "Deporte",
    "price": 12.9,
    "bg": "#ffe4ce",
    "tag": "TIRO GANADOR",
    "description": "Baloncesto de escritorio para las pausas, inspirado en tardes de cancha."
  },
  {
    "id": "football",
    "name": "Mini trofeo futbolero",
    "category": "Deporte",
    "price": 9.9,
    "bg": "#dbf2df",
    "tag": "FÚTBOL SEVILLANO",
    "description": "Un trofeo con el nombre de tu equipo de amigos. Sin escudos oficiales."
  },
  {
    "id": "fan",
    "name": "Soporte para abanico",
    "category": "Sevilla",
    "price": 8.9,
    "bg": "#ffe1cc",
    "tag": "FERIA VIBES",
    "description": "Un soporte decorativo para lucir el abanico en casa después de la Feria."
  },
  {
    "id": "tile",
    "name": "Pin azulejo de Triana",
    "category": "Sevilla",
    "price": 5.5,
    "bg": "#dceaff",
    "tag": "ESTILO TRIANA",
    "description": "Geometrías inspiradas en la cerámica trianera para mochila o estuche."
  },
  {
    "id": "funko",
    "name": "Mini Bécquer · figura pop",
    "category": "Personalizados",
    "price": 24.9,
    "bg": "#f2ddec",
    "tag": "TU MINI-YO",
    "description": "Ejemplo: el poeta sevillano Bécquer en versión cabezona 3D. ¡Personalízala con otra persona! Figura original, no oficial."
  },
  {
    "id": "badge",
    "name": "Pin para tu mochila",
    "category": "Personalizados",
    "price": 4.5,
    "bg": "#e7e2ff",
    "tag": "TÚ ELIGES",
    "description": "Inicial, apodo o símbolo para ponerle personalidad a tu mochila o estuche."
  }
];
const COLORS=[{name:"Lila",hex:"#ad8afa"},{name:"Verde lima",hex:"#c9ed59"},{name:"Negro",hex:"#302d38"},{name:"Blanco",hex:"#eeeae4"},{name:"Coral",hex:"#f79a77"},{name:"Azul",hex:"#80b8f3"}];
const euro=n=>new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"}).format(n);
const byId=id=>document.getElementById(id);
const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let cart=loadCart(),activeFilter="Todos",lastFocus=null,toastTimer,detailConfig=null;
function loadCart(){try{const v=JSON.parse(localStorage.getItem("layerlab-cart-v2")||"[]");if(!Array.isArray(v))return [];return v.filter(i=>PRODUCTS.some(p=>p.id===i.id)&&Number.isInteger(i.qty)&&i.qty>0&&i.qty<100).slice(0,35).map(i=>({id:i.id,qty:i.qty,color:COLORS.some(c=>c.name===i.color)?i.color:"Lila",note:typeof i.note==="string"?i.note.slice(0,240):""}))}catch{return []}}
function saveCart(){try{localStorage.setItem("layerlab-cart-v2",JSON.stringify(cart))}catch{}byId("cartCount").textContent=String(cart.reduce((n,i)=>n+i.qty,0))}
function art(id){const p=PRODUCTS.find(x=>x.id===id);return '<img class="product-illustration" src="./assets/'+encodeURIComponent(id)+'.svg" alt="'+safe(p?'Ilustración conceptual de '+p.name:'Diseño de impresión 3D')+'" loading="lazy" decoding="async" width="400" height="330">'}
const filters=["Todos","Estudio","Sevilla","Gaming","Deporte","Personalizados","Regalos"];
function renderProducts(){byId("filters").innerHTML=filters.map(f=>'<button type="button" class="filter '+(f===activeFilter?"active":"")+'" data-filter="'+safe(f)+'" aria-pressed="'+(f===activeFilter)+'">'+safe(f)+'</button>').join("");const query=(byId("catalogSearch")?.value||"").toLocaleLowerCase("es");const list=PRODUCTS.filter(p=>(activeFilter==="Todos"||p.category===activeFilter)&&(!query||(p.name+" "+p.description+" "+p.category).toLocaleLowerCase("es").includes(query)));byId("results").textContent=list.length+" diseños";byId("productGrid").innerHTML=list.map((p,i)=>'<article class="product-card"><div class="product-image" style="background:'+p.bg+'"><span class="product-tag">'+safe(p.tag)+'</span>'+art(p.id)+'<span class="image-index">0'+(i+1)+' / 0'+list.length+'</span></div><div class="product-info"><p class="product-cat">'+safe(p.category)+'</p><h3>'+safe(p.name)+'</h3><p class="product-desc">'+safe(p.description)+'</p><div class="product-bottom"><div class="product-price">'+euro(p.price)+'<small>Precio orientativo</small></div><button class="add-button" type="button" aria-label="Personalizar '+safe(p.name)+'" data-product="'+p.id+'">+</button></div></div></article>').join("") || '<div class="no-results"><strong>No encontramos ese diseño.</strong><p>Prueba con otra palabra o pide tu propio objeto.</p><button class="button button-dark" type="button" id="noResultsCustom">Pedir algo a medida ↗</button></div>'}
function toast(message){const el=byId("toast");clearTimeout(toastTimer);el.textContent=message;el.classList.add("show");toastTimer=setTimeout(()=>el.classList.remove("show"),3200)}
function openDrawer(eyebrow,title,html){lastFocus=document.activeElement;byId("drawerEyebrow").textContent=eyebrow;byId("drawerTitle").textContent=title;byId("drawerBody").innerHTML=html;byId("drawerBackdrop").hidden=false;byId("drawer").setAttribute("aria-hidden","false");document.body.classList.add("lock");requestAnimationFrame(()=>{byId("drawerBackdrop").classList.add("visible");byId("drawer").classList.add("open");byId("closeDrawer").focus()})}
function closeDrawer(){byId("drawerBackdrop").classList.remove("visible");byId("drawer").classList.remove("open");byId("drawer").setAttribute("aria-hidden","true");byId("drawerBackdrop").hidden=true;document.body.classList.remove("lock");if(lastFocus&&typeof lastFocus.focus==="function")lastFocus.focus()}
function openDetail(id){const p=PRODUCTS.find(x=>x.id===id);if(!p)return;detailConfig={id,color:"Lila",qty:1};const figureExtra=id==="funko"?'<div class="figure-guide"><strong>✦ Ejemplo: Gustavo Adolfo Bécquer</strong><p>Hemos diseñado una figura cabezona del poeta sevillano. También puedes pedir la tuya o la de un amigo: indica peinado, ropa y accesorios. Figura cabezona tipo Funko Pop, de diseño original y no oficial.</p></div><label class="field-label" for="figurePerson">¿A quién representamos?</label><input class="field" id="figurePerson" maxlength="70" value="Gustavo Adolfo Bécquer" placeholder="Nombre o descripción de la persona">':"";const html='<div class="preview-card" style="background:'+p.bg+'">'+art(id)+'</div><p class="helper">'+safe(p.description)+'</p>'+figureExtra+'<label class="field-label">Elige un color</label><div class="detail-list" id="colorChoices">'+COLORS.map((c,i)=>'<button class="color-choice '+(i===0?'selected':'')+'" data-color="'+safe(c.name)+'" type="button" title="'+safe(c.name)+'" aria-label="'+safe(c.name)+'" aria-pressed="'+(i===0)+'"><span style="background:'+c.hex+'"></span></button>').join("")+'</div><span class="choice-label" id="selectedColor">Lila</span><label class="field-label" for="personalNote">Personalización (opcional)</label><input class="field" id="personalNote" type="text" maxlength="100" placeholder="'+(id==="funko"?"Peinado, ropa, aficiones y accesorios…":"Nombre, inicial, detalle especial…")+'"><label class="field-label" for="personalQty">Cantidad</label><input class="field" id="personalQty" type="number" min="1" max="20" value="1" inputmode="numeric"><div class="notice">Diseño y precio orientativos. Confirmaremos los detalles del encargo antes de imprimir.</div><button class="drawer-primary" type="button" id="addConfigured">Añadir a mi selección · '+euro(p.price)+'</button>';openDrawer("PERSONALIZA TU PIEZA",p.name,html)}
function addConfigured(){if(!detailConfig)return;const qty=Number(byId("personalQty").value);if(!Number.isInteger(qty)||qty<1||qty>20){toast("Elige entre 1 y 20 unidades");return}let note=byId("personalNote").value.trim().slice(0,140);if(detailConfig.id==="funko"){const persona=byId("figurePerson")?.value.trim().slice(0,70);if(!persona){toast("Cuéntanos quién será el personaje");return}note="Personaje: "+persona+(note?" · "+note:"")}const {id,color}=detailConfig;const existing=cart.find(i=>i.id===id&&i.color===color&&i.note===note);if(existing){existing.qty+=qty;if(existing.qty>99){toast("Límite de 99 unidades por artículo");return}}else cart.push({id,color,note,qty});saveCart();toast("¡Añadido! Tu selección está lista");openCart()}
function line(item,index){const p=PRODUCTS.find(x=>x.id===item.id);return '<div class="drawer-line"><div class="drawer-thumb" style="background:'+p.bg+'">'+art(p.id)+'</div><div class="drawer-line-content"><strong>'+safe(p.name)+'</strong><p>'+safe(item.color)+(item.note?' · '+safe(item.note):'')+'</p><strong>'+euro(p.price*item.qty)+'</strong><div class="line-actions"><div class="stepper"><button type="button" aria-label="Restar una unidad" data-decrease="'+index+'">−</button><span>'+item.qty+'</span><button type="button" aria-label="Sumar una unidad" data-increase="'+index+'">+</button></div><button class="line-remove" type="button" data-remove="'+index+'">Eliminar</button></div></div></div>'}
function openCart(){if(!cart.length){openDrawer("TU SELECCIÓN","Todavía hay sitio para una idea.",'<div class="empty-state"><div>✳</div><p>Aquí aparecerán tus piezas favoritas.</p><button class="drawer-primary" type="button" id="browseCatalog">Explorar catálogo ↗</button></div>');return}const total=cart.reduce((s,i)=>s+PRODUCTS.find(p=>p.id===i.id).price*i.qty,0);openDrawer("TU SELECCIÓN","Tus ideas en una bolsa.",cart.map(line).join("")+'<div class="cart-total"><span>Total orientativo</span><strong>'+euro(total)+'</strong></div><p class="helper">La selección se guarda únicamente en este navegador. No hay pago online ni se envía información automáticamente.</p><button class="drawer-primary" type="button" id="prepareOrder">Preparar solicitud de encargo ↗</button><button class="drawer-secondary" type="button" id="keepShopping">Seguir explorando</button>')}
function orderText(){const lines=["¡Hola! Me gustaría consultar este encargo de LayerLab:",""];cart.forEach((i,n)=>{const p=PRODUCTS.find(x=>x.id===i.id);lines.push((n+1)+". "+p.name+" · "+i.qty+" ud. · "+i.color+(i.note?" · "+i.note:""))});const sum=cart.reduce((s,i)=>s+PRODUCTS.find(p=>p.id===i.id).price*i.qty,0);lines.push("","Total orientativo: "+euro(sum),"","¿Podéis confirmarme precio, disponibilidad y entrega?","(Esta solicitud todavía no es una compra.)");return lines.join("\n")}
function readyShare(text,title){openDrawer("SOLICITUD PREPARADA",title,'<p class="helper">Puedes copiar este mensaje o compartirlo con David por tu canal habitual. No se enviará por sí solo.</p><div class="drawer-summary" id="orderSummary"></div><div class="share-grid"><button type="button" class="drawer-primary" id="copyRequest">Copiar texto</button><button type="button" class="drawer-secondary" id="shareRequest">Compartir ↗</button></div><div class="notice">Los pedidos y los pagos se acuerdan fuera de esta web. Este sitio no registra cuentas ni datos de clientes.</div>');byId("orderSummary").textContent=text;window.currentMessage=text}
async function copyMessage(){const str=window.currentMessage||"";try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(str)}else{const a=document.createElement("textarea");a.value=str;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();if(!document.execCommand("copy"))throw Error("No disponible");a.remove()}toast("Texto copiado. Ya puedes enviarlo.")}catch{toast("Selecciona y copia el texto del recuadro.")}}
async function shareMessage(){const text=window.currentMessage||"";if(navigator.share){try{await navigator.share({title:"Solicitud LayerLab",text})}catch(e){if(e.name!=="AbortError")toast("Prueba con el botón Copiar texto")}}else await copyMessage()}
function openCustom(){const html='<p class="helper">Cuéntanos lo que imaginas. Prepararemos un texto para que puedas compartir tu solicitud.</p><form id="customForm"><label class="field-label" for="ideaType">¿Qué te gustaría imprimir?</label><input id="ideaType" class="field" required maxlength="70" placeholder="Ej. soporte especial para auriculares"><label class="field-label" for="ideaDetails">Describe la idea</label><textarea id="ideaDetails" class="field text-field" required minlength="10" maxlength="600" placeholder="Forma, tamaño aproximado, detalles…"></textarea><label class="field-label" for="ideaColor">Color preferido</label><select id="ideaColor" class="field">'+COLORS.map(c=>'<option>'+safe(c.name)+'</option>').join("")+'</select><label class="field-label" for="ideaQty">Unidades</label><input class="field" id="ideaQty" type="number" min="1" max="20" value="1" required><button class="drawer-primary" type="submit">Preparar mi solicitud ↗</button></form><p class="helper">No subas información personal ni archivos sensibles. La web no almacena tu propuesta en ningún servidor.</p>';openDrawer("EL ESTUDIO DE IDEAS","Cuéntanos lo que imaginas.",html)}
function submitCustom(){const type=byId("ideaType").value.trim(),details=byId("ideaDetails").value.trim(),color=byId("ideaColor").value,qty=Number(byId("ideaQty").value);if(!type||details.length<10||!Number.isInteger(qty)||qty<1||qty>20){toast("Completa los detalles y la cantidad");return}const text=["¡Hola! Tengo una idea para imprimir en 3D:","","Idea: "+type,"Detalles: "+details,"Color: "+color,"Cantidad: "+qty+" ud.","","¿Podéis decirme si es posible y darme presupuesto?","(Esta solicitud todavía no es una compra.)"].join("\n");readyShare(text,"Tu idea, lista para compartir.")}
document.addEventListener("click",e=>{const el=e.target.closest("button");if(!el)return;if(el.dataset.filter){activeFilter=el.dataset.filter;renderProducts();return}if(el.dataset.product){openDetail(el.dataset.product);return}if(el.dataset.color&&detailConfig){detailConfig.color=el.dataset.color;document.querySelectorAll("[data-color]").forEach(b=>{b.classList.toggle("selected",b===el);b.setAttribute("aria-pressed",String(b===el))});byId("selectedColor").textContent=el.dataset.color;return}if(el.id==="addConfigured"){addConfigured();return}if(el.dataset.remove!==undefined){cart.splice(Number(el.dataset.remove),1);saveCart();openCart();return}if(el.dataset.increase!==undefined){const x=cart[Number(el.dataset.increase)];if(x.qty<99)x.qty++;saveCart();openCart();return}if(el.dataset.decrease!==undefined){const x=cart[Number(el.dataset.decrease)];x.qty--;if(x.qty<=0)cart.splice(Number(el.dataset.decrease),1);saveCart();openCart();return}if(el.id==="noResultsCustom"){openCustom();return}if(el.id==="browseCatalog"||el.id==="keepShopping"){closeDrawer();byId("productos").scrollIntoView({behavior:"smooth"});return}if(el.id==="prepareOrder"){readyShare(orderText(),"¡A un paso de crear!");return}if(el.id==="copyRequest"){void copyMessage();return}if(el.id==="shareRequest"){void shareMessage();return}});
document.addEventListener("submit",e=>{if(e.target.id==="customForm"){e.preventDefault();submitCustom()}});
byId("openCart").addEventListener("click",openCart);byId("customOpen").addEventListener("click",openCustom);byId("catalogSearch")?.addEventListener("input",renderProducts);byId("closeDrawer").addEventListener("click",closeDrawer);byId("drawerBackdrop").addEventListener("click",closeDrawer);document.addEventListener("keydown",e=>{if(e.key==="Escape"&&byId("drawer").classList.contains("open")){closeDrawer()}if(e.key==="Tab"&&byId("drawer").classList.contains("open")){const focusable=[...byId("drawer").querySelectorAll("button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),a[href]")].filter(x=>x.offsetParent!==null);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
saveCart();renderProducts();