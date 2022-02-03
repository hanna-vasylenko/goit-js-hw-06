const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (e) => {
  console.log(e);
  refs.output.textContent = e.target.value;
  if (!refs.output.textContent.trim()) {
    refs.output.textContent = 'Anonymous';
  }
});
