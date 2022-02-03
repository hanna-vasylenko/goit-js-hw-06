let counterValue = 0;

const refs = {
  btnIncr: document.querySelector('button[data-action=increment]'),
  btnDecr: document.querySelector('button[data-action=decrement]'),
  value: document.querySelector('#value'),
};

console.log(refs.btnDecr);

refs.btnIncr.onclick = function () {
  counterValue += 1;
  refs.value.textContent = counterValue;
};

refs.btnDecr.onclick = function () {
  counterValue -= 1;
  refs.value.textContent = counterValue;
};
