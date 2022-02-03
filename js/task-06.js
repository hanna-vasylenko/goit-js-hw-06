const inputRef = document.querySelector('#validation-input');
console.log(inputRef);

const inputNum = Number(inputRef.dataset.length);
console.log(inputNum);

inputRef.addEventListener('blur', () => {
  const userSymbolsNum = inputRef.value.length;
  if (userSymbolsNum !== inputNum) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
    return;
  }
  inputRef.classList.add('valid');
  inputRef.classList.remove('invalid');
});
