const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

const inputNum = Number(inputRef.dataset.length);
console.log(inputNum);

inputRef.addEventListener('blur', () => {
  const userSymbolsNum = inputRef.value.length;
  if (userSymbolsNum === inputNum) {
    changeClass('valid', 'invalid');
    return;
  }
  changeClass('invalid', 'valid');
});

function changeClass(addClass, removeClass) {
  inputRef.classList.remove(removeClass);
  inputRef.classList.add(addClass);
}
