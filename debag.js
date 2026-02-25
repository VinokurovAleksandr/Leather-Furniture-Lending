const docWidth = document.documentElement.offsetWidth;

document.querySelectorAll('*').forEach(el => {
  if (el.offsetWidth > docWidth) {
    el.style.border = '3px solid blue';
    console.log('Overflow:', el);
  }
});