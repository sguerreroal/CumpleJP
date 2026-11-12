const universes = [
  {
    "title": "Los Picapiedras",
    "image": "images/1_Picapiedras.png",
    "phrase": "Ni siquiera en la Edad de Piedra encontraríamos a alguien como tú: auténtica, de carácter fuerte y con una sonrisa capaz de alegrar cualquier época."
  },
  {
    "title": "Los Supersónicos",
    "image": "images/2_Superso.png",
    "phrase": "Podrán pasar los años, cambiar las ciudades y llegar el futuro, pero hay algo que nunca pasará de moda: tu forma tan especial de ser y ese amor inmenso que tienes por los tuyos."
  },
  {
    "title": "Sailor Moon",
    "image": "images/3_Sailor.png",
    "phrase": "Dicen que la Luna tiene su propia magia, pero tú tienes algo igual de especial: una luz que no necesita pedir permiso para brillar."
  },
  {
    "title": "Las Guerreras Mágicas",
    "image": "images/4_Gmagicas.png",
    "phrase": "No necesitas poderes mágicos para ser una guerrera. Tu valentía, tu independencia y esa capacidad de levantarte siempre son tu verdadera magia."
  },
  {
    "title": "Inuyasha",
    "image": "images/5_Inuyasha.png",
    "phrase": "Entre mundos antiguos, aventuras y destinos inesperados, hay personas que nunca dejan de luchar por lo que quieren. Tú eres una de ellas."
  },
  {
    "title": "Avril Lavigne",
    "image": "images/6_Avril.png",
    "phrase": "Hay canciones que nos acompañan durante la infancia y nunca se van. Que nunca pierdas esa niña rebelde, auténtica y amante del rock que todavía vive en ti."
  },
  {
    "title": "Los Bridgerton",
    "image": "images/7_Brig.png",
    "phrase": "No necesitas una corona ni pertenecer a la realeza para ser extraordinaria. Tu elegancia está en tu autenticidad y tu grandeza, en ese corazón que no se compra con dinero."
  },
  {
    "title": "RBD — Rebelde",
    "image": "images/8_RBD.png",
    "phrase": "Ser rebelde no siempre significa ir contra el mundo. A veces significa tener el valor de ser tú misma, defender tus sueños y no dejar que nadie decida por ti."
  },
  {
    "title": "Shakira y Karol G",
    "image": "images/9_Shaka.png",
    "phrase": "Las mujeres fuertes también sienten, lloran y se cansan. Pero encuentran la manera de volver a empezar. Y tú sabes muy bien lo que significa salir adelante."
  },
  {
    "title": "Enrique Bunbury",
    "image": "images/10_Bunbury.png",
    "phrase": "Hay personas que, como las buenas canciones de rock, no necesitan gustarle a todo el mundo para ser inolvidables. Tú tienes esa esencia: intensa, libre y auténtica."
  },
  {
    "title": "Segunda Guerra Mundial",
    "image": "images/11_Gmundial.png",
    "phrase": "Te apasiona conocer la historia, incluso sus capítulos más difíciles. Porque sabes que detrás de cada fecha hay decisiones, valentía, pérdidas y lecciones que el mundo jamás debería olvidar."
  },
  {
    "title": "Xena, la princesa guerrera",
    "image": "images/12_Xena.png",
    "phrase": "Si algo admiro de ti es que no esperas a que alguien venga a salvarte. Tomas tus propias decisiones, enfrentas tus batallas y encuentras la manera de seguir adelante. Esa es tu verdadera fuerza."
  },
  {
    "title": "Nuestro universo",
    "image": "images/13_MorYYO.jpg",
    "phrase": "Solo tengo palabras de admiración y de agradecimiento por permitirme estar celebrando un año mas a tu lado, a la vida y a ti; eres esa mujer única y especial que aparece pocas veces y hoy por hoy miro atrás y la vida nos preparó, para estar aquí juntos de esta manera como una pareja no perfecta, pero si con muchas ganas de amarnos y salir adelante a pesar de, siendo muy reales y con la ayuda de Dios mejorando y estando cada vez mas unidos, AMOR MIO …. FELICES NUEVOS 365 DIAS Y SOBRE TODO GRACIAS POR SER MI NOVIA… TE AMO\n\nSebastian Guerrero Alzate… TU NOVIO"
  }
];

'use strict';
// Contraseña del regalo.
// Nota: la contraseña en JavaScript solo oculta la experiencia de forma simbólica;
// GitHub Pages no ofrece privacidad real con este método.
const PASSWORD = '1311';
const screens = ['login', 'welcome', 'journey'];
let currentScreen = 0;
const music = document.getElementById('music');
const musicToggle = document.getElementById('musicToggle');
let musicAvailable = true;

function showScreen(index) {
  if (index < 0 || index >= screens.length) return;
  screens.forEach((id, i) => {
    const el = document.getElementById(id);
    el.hidden = i !== index;
    el.classList.toggle('active', i === index);
  });
  currentScreen = index;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateMusicButton() {
  musicToggle.textContent = music.paused ? '♫ Música: pausada' : '♫ Música: sonando';
}

async function startMusic() {
  if (!musicAvailable) return;
  try { await music.play(); } catch (error) { console.info('Audio no disponible o bloqueado:', error); }
  updateMusicButton();
}

musicToggle.hidden = !musicAvailable;

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const entered = document.getElementById('password').value;
  if (entered !== PASSWORD) {
    document.getElementById('loginError').textContent = 'La contraseña no es correcta. Inténtalo de nuevo.';
    return;
  }
  document.getElementById('loginError').textContent = '';
  showScreen(1);
  startMusic();
});

document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => showScreen(currentScreen + 1)));
document.querySelectorAll('[data-back]').forEach(button => button.addEventListener('click', () => showScreen(currentScreen - 1)));

musicToggle.addEventListener('click', async () => {
  if (music.paused) await startMusic();
  else { music.pause(); updateMusicButton(); }
});
music.addEventListener('play', updateMusicButton);
music.addEventListener('pause', updateMusicButton);
const universeImage = document.getElementById('universeImage');
const universePhrase = document.getElementById('universePhrase');
const universeCounter = document.getElementById('universeCounter');
const universeProgress = document.getElementById('universeProgress');
const universeTitle = document.getElementById('journeyTitle');
const previousUniverse = document.getElementById('previousUniverse');
const nextUniverse = document.getElementById('nextUniverse');
let currentUniverse = 0;

function renderUniverse() {
  const item = universes[currentUniverse];
  universeTitle.textContent = item.title;
  universeImage.src = item.image;
  universeImage.alt = `Imagen del universo ${currentUniverse + 1}: ${item.title}`;
  universePhrase.textContent = item.phrase || 'Aquí irá el mensaje especial que tú vas a escribir para nuestro universo.';
  universeCounter.textContent = `UNIVERSO ${String(currentUniverse + 1).padStart(2, '0')} DE ${universes.length}`;
  universeProgress.textContent = `${currentUniverse + 1} / ${universes.length}`;
  previousUniverse.textContent = currentUniverse === 0 ? '← Bienvenida' : '← Anterior';
  nextUniverse.textContent = currentUniverse === universes.length - 1 ? 'Volver al inicio ↺' : 'Siguiente universo →';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

previousUniverse.addEventListener('click', () => {
  if (currentUniverse === 0) showScreen(1);
  else { currentUniverse--; renderUniverse(); }
});
nextUniverse.addEventListener('click', () => {
  if (currentUniverse === universes.length - 1) {
    currentUniverse = 0;
    showScreen(1);
  } else { currentUniverse++; renderUniverse(); }
});
renderUniverse();
showScreen(0);
