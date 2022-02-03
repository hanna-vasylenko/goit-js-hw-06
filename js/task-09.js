function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  btn: document.querySelector('button'),
  span: document.querySelector('.color'),
};

refs.btn.addEventListener('click', changeColor);

function changeColor() {
  const color = getRandomHexColor();
  refs.span.textContent = color;
  document.body.style.backgroundColor = color;
}
