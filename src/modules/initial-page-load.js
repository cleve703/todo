import { allProjects, allTasks, toggleTaskComplete, createTask, createProject } from './logic'

function buildProjectsHtml () {
  let mainScreen = document.getElementById('jumbotron');
  // create list to contain all projects as li and sublist for each set of tasks
  const projectList = createHtmlElement('ul', 'project-list', 'project-list');
  mainScreen.appendChild(projectList);
  allProjects.forEach(e => {
    // create list item for each project
    const project = createHtmlElement('li', 'project-li', 'project-li-' + e.id);
    projectList.appendChild(project);
    // create div for each project
    const projectDiv = createHtmlElement('div', 'project-div', 'project-div-' + e.id);
    project.appendChild(projectDiv);
    // create project description as first li
    const projectNameLi = createHtmlElement('li', 'project-name', 'project-name-' + e.id);
    projectNameLi.textContent = e.description;
    projectDiv.appendChild(projectNameLi);
    // create nested ul of tasks for each project
    const projectUl = createHtmlElement('ul', 'project-task-list', 'project-task-list-' + e.id);
    projectDiv.appendChild(projectUl);
    // add li for each task within each nested ul
    const projectTaskArray = buildTaskArray(e.id);
    buildTaskList(projectTaskArray, projectUl);
    // add li for adding a new task
    const newTaskPrompt = createInputPrompt('task', e.id);
    const newTaskForm = createInputForm('task', e.id);
    projectUl.appendChild(newTaskPrompt);     
    projectUl.appendChild(newTaskForm);

  });
  const addNewProject = createHtmlElement('li', 'project-li', 'add-new-project-li');
  const addNewProjectDiv = createHtmlElement('div', 'project-div', 'add-new-project-div');
  const addNewProjectUl = createHtmlElement('ul', 'add-project-ul', 'add-project-ul');
  const addNewProjectPrompt = createInputPrompt('project', '0');
  const addNewProjectForm = createInputForm('project', '0');
  addNewProjectUl.appendChild(addNewProjectPrompt);
  addNewProjectUl.appendChild(addNewProjectForm);
  projectList.appendChild(addNewProject);
  addNewProject.appendChild(addNewProjectDiv);
  addNewProjectDiv.appendChild(addNewProjectUl);
}

function buildTaskList(projectTaskArray, projectUl) {
  projectTaskArray.forEach(t => {
    const checkbox = determineCheckboxStatus(t.complete);
    const taskLi = createHtmlElement('li', 'task-description-li', 'task-description-li-' + t.id)
    const checkBoxSpan = createHtmlElement('span', 'checkbox-span', 'checkbox-span-' + t.id);
    checkBoxSpan.textContent = checkbox;
    const taskSpan = createHtmlElement('span', 'task-span', 'id-span-' + t.id);
    taskSpan.textContent = (t.title + " " + t.description);
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

function createInputPrompt(formObjectType, formObjectId) {
  const thisPromptLi = createHtmlElement('li', 'add-' + formObjectType + '-li', 'add-' + formObjectType + '-li-' + formObjectId);
    const addButton = createHtmlElement('span', 'add-' + formObjectType + '-button-span', 'add-' + formObjectType + '-button-span-' + formObjectId);
    addButton.innerHTML = '<svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg>'
    addButton.addEventListener('click', toggleInputFieldOn)
    const addDesc = createHtmlElement('span', 'add-' + formObjectType + '-desc-span', 'add-' + formObjectType + '-desc-span-' + formObjectId);
    addDesc.textContent = "Add " + formObjectType;
    thisPromptLi.appendChild(addButton);
    thisPromptLi.appendChild(addDesc);
    return thisPromptLi;
  }
  
  function createInputForm(formObjectType, formObjectId) {
    const thisFormLi = createHtmlElement('li', 'add-' + formObjectType + '-form-li', 'add-' + formObjectType + '-form-li-' + formObjectId);
    thisFormLi.setAttribute('style', 'display: none');
    const addFormTitleInput = createHtmlElement('input', 'add-' + formObjectType + '-form-title-input', 'add-' + formObjectType + '-form-title-input-' + formObjectId);
    addFormTitleInput.setAttribute('type', 'text');
    addFormTitleInput.setAttribute('name', 'new-' + formObjectType + '-title');
    const addFormDescriptionInput = createHtmlElement('input', 'add-' + formObjectType + '-form-description-input', 'add-' + formObjectType + '-form-description-input-' + formObjectId);
    addFormDescriptionInput.setAttribute('type', 'text');
    addFormDescriptionInput.setAttribute('name', 'new-' + formObjectType + '-description');
    const addFormSubmitButton = createHtmlElement('input', 'button submit-button', 'submit-button-' + formObjectId);
    addFormSubmitButton.setAttribute('type', 'submit');
    addFormSubmitButton.setAttribute('value', 'Save');
    if (formObjectType == 'task') {
      addFormSubmitButton.addEventListener('click', saveNewTask);
    } else {
      addFormSubmitButton.addEventListener('click', saveNewProject);
    }
    const addFormCancelButton = createHtmlElement('input', 'button cancel-button', 'cancel-button-' + formObjectType + '-' + formObjectId);
    addFormCancelButton.setAttribute('value', 'Cancel');
    addFormCancelButton.setAttribute('type', 'button');
    addFormCancelButton.addEventListener('click', toggleInputFieldOff);
    thisFormLi.appendChild(addFormTitleInput);
    thisFormLi.appendChild(addFormDescriptionInput);
    thisFormLi.appendChild(addFormSubmitButton);
    thisFormLi.appendChild(addFormCancelButton);
    return thisFormLi;
}

function saveNewTask() {
  var projectId = this.id.replace('submit-button-', '');
  var newTaskTitle = document.getElementById('add-task-form-title-input-' + projectId).value;
  var newTaskDescription = document.getElementById('add-task-form-description-input-' + projectId).value;
  createTask(newTaskTitle, newTaskDescription, projectId);
  clearJumbotron();
  buildProjectsHtml();
}

function saveNewProject() {
  var newTaskDescription = document.getElementById('add-project-form-text-input-0').value;
  createProject(newTaskDescription);
  clearJumbotron();
  buildProjectsHtml();
}

function toggleInputFieldOn() {
  var inputFieldType;
  if (this.id.includes('project')) { inputFieldType = 'project' } else { inputFieldType = 'task'};
  const projectId = this.id.replace('add-' + inputFieldType + '-button-span-', '');
  document.getElementById('add-' + inputFieldType + '-button-span-' + projectId).setAttribute('style', 'display: none');
  document.getElementById('add-' + inputFieldType + '-desc-span-' + projectId).setAttribute('style', 'display: none');
  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: block')
}

function toggleInputFieldOff() {
  var inputFieldType;
  if (this.id.includes('project')) { inputFieldType = 'project' } else { inputFieldType = 'task'};
  const projectId = this.id.replace('cancel-button-' + inputFieldType + '-', '');
  document.getElementById('add-' + inputFieldType + '-button-span-' + projectId).setAttribute('style', 'display: inline');
  document.getElementById('add-' + inputFieldType + '-desc-span-' + projectId).setAttribute('style', 'display: inline');
  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: none')
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