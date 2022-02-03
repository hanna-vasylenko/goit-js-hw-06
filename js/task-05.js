//Напиши скрипт который, при наборе текста в инпуте
//input#name - input(событие input), подставляет его
//текущее значение в span#name - output.
//Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (e) => {
  refs.output.textContent = e.currentTarget.value;
  if (!refs.output.textContent.trim()) {
    refs.output.textContent = 'Anonymous';
  }
});

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");
// textInput.addEventListener('input', (event) => {
//   output.textContent = event.currentTarget.value;
// });
