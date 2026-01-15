
// const services = [
//   { 
//     title: "Reshape", 
//     img: "./service/reshape.jpg", 
//     desc: "Description for Reshape...", 
//     p1: "$100-$200", p2: "$300-$400" 
//   },
//   { 
//     title: "Colour Restoration", 
//     img: "./service/colour-restoration.jpg", 
//     desc: "Restoring vibrant colors...", 
//     p1: "$180-$250", p2: "$350-$500" 
//   },
//   { 
//     title: "Damaged Surface Repair", 
//     img: "./service/damaged.jpg", 
//     desc: "Fixing scratches and tears...", 
//     p1: "$120-$190", 
//     p2: "$280-$400" },
//   { 
//     title: "Spa Service", 
//     img: "./service/spa.jpg", 
//     desc: "Our Signature Spa Service renews handbags, wallets, and small leather goods...", 
//     p1: "$150-$250", 
//     p2: "$250-$450" 
//   },
//   { 
//     title: "Fittings & Replating", 
//     img: "./service/fittings.jpg", 
//     desc: "Metal parts restoration...", 
//     p1: "$90-$150", 
//     p2: "$200-$350" }
// ];

// const track = document.getElementById('carouselTrack');

// function render() {
//   track.innerHTML = '';
  
//   services.forEach((item, index) => {
//     const div = document.createElement('div');
//     // Логіка: 4-й елемент у масиві (index 3) робимо великим, як на макеті
//     const isBig = index === 3; 
    
//     div.className = `circle-item ${isBig ? 'big' : 'small'}`;
//     div.style.backgroundImage = `url(${item.img})`;
//     div.innerHTML = `<span>${item.title}</span>`;
    
//     if (isBig) {
//       updateText(item); // Оновлюємо картку зліва даними великого кола
//     }
    
//     track.appendChild(div);
//   });
// }

// function updateText(data) {
//   document.getElementById('cardTitle').innerText = data.title;
//   document.getElementById('cardDesc').innerText = data.desc;
//   document.getElementById('priceSmall').innerText = `${data.p1} Small Leather Goods`;
//   document.getElementById('priceLarge').innerText = `${data.p2} Handbag`;
// }

// // Кнопка Вперед: забираємо перший елемент і кладемо в кінець
// document.getElementById('nextBtn').onclick = () => {
//   services.push(services.shift());
//   render();
// };

// // Кнопка Назад: забираємо останній елемент і кладемо на початок
// document.getElementById('prevBtn').onclick = () => {
//   services.unshift(services.pop());
//   render();
// };

// // Перший запуск
// render();


const services = [
  { 
    title: "Reshape", 
    img: "./service/reshape.jpg", 
    desc: "Description for Reshape...", 
    p1: "$100-$200", p2: "$300-$400" 
  },
  { 
    title: "Colour Restoration", 
    img: "./service/colour-restoration.jpg", 
    desc: "Restoring vibrant colors...", 
    p1: "$180-$250", p2: "$350-$500" 
  },
  { 
    title: "Damaged Surface Repair", 
    img: "./service/damaged.jpg", 
    desc: "Fixing scratches and tears...", 
    p1: "$120-$190", 
    p2: "$280-$400" },
  { 
    title: "Spa Service", 
    img: "./service/spa.jpg", 
    desc: "Our Signature Spa Service renews handbags, wallets, and small leather goods...", 
    p1: "$150-$250", 
    p2: "$250-$450" 
  },
  { 
    title: "Fittings & Replating", 
    img: "./service/fittings.jpg", 
    desc: "Metal parts restoration...", 
    p1: "$90-$150", 
    p2: "$200-$350" }
];

const track = document.getElementById('carouselTrack');

function render() {
  track.innerHTML = '';
  
  services.forEach((item, index) => {
    const div = document.createElement('div');
    // 4-й елемент (index 3) — активний (Spa Service на старті)
    const isBig = index === 3; 
    
    div.className = `circle-item ${isBig ? 'circle-item--big' : 'circle-item--small'}`;
    div.style.backgroundImage = `url(${item.img})`;
    div.innerHTML = `<span>${item.title}</span>`;
    
    if (isBig) updateText(item);
    track.appendChild(div);
  });
}

function updateText(data) {
  document.getElementById('cardTitle').innerText = data.title;
  document.getElementById('cardDesc').innerText = data.desc;
  document.getElementById('priceSmall').innerText = `${data.p1} Small Leather Goods`;
  document.getElementById('priceLarge').innerText = `${data.p2} Handbag`;
}

document.getElementById('nextBtn').onclick = () => {
  services.push(services.shift());
  render();
};

document.getElementById('prevBtn').onclick = () => {
  services.unshift(services.pop());
  render();
};

render();