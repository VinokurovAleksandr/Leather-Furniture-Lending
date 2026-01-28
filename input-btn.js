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


  // check__form 

const checkFileInput = document.querySelector('.check__form-file');
const checkButton = document.querySelector('.check__form-btn');
const checkTextInput = document.querySelector('.check__form-input');

checkButton.addEventListener('click', () => {
  checkFileInput.click();
});

checkFileInput.addEventListener('change', () => {
  if (checkFileInput.files.length > 0) {
    checkTextInput.value = checkFileInput.files[0].name;
    
    // change name file
    // checkButton.textContent = checkFileInput.files[0].name;
  }
});