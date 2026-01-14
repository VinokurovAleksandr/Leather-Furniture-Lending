  const list = document.querySelector('.services__types');
  const prevBtn = document.querySelector('.services__arrow--prev');
  const nextBtn = document.querySelector('.services__arrow--next');

  function setActive() {
    const items = list.querySelectorAll('.services__type');
    items.forEach(item => item.classList.remove('services__type--active'));

    // активний елемент — завжди другий (індекс 1)
    if (items[1]) {
      items[1].classList.add('services__type--active');
    }
  }

  function moveNext() {
    const first = list.firstElementChild;
    list.appendChild(first);
    setActive();
  }

  function movePrev() {
    const last = list.lastElementChild;
    list.prepend(last);
    setActive();
  }

  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);

  // ініціалізація
  setActive();

