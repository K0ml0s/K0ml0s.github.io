const toggleButton = document.getElementsByClassName('navbar-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

function Copy1() {
  const element = document.querySelector('#code1');

  const storage = document.createElement('textarea');
  storage.value = element.innerHTML;
  element.appendChild(storage);

  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
};
function Copy2() {
  const element = document.querySelector('#code2');

  const storage = document.createElement('textarea');
  storage.value = element.innerHTML;
  element.appendChild(storage);

  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand('copy');
  element.removeChild(storage);
};