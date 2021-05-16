import { allProjects, allTasks, toggleTaskComplete, createTask, createProject, getTask } from './logic'

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
    projectNameLi.textContent = e.title;
    projectNameLi.innerHTML += '<hr style="margin-top: 1px; color: lightgray;"></hr>'
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
    const taskTitleSpan = createHtmlElement('span', 'task-title-span', 'task-title-span-' + t.id);
    taskTitleSpan.textContent = t.title;
    const taskDescSpan = createHtmlElement('span', 'task-desc-span', 'task-desc-span-' + t.id);
    taskDescSpan.textContent = t.description;
    taskDescSpan.setAttribute('style', 'display: none');
    const taskPrioritySpan = createHtmlElement('span', 'task-priority-span', 'task-priority-span-' + t.id);
    taskPrioritySpan.textContent = t.priority;
    taskPrioritySpan.setAttribute('style', 'display: none');
    const taskDueDateSpan = createHtmlElement('span', 'task-due-date-span', 'task-due-date-span-' + t.id);
    taskDueDateSpan.textContent = t.dueDate;
    taskDueDateSpan.setAttribute('style', 'display: none');
    const deleteButton = createHtmlElement('button', 'delete-button', 'delete-button-' + t.id);
    const deleteSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>';
    deleteButton.innerHTML = deleteSVG;
    const editButton = createHtmlElement('button', 'action-button', 'edit-button-' + t.id);
    const editSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>';
    editButton.innerHTML = editSVG;
    const viewButton = createHtmlElement('button', 'action-button view', 'view-button-' + t.id);
    const viewSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    viewButton.innerHTML = viewSVG;
    viewButton.addEventListener('click', displayTaskDetails)
    if (t.complete) {
      taskLi.setAttribute('class', 'task-description-li complete');
      taskTitleSpan.setAttribute('class', 'task-span complete');
      checkBoxSpan.setAttribute('class', 'checkbox-span complete')
    };
    checkBoxSpan.addEventListener('click', toggleCompletion);
    projectUl.appendChild(taskLi);
    taskLi.appendChild(checkBoxSpan);
    taskLi.appendChild(taskTitleSpan);
    taskLi.appendChild(taskDescSpan);
    taskLi.appendChild(taskPrioritySpan);
    taskLi.appendChild(taskDueDateSpan);
    taskLi.appendChild(viewButton);
    taskLi.appendChild(editButton);
    taskLi.appendChild(deleteButton);
  })
}

function displayTaskDetails() {
  var taskId = this.id.replace('view-button-', '');
  this.parentNode.childNodes.forEach(cn => { cn.setAttribute('style', 'display: inline-block')});
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
    addFormTitleInput.setAttribute('placeholder', 'Title');
    const addFormDescriptionInput = createHtmlElement('input', 'add-' + formObjectType + '-form-description-input', 'add-' + formObjectType + '-form-description-input-' + formObjectId);
    addFormDescriptionInput.setAttribute('type', 'text');
    addFormDescriptionInput.setAttribute('name', 'new-' + formObjectType + '-description');
    addFormDescriptionInput.setAttribute('placeholder', 'Description');
    const priorityInput = createHtmlElement('select', 'select-' + formObjectType + '-priority', 'select-' + formObjectType + '-priority-' + formObjectId);
    const optionP1 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-1-project-' + formObjectId);
    optionP1.textContent = 'Priority 1';
    const optionP2 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-2-project-' + formObjectId);
    optionP2.textContent = 'Priority 2';
    const optionP3 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-3-project-' + formObjectId);
    optionP3.textContent = 'Priority 3';
    priorityInput.appendChild(optionP1);
    priorityInput.appendChild(optionP2);    
    priorityInput.appendChild(optionP3);
    const dueDateInput = createHtmlElement('input', 'input-date', 'input-date-' + formObjectId);
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'due-date');
    var today = new Date().toISOString().substr(0,10);
    dueDateInput.setAttribute('value', today);
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
    if (formObjectType == 'task') {
      thisFormLi.appendChild(addFormDescriptionInput);
      thisFormLi.appendChild(priorityInput);
      thisFormLi.appendChild(dueDateInput);
    };
    thisFormLi.appendChild(addFormSubmitButton);
    thisFormLi.appendChild(addFormCancelButton);
    return thisFormLi;
}

function saveNewTask() {
  var projectId = this.id.replace('submit-button-', '');
  var newTaskTitle = document.getElementById('add-task-form-title-input-' + projectId).value;
  var newTaskDescription = document.getElementById('add-task-form-description-input-' + projectId).value;
  var newTaskPriority = document.getElementById('select-task-priority-'+ projectId).value;
  var newTaskDueDate = document.getElementById('input-date-' + projectId).value;
  createTask(newTaskTitle, newTaskDescription, newTaskPriority, newTaskDueDate, projectId);
  clearJumbotron();
  buildProjectsHtml();
}

function saveNewProject() {
  var newTaskDescription = document.getElementById('add-project-form-title-input-0').value;
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
  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: inline-flex')
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
  var taskId = this.id.replace('checkbox-span-', '');
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