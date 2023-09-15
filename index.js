const checkbox = document.querySelector('#menu-toggle');
const list = document.querySelector('.nav__list');

checkbox.addEventListener('change', getBurgerMenu)
function getBurgerMenu() {
  if (checkbox.checked) {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
