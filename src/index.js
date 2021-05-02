// import loadPage from './modules/initial-page-load';
// import toDoInitialize from './modules/todo-items';

// init();

// function init() {
//   loadPage();
  

// }

function createCheckBox(id, text) {
  const checkBoxDiv = document.createElement('div');
  checkBoxDiv.setAttribute('id', id)
  const checkBox = document.createElement('h2');
  checkBox.textContent = text;
  checkBoxDiv.appendChild(checkBox);
  return checkBoxDiv;
}

function toggleCheck(evt) {
  if (evt.target.innerHTML == '☐') {
    evt.target.innerHTML = '☑'
  }
  else {
    evt.target.innerHTML = '☐'
  }
}

content = document.getElementById('jumbotron');
const checkBox = createCheckBox('checkBox', '☐');
content.appendChild(checkBox);
checkBox.addEventListener('click', toggleCheck);