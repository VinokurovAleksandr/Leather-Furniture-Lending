

const services = [
  { 
    title: "Reshape", 
    img: "./img/service/reshape.jpg", 
    desc: "Our reshaping service restores the original silhouette of your leather items using specialized forms and gentle heat treatment.", 
    p1: "$100-$200", p2: "$300-$400" 
  },
  { 
    title: "Colour Restoration", 
    img: "./img/service/colour-restoration.jpg", 
    desc: "Restoring vibrant colors and original finish to faded or worn leather surfaces using premium dyes and pigments.", 
    p1: "$180-$250", p2: "$350-$500" 
  },
  { 
    title: "Damaged Surface Repair", 
    img: "./img/service/damaged.jpg", 
    desc: "Expertly fixing scratches, deep tears, and scuffs to make your leather items look seamless and new again.", 
    p1: "$120-$190", 
    p2: "$280-$400" 
  },
  { 
    title: "Spa Service", 
    img: "./img/service/spa.jpg", 
    desc: "Our Signature Spa Service renews handbags, wallets, and small leather goods through deep cleaning, conditioning, and gentle hardware polishing.", 
    p1: "$150-$250", 
    p2: "$250-$450" 
  },
  { 
    title: "Fittings & Replating", 
    img: "./img/service/fittings.jpg", 
    desc: "Restore the shine of your hardware with our replating service. We handle gold, silver, and palladium finishes.", 
    p1: "$90-$150", 
    p2: "$200-$350" 
  }
];

const track = document.getElementById('carouselTrack');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let autoplayInterval;
const AUTOPLAY_DELAY = 5000; 

// --- ФУНКЦІЇ ЛОГІКИ ---

function getActiveIndex() {
  if (window.innerWidth <= 768) return 0;
  return Math.min(3, services.length - 1);
}

function updateText(data) {
  if (!data) return;
  document.getElementById('cardTitle').innerText = data.title;
  document.getElementById('cardDesc').innerText = data.desc;
  document.getElementById('priceSmall').innerText = `${data.p1} Small Leather Goods`;
  document.getElementById('priceLarge').innerText = `${data.p2} Handbag`;
}

function nextSlide() {
  services.push(services.shift());
  render();
}

function prevSlide() {
  services.unshift(services.pop());
  render();
}

function render() {
  track.innerHTML = '';
  const activeIdx = getActiveIndex();
  
  services.forEach((item, index) => {
    const div = document.createElement('div');
    const isActive = index === activeIdx; 
    
    div.className = `circle-item ${isActive ? 'circle-item-big' : 'circle-item-small'}`;
    if (isActive) div.classList.add('is-active');

    div.style.backgroundImage = `url(${item.img})`;
    div.innerHTML = `<span>${item.title}</span>`;
    
 
    div.onclick = () => {
      stopAutoplay();
      const shift = index - activeIdx;
      if (shift > 0) {
        for(let i=0; i < shift; i++) services.push(services.shift());
      } else if (shift < 0) {
        for(let i=0; i < Math.abs(shift); i++) services.unshift(services.pop());
      }
      render();
    };

    if (isActive) updateText(item);
    track.appendChild(div);
  });
}

// --- АВТОПЛЕЙ ---

function startAutoplay() {
  stopAutoplay();
  autoplayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayInterval) clearInterval(autoplayInterval);
}

// --- СВАЙПИ (TOUCH EVENTS) ---

let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
  stopAutoplay();
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

track.addEventListener('touchend', e => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeDistance = touchStartX - touchEndX;
  if (swipeDistance > 50) {
    nextSlide(); 
  } else if (swipeDistance < -50) {
    prevSlide(); 
  }
}

// --- УПРАВЛІННЯ ---

nextBtn.onclick = () => {
  stopAutoplay();
  nextSlide();
};

prevBtn.onclick = () => {
  stopAutoplay();
  prevSlide();
};


let resizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(render, 200);
});

render();
startAutoplay();