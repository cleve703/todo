// import loadPage from './modules/initial-page-load';
// import toDoInitialize from './modules/todo-items';

// init();

// function init() {
//   loadPage();
  

// }

function createCheckBox(id, textSymbol, taskDesc) {
  const checkBoxDiv = document.createElement('div');
  checkBoxDiv.setAttribute('id', id)
  const checkBox = document.createElement('span');
  checkBox.setAttribute('id', 'checkBoxSpan')
  checkBox.textContent = textSymbol;
  checkBoxDiv.appendChild(checkBox);
  const textLine = document.createElement('span');
  textLine.setAttribute('id', 'textLine')
  textLine.textContent = taskDesc;
  checkBoxDiv.appendChild(textLine);
  return checkBoxDiv;
}

function toggleCheck(evt) {
  if (evt.target.innerHTML[0] == '☐') {
    evt.target.innerHTML = '☑'
    document.getElementById('textLine').setAttribute('style', 'text-decoration: line-through')
  }
  else if (evt.target.innerHTML[0] == '☑') {
    evt.target.innerHTML = '☐'
    document.getElementById('textLine').setAttribute('style', 'text-decoration: none')
  }
}

content = document.getElementById('jumbotron');
const checkBox = createCheckBox('checkBox', '☐',  'First task');
content.appendChild(checkBox);
checkBox.addEventListener('click', toggleCheck);