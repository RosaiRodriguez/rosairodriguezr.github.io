(() => {
  const raiz = document.documentElement;
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const raton = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];

  /* ---------- Textos en inglés ---------- */
  const EN = {
    intro: 'Administration, operations and data', saltar: 'Skip to projects',
    m1: 'About', m2: 'Projects', m3: 'Experience', m4: 'CV', m5: 'Contact', bcv: 'Download CV',
    i0: 'Home', i1: 'About', i2: 'Projects', i3: 'How I work', i4: 'Experience', i5: 'CV', i6: 'Contact',
    gira1: 'I organise', gira2: 'so the team knows what to do first.', vp: 'See projects', dcv: 'Download CV',
    nota1: 'Granada, Spain', nota2: 'Excel, Power BI and n8n', nota3: 'Learning Python and SQL', abrir_menu: '',
    's-et': 'About me',
    's-rev': 'Before opening a spreadsheet I ask what decision those numbers need to support. I worked in administration at a sewing school and then at a shop, handling orders, payments and sales reports. Both places had the same problem, information scattered across chats and loose sheets, and people losing their mornings looking for it. That is where my projects come from.',
    d1: 'complete projects, each with a report and files', d2: 'nodes in my largest automation', d3: 'rows of official data cleaned and checked', d4: 'to answer an enquiry, at any time of day',
    'p-et': 'Projects', 'p-tit': 'Real business problems, solved with tools a small company already has.',
    'p-av': 'Four use sample data and one uses public data from Spain’s statistics office. None of them is in use at the businesses shown.',
    'bl-b1': 'Good morning. Today you should message <b>6 customers</b>.', 'bl-b2': 'Birthday on Friday', 'bl-b2b': 'Message written with AI',
    'bl-env': 'Sent', 'bl-com': 'Bought', 'bl-b4': 'Sale saved, €42.90', 'bl-g': 'Purchases by reason',
    'bl-m1': 'Birthday', 'bl-m2': 'New in', 'bl-m3': 'Stock', 'bl-m4': 'Win back', nodos: 'nodes',
    'bl-t': 'Knowing every morning which customers to message, and what to say',
    'bl-p': 'A small shop loses sales that were one message away. I built a Telegram bot from scratch that picks up to six customers each morning, drafts the message with AI and records whether they bought. A Power BI report shows which reason sells best.',
    inf: 'Read the report', res: 'Summary', flu: 'n8n flows',
    'sol-f': 'Ask for information', 'sol-n': 'Name', 'sol-c': 'Course', 'sol-i': 'Start', 'sol-iv': 'In 3 months', 'sol-e': 'Send',
    'sol-co': 'Course information', 'sol-p': 'High priority, call today', correo: 'Email',
    'sol-t': 'Nobody left waiting for an answer',
    'sol-tx': 'If a question about a course takes too long to answer, that person signs up somewhere else. With n8n every enquiry is logged, duplicates are stopped and the person gets the course details in about 9 seconds. The school knows who to call first.',
    'coy-h': 'What to move today', 'coy-r': 'Ready for pickup', 'coy-p': 'Waiting for a part', 'coy-t': 'Unpaid, sitting in the shop',
    'coy-tt': 'Which order to move first',
    'coy-tx': 'Orders at a computer shop came in over the counter, WhatsApp, phone and Instagram, and nobody saw the full picture. I cleaned the log with Power Query and built an Excel tracker that shows in one minute what is late, why, and how much money is waiting.',
    lu: 'Mo', ma: 'Tu', mi: 'We', ju: 'Th', vi: 'Fr', 'nr-ch': '2 timetable clashes', 'nr-a': 'Attendance',
    'nr-t': 'Letting the school know in a minute who to call',
    'nr-tx': 'In a small school every drop-out is a fee that stops coming in. I brought groups, enrolments and attendance into one Excel file that flags who is missing classes, which places are still free and which timetable changes clash.',
    'nat-g': 'Births in Granada', 'nat-p': 'Andalusia', 'nat-4': 'Granada, 4th',
    'nat-t': '23% fewer babies are born in Granada than in 2016',
    'nat-tx': 'That figure drives nursery places, primary classrooms and where a family shop opens. I turned 17,280 rows of official data into a Power BI report anyone can filter by province, year, sex or mother’s age.',
    'me-et': 'How I work', 'me-t': 'Four steps, always in the same order',
    me1: 'Ask', me1t: 'Which decision needs to be made and who makes it. Without that, any table is noise.',
    me2: 'Organise', me2t: 'I bring scattered information together, remove duplicates and keep one version of the data.',
    me3: 'Automate', me3t: 'What repeats every day is done by a machine, so the team can talk to people.',
    me4: 'Measure', me4t: 'A dashboard that shows whether it worked, in numbers anyone understands.',
    'tr-et': 'Experience', 'tr-t': 'From administration to data',
    h1f: 'Sep 2024 – Sep 2026', h1t: 'Sales and administration', h1l: 'Coyote Store, Santa Marta, remote since 2025',
    h1x: 'End-to-end orders, repairs and special requests, outstanding payments, supplier issues, cash reconciliation and sales reports.',
    h2t: 'Master’s in Business Process Management and Technologies', h2l: 'University of Granada',
    h3f: 'Jan 2022 – Jul 2024', h3t: 'Administrative assistant', h3l: 'NR Pattern Making and Sewing School, Santa Marta',
    h3x: 'Timetables, groups and activities, administrative records in Excel and improvements to the curriculum.',
    h4t: 'Degree in Business Administration', h4l: 'Universidad del Magdalena, Colombia',
    'cu-t': 'Udemy courses', encurso: 'In progress', hecho: 'Done',
    cu3: 'Operations Management, Process Analysis', cu4: 'Management Accounting, Activity-Based Costing',
    'cv-et': 'CV', 'cv-t': 'All of this, on one page', 'cv-p': 'A simple format, ready to print or attach to an application. Written in Spanish.',
    'cv-b1': 'Download PDF', 'cv-b2': 'Open in the browser',
    m6: 'Tools', i7: 'Tools',
    bio1: 'I have a degree in Business Administration from Universidad del Magdalena in Colombia and a Master\u2019s in Business Process Management and Technologies from the University of Granada, the city where I live.',
    bio2: 'I have never stopped studying because I like to understand how things work on the inside. Right now I am learning Python and SQL, to go further with the data I already know how to organise in Excel and Power BI.',
    bio3: 'I am looking for an administration, operations or sales support team where I can bring order and suggest improvements from day one.',
    bio4: 'The ロサ stamp next to my photo is my name written in Japanese. I am very interested in Japanese culture, especially the care it puts into details.',
    'ra-t': 'How I work with others', 'ra-s': '(hover or tap a card)',
    r1: 'Teamwork', r1b: 'I grew up with three sisters. Sharing tasks, giving way and reaching agreements came long before any job.',
    r2: 'I like a challenge', r2b: 'In my latest project I built a Telegram bot from scratch and connected it to AI and Power BI. If I don\u2019t know how to do something, I learn it.',
    r3: 'Always learning', r3b: 'Degree in 2024, master\u2019s in 2026 and now Python and SQL. Whatever I learn, I try straight away in a project.',
    r4: 'Warm and approachable', r4b: 'I am cheerful and spontaneous, which shows when looking after a customer or working with other people.',
    'he-et': 'Tools', 'he-t': 'My toolbox', 'he-s': 'Tap a tool to see how I use it and which project it appears in.',
    co1: 'Got a process', co2: 'that could work better?', 'co-p': 'Write to me and I’ll tell you how I would approach it.',
    'co-b1': 'Copy my email', 'co-b2': 'Email me', guino: 'Thanks for scrolling all the way down.'
  };
  const PALABRAS = { es: ['pedidos', 'matrículas', 'cobros', 'clientas', 'datos'], en: ['orders', 'enrolments', 'payments', 'customers', 'data'] };
  const TXT = {
    es: { hola: ['Buenos días, soy', 'Buenas tardes, soy', 'Buenas noches, soy'], copiado: 'Correo copiado. Te leo pronto.', guino: 'Gracias por llegar hasta aquí. Casi nadie lee un portafolio entero.', mover: 'Mover', ordenar: 'Ordenar', abrir: 'Abrir', correo: 'Correo' },
    en: { hola: ['Good morning, I’m', 'Good afternoon, I’m', 'Good evening, I’m'], copiado: 'Email copied. Talk soon.', guino: 'Thanks for scrolling all the way down. Hardly anyone reads a whole portfolio.', mover: 'Move', ordenar: 'Sort', abrir: 'Open', correo: 'Email' }
  };
  let idioma = 'es';
  try { if (localStorage.getItem('idioma') === 'en') idioma = 'en'; } catch (e) {}
  const ES = {};
  $$('[data-i18n]').forEach(el => { ES[el.dataset.i18n] = ES[el.dataset.i18n] || el.innerHTML; });

  function saludo() {
    const h = new Date().getHours();
    $('#hola').textContent = TXT[idioma].hola[h >= 6 && h < 13 ? 0 : h >= 13 && h < 21 ? 1 : 2];
  }
  function ponerIdioma(l) {
    idioma = l; raiz.lang = l;
    $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; const v = l === 'en' ? EN[k] : ES[k]; if (v !== undefined) el.innerHTML = v; });
    $('#idioma').setAttribute('aria-label', l === 'en' ? 'Cambiar idioma a español' : 'Change language to English');
    $('#menu-btn').setAttribute('aria-label', l === 'en' ? 'Open menu' : 'Abrir menú');
    saludo(); partirRevela(); iPal = 0; letra = 0; borrando = false;
    if ($('#guino').classList.contains('visto')) $('#guino').textContent = TXT[l].guino;
    try { localStorage.setItem('idioma', l); } catch (e) {}
    if (typeof mostrarHerr === 'function' && document.querySelector('#h-nombre').textContent) { mostrarHerr(hActual); etiquetaTema(); }
  }
  $('#idioma').addEventListener('click', () => ponerIdioma(idioma === 'es' ? 'en' : 'es'));

  /* ---------- Firma: ajustar el dibujo a su tamaño ---------- */
  function prepararFirma(svg) {
    const b = svg.getBBox();
    svg.setAttribute('viewBox', `${b.x - 20} ${b.y - 20} ${b.width + 40} ${b.height + 40}`);
    svg.querySelectorAll('path').forEach((p, i) => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.style.setProperty('--i', i); });
  }
  ['#firma-intro', '#firma-pie'].forEach(s => prepararFirma($(s)));
  $$('#firma-pie path').forEach(p => { p.style.strokeDashoffset = 0; p.style.fill = 'currentColor'; p.style.strokeWidth = 0; });

  /* ---------- Entrada con firma ---------- */
  const intro = $('#intro');
  function quitarIntro() { intro.classList.add('fuera'); document.body.classList.remove('cargando'); setTimeout(() => intro.remove(), 1000); }
  if (quieto) { intro.remove(); document.body.classList.remove('cargando'); }
  else {
    requestAnimationFrame(() => $('#firma-intro').classList.add('escribe'));
    setTimeout(quitarIntro, 2900);
    intro.addEventListener('click', quitarIntro);
  }

  /* ---------- Palabra que va cambiando ---------- */
  const pal = $('#palabra'); let iPal = 0, letra = 0, borrando = false;
  function escribir() {
    const lista = PALABRAS[idioma]; const w = lista[iPal % lista.length];
    if (!borrando) { letra++; if (letra > w.length) { borrando = true; return setTimeout(escribir, 1600); } }
    else { letra--; if (letra === 0) { borrando = false; iPal++; } }
    pal.textContent = w.slice(0, letra) || '​';
    setTimeout(escribir, borrando ? 45 : 90);
  }
  if (quieto) pal.textContent = PALABRAS.es[0]; else escribir();

  /* ---------- Texto que se ilumina al bajar ---------- */
  const rev = $('#revela');
  function partirRevela() { rev.innerHTML = rev.textContent.trim().split(/\s+/).map(w => `<span class="pal">${w}</span> `).join(''); }
  partirRevela();

  /* ---------- Contadores ---------- */
  function contar(el) {
    const fin = +el.dataset.cuenta, suf = el.dataset.suf || '', miles = el.dataset.miles; const t0 = performance.now();
    (function paso(t) {
      const k = Math.min(1, (t - t0) / 1600), v = Math.round(fin * (1 - Math.pow(1 - k, 3)));
      el.textContent = (miles ? v.toLocaleString(idioma === 'en' ? 'en' : 'es-ES', { useGrouping: true }).replace(/,/g, idioma === 'en' ? ',' : '.') : v) + suf;
      if (k < 1) requestAnimationFrame(paso);
    })(t0);
  }

  /* ---------- Apariciones ---------- */
  $$('.datos-sobre .dato, .proy-cab, .texto-p, .paso, .hito, .cursos, .cv-texto, .hoja, .contacto h2, .contacto p').forEach(el => el.classList.add('sube'));
  const obs = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    el.classList.add('dentro', 'visto');
    el.querySelectorAll?.('[data-cuenta]').forEach(contar);
    if (el.matches('[data-cuenta]')) contar(el);
    if (el.classList.contains('proyecto')) alVer(el);
    obs.unobserve(el);
  }), { threshold: .25 });
  $$('.sube, .proyecto, .datos-sobre').forEach(el => obs.observe(el));

  function alVer(p) {
    if (p.querySelector('#reloj')) { let s = 0; const r = $('#reloj'); setTimeout(() => { const iv = setInterval(() => { r.textContent = ++s; if (s >= 9) clearInterval(iv); }, 300); }, 300); }
    if (p.querySelector('#pedidos')) setTimeout(() => ordenarPedidos(true), 900);
  }

  /* ---------- Pedidos que se ordenan solos ---------- */
  const peds = $$('#pedidos .ped');
  function colocar(orden) { orden.forEach((el, i) => el.style.top = (44 + i * 62) + 'px'); }
  colocar(peds);
  let ordenado = false;
  function ordenarPedidos(ok) { ordenado = ok; colocar(ok ? [...peds].sort((a, b) => a.dataset.orden - b.dataset.orden) : peds); }
  $('#pedidos').closest('.ilustra').addEventListener('click', () => ordenarPedidos(!ordenado));

  /* ---------- Copiar correo ---------- */
  const aviso = $('#aviso'); let ta;
  $('#copiar').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText('rosaiselar012@gmail.com'); aviso.textContent = TXT[idioma].copiado; aviso.classList.add('ver'); clearTimeout(ta); ta = setTimeout(() => aviso.classList.remove('ver'), 2600); }
    catch (e) { location.href = 'mailto:rosaiselar012@gmail.com'; }
  });

  /* ---------- Guiño del final ---------- */
  new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const g = $('#guino'); g.classList.add('visto'); g.textContent = TXT[idioma].guino; } }), { threshold: 1 }).observe($('#guino'));

  /* ---------- Índice con la cajita, progreso, barra, líneas ---------- */
  const enlacesI = $$('.indice a'), caja = $('#caja'), indice = $('#indice');
  const secciones = enlacesI.map(a => $(a.getAttribute('href')));
  const menu = $$('.menu a');
  let ultimoY = 0;
  function alBajar() {
    const y = scrollY, H = document.documentElement.scrollHeight - innerHeight;
    $('#progreso').style.height = (y / H * 100) + '%';
    indice.classList.toggle('visible', $('#sobre-mi').getBoundingClientRect().top < innerHeight * .35);
    let act = 0; secciones.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .45) act = i; });
    enlacesI.forEach((a, i) => a.classList.toggle('actual', i === act));
    const a = enlacesI[act]; caja.style.transform = `translateY(${a.offsetTop}px)`; caja.style.width = a.offsetWidth + 'px';
    const pr = $('#proyectos').getBoundingClientRect(); const mitad = innerHeight / 2;
    indice.classList.toggle('sobre-oscuro', pr.top < mitad && pr.bottom > mitad);
    menu.forEach(m => m.classList.toggle('actual', secciones[act] && m.getAttribute('href') === '#' + secciones[act].id));
    $('#barra').classList.toggle('escondida', y > ultimoY && y > 300 && !document.body.classList.contains('menu-abierto')); ultimoY = y;
    // texto que se ilumina
    const r = rev.getBoundingClientRect(); const k = Math.min(1, Math.max(0, (innerHeight * .85 - r.top) / (r.height + innerHeight * .35)));
    const ps = rev.querySelectorAll('.pal'); const n = Math.floor(k * ps.length); ps.forEach((p, i) => p.classList.toggle('on', i < n));
    // línea de pasos
    const pa = $('#pasos').getBoundingClientRect(); const kp = Math.min(1, Math.max(0, (innerHeight * .7 - pa.top) / (pa.height + 100)));
    $('#hilo').style.width = (kp * 100) + '%';
    $$('.paso').forEach((p, i) => p.classList.toggle('on', kp > i / 4 + .05));
    // eje de la trayectoria
    const lt = $('#linea-t').getBoundingClientRect(); const kt = Math.min(1, Math.max(0, (innerHeight * .6 - lt.top) / lt.height));
    $('#eje').style.height = (kt * 100) + '%';
    $$('.hito').forEach(h => h.classList.toggle('on', h.getBoundingClientRect().top < innerHeight * .6));
    // ola
    const t = y * .004; $('#ola').setAttribute('d', `M0 60 C240 ${20 + Math.sin(t) * 25} 480 ${100 - Math.sin(t) * 25} 720 60 C960 ${20 + Math.cos(t) * 25} 1200 ${100 - Math.cos(t) * 25} 1440 60 L1440 120 L0 120 Z`);
  }
  addEventListener('scroll', () => requestAnimationFrame(alBajar), { passive: true });
  addEventListener('resize', alBajar);

  /* ---------- Inclinación suave y fondo con profundidad (el cursor no se toca) ---------- */
  if (raton && !quieto) {
    $$('.inclina').forEach(el => {
      el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`; });
      el.addEventListener('pointerleave', () => el.style.transform = '');
    });
    const capas = $$('.decor .capa');
    let px = 0, py = 0;
    addEventListener('pointermove', e => { px = e.clientX / innerWidth - .5; py = e.clientY / innerHeight - .5; mover(); }, { passive: true });
    function mover() { const y = Math.min(scrollY, innerHeight); capas.forEach(c => { const k = +c.dataset.p; c.style.transform = `translate(${px * k}px, ${py * k - y * k / 120}px)`; }); }
    addEventListener('scroll', mover, { passive: true });
  }

  /* ---------- Menú del móvil ---------- */
  const mb = $('#menu-btn'), mm = $('#menu-movil');
  function cerrarMenu() { mb.setAttribute('aria-expanded', 'false'); mm.classList.remove('abierto'); document.body.classList.remove('menu-abierto'); setTimeout(() => { if (!mm.classList.contains('abierto')) mm.hidden = true; }, 300); }
  mb.addEventListener('click', () => {
    if (mm.classList.contains('abierto')) return cerrarMenu();
    mm.hidden = false; requestAnimationFrame(() => mm.classList.add('abierto'));
    mb.setAttribute('aria-expanded', 'true'); document.body.classList.add('menu-abierto');
  });
  mm.querySelectorAll('a').forEach(a => a.addEventListener('click', cerrarMenu));
  addEventListener('keydown', e => { if (e.key === 'Escape' && mm.classList.contains('abierto')) cerrarMenu(); });

  /* ---------- Modo claro y oscuro ---------- */
  const btnTema = $('#tema');
  function etiquetaTema() { const osc = raiz.dataset.tema === 'oscuro'; btnTema.setAttribute('aria-label', idioma === 'en' ? (osc ? 'Switch to light mode' : 'Switch to dark mode') : (osc ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')); }
  btnTema.addEventListener('click', () => {
    raiz.dataset.tema = raiz.dataset.tema === 'oscuro' ? 'claro' : 'oscuro';
    try { localStorage.setItem('tema', raiz.dataset.tema); } catch (e) {}
    etiquetaTema();
  });
  etiquetaTema();

  /* ---------- Tarjetas que giran (también al tocar) ---------- */
  $$('.rasgo').forEach(r => r.addEventListener('click', () => r.classList.toggle('girada')));

  /* ---------- Caja de herramientas ---------- */
  const PROY = { bl: ['proy-bl', 'Asistente comercial', 'Sales assistant'], sol: ['proy-sol', 'Solicitudes automáticas', 'Automatic enquiries'], coy: ['proy-coy', 'Control de pedidos', 'Order tracking'], nr: ['proy-nr', 'Gestión académica', 'School admin'], nat: ['proy-nat', 'Natalidad en Granada', 'Births in Granada'] };
  const HERR = {
    excel: { n: 'Excel', nivel: ['La uso a diario', 'I use it every day'], que: ['La hoja de cálculo de siempre, y casi siempre la herramienta que ya tiene una empresa.', 'The classic spreadsheet, and almost always the tool a company already has.'], uso: ['Monto controles con fórmulas y formato condicional que señalan solos lo que va tarde, lo que falta por cobrar o quién está faltando a clase.', 'I build trackers with formulas and conditional formatting that flag what is late, what is unpaid or who is missing classes.'], p: ['coy', 'nr', 'bl'] },
    pq: { n: 'Power Query', nivel: ['En proyectos', 'Used in projects'], que: ['Está dentro de Excel y Power BI. Sirve para limpiar y unir datos con pasos que se repiten solos.', 'Built into Excel and Power BI. It cleans and combines data with steps that repeat themselves.'], uso: ['Quito espacios, unifico mayúsculas y elimino duplicados una vez. La próxima vez que llegan datos nuevos, basta con actualizar.', 'I remove spaces, fix capitals and drop duplicates once. Next time new data arrives, one refresh is enough.'], p: ['coy', 'nr'] },
    pbi: { n: 'Power BI', nivel: ['En proyectos', 'Used in projects'], que: ['Cuadros de mando interactivos que cualquiera puede filtrar sin tocar los datos.', 'Interactive dashboards anyone can filter without touching the data.'], uso: ['Diseño el modelo de datos, escribo las medidas en DAX y dejo la información lista para decidir de un vistazo.', 'I design the data model, write DAX measures and leave the information ready to decide at a glance.'], p: ['nat', 'bl'] },
    n8n: { n: 'n8n', nivel: ['En proyectos', 'Used in projects'], que: ['Automatiza tareas conectando aplicaciones, como un formulario, el correo, Telegram o una IA, sin depender de un equipo técnico.', 'It automates tasks by connecting apps, such as a form, email, Telegram or an AI, without needing a tech team.'], uso: ['Mis dos automatizaciones registran datos, deciden qué hacer con ellos y avisan a la persona adecuada en segundos.', 'My two automations log data, decide what to do with it and notify the right person within seconds.'], p: ['bl', 'sol'] },
    sql: { n: 'SQL', nivel: ['Aprendiendo', 'Learning'], que: ['El lenguaje para preguntar cosas a una base de datos.', 'The language for asking questions of a database.'], uso: ['Estoy haciendo el curso SQL TOTAL. Quiero sacar yo misma los datos de los sistemas de la empresa, sin esperar a que me los exporten.', 'I am taking the SQL TOTAL course. I want to pull data from company systems myself, without waiting for an export.'], p: [] },
    py: { n: 'Python', nivel: ['Aprendiendo', 'Learning'], que: ['Un lenguaje de programación muy usado para analizar datos.', 'A programming language widely used for data analysis.'], uso: ['Estoy con el curso de Python para Data Science. Me servirá para analizar volúmenes de datos que en Excel se quedan cortos.', 'I am taking a Python for Data Science course. It will help with data volumes that Excel cannot handle well.'], p: [] }
  };
  let hActual = 'excel', temporizadores = [];
  function limpiarT() { temporizadores.forEach(clearTimeout); temporizadores.forEach(clearInterval); temporizadores = []; }
  const T = (f, ms) => { const t = setTimeout(f, ms); temporizadores.push(t); return t; };
  function mostrarHerr(k) {
    hActual = k; limpiarT();
    const h = HERR[k], L = idioma === 'en' ? 1 : 0;
    $$('.lista-herr button').forEach(b => { const on = b.dataset.h === k; b.classList.toggle('activa', on); b.setAttribute('aria-selected', on); });
    const ft = $('.ficha-texto'); ft.style.animation = 'none'; void ft.offsetWidth; ft.style.animation = '';
    $('#h-nivel').textContent = h.nivel[L]; $('#h-nivel').classList.toggle('aprende', k === 'sql' || k === 'py');
    $('#h-nombre').textContent = h.n; $('#h-que').textContent = h.que[L]; $('#h-uso').textContent = h.uso[L];
    $('#h-proy').innerHTML = h.p.length ? h.p.map(p => `<a href="#${PROY[p][0]}">${PROY[p][L + 1]}</a>`).join('') : `<span>${L ? 'Coming soon, in my next projects.' : 'Pronto, en mis próximos proyectos.'}</span>`;
    demos[k](L);
  }
  const D = $('#demo');
  const demos = {
    excel(L) {
      const cab = L ? ['Order', 'Status', 'Days', '€'] : ['Pedido', 'Estado', 'Días', '€'];
      const filas = [['P-0423', L ? 'Ready' : 'Listo', 102, 115], ['P-0490', L ? 'Waiting' : 'Esperando', 8, 638], ['P-0449', L ? 'Ready' : 'Listo', 57, 79], ['P-0502', L ? 'In shop' : 'En taller', 2, 59]];
      D.innerHTML = `<div class="hoja-x">${cab.map(c => `<span class="c">${c}</span>`).join('')}${filas.map(f => f.map((v, i) => `<span class="${i === 2 ? (v > 30 ? 'tarde' : 'bien') : ''}">${v}</span>`).join('')).join('')}</div><span class="demo-pie">${L ? 'Conditional formatting flags what is late' : 'El formato condicional marca lo que va tarde'}</span>`;
      D.querySelectorAll('.tarde, .bien').forEach((c, i) => T(() => c.classList.add('on'), 500 + i * 350));
    },
    pq(L) {
      const sucio = [['  laura GÓMEZ ', 'baño '], ['Laura Gómez', 'Baño'], ['ANDREA ruiz', ' lencería']];
      const limpio = [['Laura Gómez', 'Baño'], ['', ''], ['Andrea Ruiz', 'Lencería']];
      const pasos = L ? ['Trim spaces', 'Fix capitals', 'Remove duplicates'] : ['Quitar espacios', 'Mayúsculas', 'Quitar duplicados'];
      D.innerHTML = `<div class="pq">${sucio.map((f, i) => `<div class="pq-fila${i === 1 ? ' dup' : ''}"><span>${f[0]}</span><span>${f[1]}</span></div>`).join('')}<div class="pq-pasos">${pasos.map(p => `<i>${p}</i>`).join('')}</div></div><span class="demo-pie">${L ? 'Applied steps repeat on every refresh' : 'Los pasos se repiten solos en cada actualización'}</span>`;
      const filas = D.querySelectorAll('.pq-fila'), ps = D.querySelectorAll('.pq-pasos i');
      T(() => { ps[0].classList.add('on'); filas.forEach((f, i) => { if (i !== 1) f.children[0].textContent = sucio[i][0].trim(); f.children[1].textContent = sucio[i][1].trim(); }); }, 800);
      T(() => { ps[1].classList.add('on'); [0, 2].forEach(i => { filas[i].children[0].textContent = limpio[i][0]; filas[i].children[1].textContent = limpio[i][1]; }); }, 1800);
      T(() => { ps[2].classList.add('on'); filas[1].classList.add('fuera'); }, 2800);
    },
    pbi(L) {
      const datos = { todo: [80, 62, 48, 35], tienda: [55, 70, 30, 42], seg: [92, 45, 60, 20] };
      const et = L ? ['Birthday', 'New in', 'Stock', 'Win back'] : ['Cumpleaños', 'Novedad', 'Stock', 'Recuperar'];
      D.innerHTML = `<div class="pbi"><div class="pbi-filtros"><button class="on" data-f="todo">${L ? 'All' : 'Todo'}</button><button data-f="tienda">${L ? 'Shop' : 'Tienda'}</button><button data-f="seg">${L ? 'Follow-up' : 'Seguimiento'}</button></div><div class="pbi-barras">${datos.todo.map(v => `<i style="--h:${v}%"></i>`).join('')}</div><div class="pbi-et">${et.map(e => `<span>${e}</span>`).join('')}</div></div><span class="demo-pie">${L ? 'Click the filters. Illustrative figures' : 'Pulsa los filtros. Cifras ilustrativas'}</span>`;
      D.querySelectorAll('.pbi-filtros button').forEach(b => b.addEventListener('click', () => {
        D.querySelectorAll('.pbi-filtros button').forEach(x => x.classList.toggle('on', x === b));
        D.querySelectorAll('.pbi-barras i').forEach((i, n) => i.style.setProperty('--h', datos[b.dataset.f][n] + '%'));
      }));
    },
    n8n(L) {
      const nodos = [['⏱', L ? 'Every 5 s' : 'Cada 5 s', 10, 80], ['{ }', L ? 'Choose' : 'Elegir', 105, 20], ['✦', 'Gemini', 200, 80], ['✈', 'Telegram', 105, 140], ['▦', L ? 'Table' : 'Tabla', 280, 140]];
      D.innerHTML = `<div class="n8n-demo"><svg viewBox="0 0 360 220"><path d="M84 105 C100 105 100 45 110 45"/><path d="M180 45 C200 45 195 105 205 105"/><path d="M84 105 C100 105 100 165 110 165"/><path d="M180 165 C230 165 240 165 285 165"/><path d="M240 130 C240 150 200 150 180 160"/></svg>${nodos.map(n => `<div class="nodo" style="left:${n[2]}px;top:${n[3]}px"><em>${n[0]}</em>${n[1]}</div>`).join('')}</div><span class="demo-pie">${L ? 'Each node does one job and passes on the result' : 'Cada nodo hace una tarea y pasa el resultado al siguiente'}</span>`;
      const ns = D.querySelectorAll('.nodo'); let i = 0;
      const iv = setInterval(() => { ns.forEach(n => n.classList.remove('on')); ns[i % ns.length].classList.add('on'); i++; }, 650); temporizadores.push(iv);
    },
    sql(L) { escribirCodigo(['<span class="k">SELECT</span> motivo, <span class="f">COUNT</span>(*) <span class="k">AS</span> compras', '<span class="k">FROM</span> seguimientos', '<span class="k">WHERE</span> resultado = <span class="s">\'Compró\'</span>', '<span class="k">GROUP BY</span> motivo', '<span class="k">ORDER BY</span> compras <span class="k">DESC</span>;'], [['Novedad', 23], ['Recuperar', 4], ['Stock', 4], ['Cumpleaños', 3]], L ? 'A query on the Boutique Lirio sample data' : 'Una consulta sobre los datos de ejemplo de Boutique Lirio', true); },
    py(L) { escribirCodigo(['<span class="k">import</span> pandas <span class="k">as</span> pd', 'df = pd.<span class="f">read_csv</span>(<span class="s">"bl_seguimientos.csv"</span>)', 'conv = df.<span class="f">groupby</span>(<span class="s">"motivo"</span>)[<span class="s">"compro"</span>].<span class="f">mean</span>()', '<span class="f">print</span>(conv.<span class="f">sort_values</span>(ascending=<span class="k">False</span>))'], [['Cumpleaños', 50], ['Novedad', 41], ['Stock', 27], ['Recuperar', 22]], L ? 'Conversion by reason, the same figures as the dashboard' : 'Conversión por motivo, las mismas cifras que el panel', false); }
  };
  function escribirCodigo(lineas, res, pie, cuenta) {
    D.innerHTML = `<div class="codigo"><div class="lineas"></div><div class="resultado">${res.map(r => `<div><span>${r[0]}</span><i style="--v:${cuenta ? r[1] / 0.23 : r[1] * 1.6}%"></i><b>${cuenta ? r[1] : r[1] + ' %'}</b></div>`).join('')}</div></div><span class="demo-pie">${pie}</span>`;
    const cont = D.querySelector('.lineas'); let n = 0;
    function sig() {
      if (n >= lineas.length) { T(() => D.querySelector('.resultado').classList.add('on'), 300); return; }
      const div = document.createElement('div'); div.className = 'linea-c'; cont.appendChild(div);
      const html = lineas[n]; const plano = html.replace(/<[^>]+>/g, ''); let c = 0;
      (function letra() { c++; div.textContent = plano.slice(0, c); if (c < plano.length) T(letra, 22); else { div.innerHTML = html; n++; T(sig, 180); } })();
    }
    sig();
  }
  $$('.lista-herr button').forEach(b => b.addEventListener('click', () => mostrarHerr(b.dataset.h)));
  const obsH = new IntersectionObserver(es => { if (es[0].isIntersecting) { mostrarHerr(hActual); obsH.disconnect(); } }, { threshold: .3 });
  obsH.observe($('#herramientas'));
  mostrarHerr('excel');

  if (idioma === 'en') ponerIdioma('en'); else saludo();
  alBajar();
})();
