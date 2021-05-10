import { allProjects, allTasks, toggleTaskComplete } from './logic'

function buildProjectsHtml () {
  let mainScreen = document.getElementById('jumbotron');
  allProjects.forEach(e => {
    // create list to contain all projects as li and sublist for each set of tasks
    const projectList = createHtmlElement('ul', 'project-list', 'project-list')
    mainScreen.appendChild(projectList);
    // create div for each project
    const projectDiv = createHtmlElement('div', 'project-div', 'project-div-' + e.id);
    projectList.appendChild(projectDiv);
    // create list item for each project
    const project = createHtmlElement('li', 'project-li', 'project-li-' + e.id);
    projectDiv.appendChild(project);
    // create project description as first li
    const projectNameLi = createHtmlElement('li', 'project-name', 'project-name-' + e.id);
    projectNameLi.textContent = e.description;
    project.appendChild(projectNameLi);
    // create nested ul of tasks for each project
    const projectUl = createHtmlElement('ul', 'project-task-list', 'project-task-list-' + e.id);
    project.appendChild(projectUl);
    // add li for each task within each nested ul
    const projectTaskArray = buildTaskArray(e.id);
    buildTaskList(projectTaskArray, projectUl);
    // add li for adding a new task
    const addTaskLi = createHtmlElement('li', 'add-task-li', 'add-task-li-' + e.id);
    const addTaskButton = createHtmlElement('span', 'add-task-button-span', 'add-task-button-span-' + e.id);
    addTaskButton.innerHTML = '<svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg>'
    addTaskButton.addEventListener('click', toggleInputFieldOn)
    const addTaskDesc = createHtmlElement('span', 'add-task-desc-span', 'add-task-desc-span-' + e.id);
    addTaskDesc.textContent = "Add task";
    const addTaskFormLi = createHtmlElement('li', 'add-task-form-li', 'add-task-form-li-' + e.id);
    addTaskFormLi.setAttribute('style', 'display: none')
    const addTaskFormTextInput = createHtmlElement('input', 'add-task-form-text-input', 'add-task-form-text-input-' + e.id);
    addTaskFormTextInput.setAttribute('type', 'text');
    addTaskFormTextInput.setAttribute('name', 'new-task-description');
    const addTaskFormSubmitButton = createHtmlElement('input', 'button submit-button', 'submit-button-' + e.id);
    addTaskFormSubmitButton.setAttribute('type', 'submit');
    addTaskFormSubmitButton.setAttribute('value', 'Save');
    const addTaskFormCancelButton = createHtmlElement('input', 'button cancel-button', 'cancel-button-' + e.id);
    addTaskFormCancelButton.setAttribute('value', 'Cancel');
    addTaskFormCancelButton.setAttribute('type', 'button');
    addTaskFormCancelButton.addEventListener('click', toggleInputFieldOff);
    addTaskFormLi.appendChild(addTaskFormTextInput);
    addTaskFormLi.appendChild(addTaskFormSubmitButton);
    addTaskFormLi.appendChild(addTaskFormCancelButton);
    projectUl.appendChild(addTaskLi);     
    projectUl.appendChild(addTaskFormLi);
    addTaskLi.appendChild(addTaskButton);
    addTaskLi.appendChild(addTaskDesc);
    mainScreen.appendChild(projectDiv);
  });
}

function buildTaskList(projectTaskArray, projectUl) {
  projectTaskArray.forEach(t => {
    const checkbox = determineCheckboxStatus(t.complete);
    const taskLi = createHtmlElement('li', 'task-description-li', 'task-description-li-' + t.id)
    const checkBoxSpan = createHtmlElement('span', 'checkbox-span', 'checkbox-span-' + t.id);
    checkBoxSpan.textContent = checkbox;
    const taskSpan = createHtmlElement('span', 'task-span', 'id-span-' + t.id);
    taskSpan.textContent = t.description;
    if (t.complete) {
      taskLi.setAttribute('class', 'task-description-li complete');
      taskSpan.setAttribute('class', 'task-span complete');
      checkBoxSpan.setAttribute('class', 'checkbox-span complete')
    };
    taskLi.addEventListener('click', toggleCompletion);
    projectUl.appendChild(taskLi);
    taskLi.appendChild(checkBoxSpan);
    taskLi.appendChild(taskSpan);
  })
}

function toggleInputFieldOn() {
  const projectId = this.id.replace('add-task-button-span-', '');
  document.getElementById('add-task-button-span-' + projectId).setAttribute('style', 'display: none');
  document.getElementById('add-task-desc-span-' + projectId).setAttribute('style', 'display: none');
  document.getElementById('add-task-form-li-' + projectId).setAttribute('style', 'display: block')
}

function toggleInputFieldOff() {
  const projectId = this.id.replace('cancel-button-', '');
  document.getElementById('add-task-button-span-' + projectId).setAttribute('style', 'display: inline');
  document.getElementById('add-task-desc-span-' + projectId).setAttribute('style', 'display: inline');
  document.getElementById('add-task-form-li-' + projectId).setAttribute('style', 'display: none')
}

function createHtmlElement(elementName, elementClass, elementId) {
  const newElement = document.createElement(elementName);
  newElement.setAttribute('class', elementClass);
  newElement.setAttribute('id', elementId);
  return newElement;
}

function toggleCompletion() {
  var taskId = this.id.replace('task-description-li-', '');
  toggleTaskComplete(taskId);
  clearJumbotron();
  buildProjectsHtml();
}

function clearJumbotron() {
  const parent = document.getElementById('jumbotron');
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function buildTaskArray(id) {
  var array = [];
  allTasks.forEach(t => {
    if (t.project == id) {
      array.push(t)
    }
  });
  return array;
}

function determineCheckboxStatus(complete) {
  if (complete == true) {
    return "☑"
  } else {
    return "☐"
  }
}

export { buildProjectsHtml }