  const input = document.querySelector('.zip-form__input');
  const buttonNameFile = document.querySelector('.zip-form__btn');

  input.addEventListener('change', () => {
    if (input.files.length) {
      buttonNameFile.textContent = input.files[0].name;
    }
  });



  const fileInput = document.getElementById('zipFile');
  const button = document.querySelector('.zip-form__btn');
  const textInput = document.querySelector('.zip-form__input');

  button.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length) {
      textInput.value = fileInput.files[0].name;
    }
  });
