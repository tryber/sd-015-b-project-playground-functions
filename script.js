const fieldset = document.querySelector('fieldset');
const inputEmail = document.querySelector('[name=email]');
const inputPassword = document.querySelector('[name=password]');
const buttonLogin = document.querySelector('#confirmLogin');
const rateButtons = document.querySelector('#third');
const agreementCheck = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function createRateButtons() {
  for (let i = 1; i <= 10; i += 1) {
    const createInput = document.createElement('input');
    const createSpan = document.createElement('span');
    createInput.type = 'radio';
    createInput.className = 'rating-input';
    createSpan.innerText = i;
    createInput.name = 'rate';
    createInput.value = i;
    rateButtons.appendChild(createSpan);
    rateButtons.appendChild(createInput);
  }
}

buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function disableSubmitButton() {
  if (agreementCheck.checked !== true) {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
}

let actualCharactersCount = 0;
let previousCharactersCount = 0;
function textareaCharactesCounter() {
  const textareaLength = textarea.textLength;
  const counterNumber = parseInt(counter.innerHTML, 10);
  actualCharactersCount = textareaLength;
  if (actualCharactersCount > previousCharactersCount) {
    counter.innerHTML = `${counterNumber - (actualCharactersCount - previousCharactersCount)}`;
  } else {
    counter.innerHTML = `${counterNumber + (previousCharactersCount - actualCharactersCount)}`;
  }
  previousCharactersCount = textareaLength;
}

function setContentSubjects(newParagraph, conType, i) {
  const learnSubject = document.querySelectorAll('.learn-input:checked');
  newParagraph.innerText = `${conType[i]}`;
  for (let u = 0, subjectsNum = learnSubject.length; u < subjectsNum; u += 1) {
    if (u === (subjectsNum - 1)) {
      newParagraph.innerText += ` ${learnSubject[u].value}.`;
    } else {
      newParagraph.innerText += ` ${learnSubject[u].value},`;
    }
  }
}

function setContent(contents) {
  for (let i = 0; i <= 5; i += 1) {
    const conType = ['Email: ', 'Casa: ', 'Família: ', 'Matérias:', 'Avaliação: ', 'Observações: '];
    const newParagraph = document.createElement('p');
    if (i === 3) {
      setContentSubjects(newParagraph, conType, i);
    } else {
      newParagraph.innerText = `${conType[i] + contents[i]}`;
    }
    fieldset.appendChild(newParagraph);
  }
}

function removeOldWarning() {
  if (document.querySelector('h3') !== null && document.querySelector('p') !== null) {
    fieldset.removeChild(document.querySelector('h3'));
    while (document.querySelectorAll('p').length > 0) {
      fieldset.removeChild(document.querySelector('p'));
    }
  }
}

function formContent(e) {
  e.preventDefault(); removeOldWarning();
  const firstName = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('.input-family:checked').value;
  const learnSubject = document.querySelectorAll('.learn-input:checked');
  const rating = document.querySelector('.rating-input:checked').value;
  const commentary = document.querySelector('#textarea').value;
  const contents = [email, house, family, learnSubject, rating, commentary];
  if (fieldset.lastChild !== document.getElementsByTagName('hr')[2]) {
    fieldset.appendChild(document.createElement('hr'));
  }
  const warning = document.createElement('h3'); warning.innerText = 'Dados enviados anteriormente:';
  fieldset.appendChild(warning);
  const name = document.createElement('p'); name.innerText = `Nome: ${firstName} ${lastName}`;
  fieldset.appendChild(name);
  setContent(contents);
}

window.onload = () => {
  createRateButtons();
  submitButton.disabled = true;
  counter.innerHTML = `${textarea.maxLength}`;
  agreementCheck.addEventListener('click', disableSubmitButton);
  textarea.addEventListener('input', textareaCharactesCounter);
  submitButton.addEventListener('click', formContent);
};
