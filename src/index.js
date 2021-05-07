let projectCounter = 0;
let taskCounter = 0;
let allProjects = [];

createProject.prototype.f = function() {};

function createProject(description, id=projectCounter) {
  let project = Object.create(createProject.prototype);
  project.id = id;
  project.description = description;
  project.complete = false;
  project.tasks = [];
  projectCounter++;
  allProjects.push(project);
  return project;
}

createTask.prototype.f = function() {};

function createTask(description, project, id=taskCounter) {
  let task = Object.create(createTask.prototype)
  task.description = description;
  task.id = id;
  task.complete = false;
  task.project = project;
  taskCounter++;
  allProjects[project].tasks.push(task);
}

function initProjects() {
  if (allProjects.length == 0) {
    createProject('Welcome');
    createTask('eat', '0');
  }
}

function createProjectDiv(desc) {
  const projectContainer = document.getElementById('jumbotron');
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('id', 'project-' + desc.id + '-div');
  projectDiv.setAttribute('class', 'project-div');
  projectDiv.textContent = desc.description;
  projectContainer.appendChild(projectDiv);
  const taskUl = document.createElement('ul');
  taskUl.setAttribute('id', 'task-ul-' + desc.id);
  taskUl.setAttribute('class', 'task-ul');
  projectDiv.appendChild(taskUl);
  if (desc.tasks.length > 0) {
    desc.tasks.forEach(createTaskListItems)
  }
  createAddTaskButton(desc);
  createInputField(desc);
}

function createTaskListItems(task) {
  const taskList = document.getElementById('task-ul-' + task.project);
  const taskListItem = document.createElement('li');
  taskListItem.setAttribute('id', 'task-list-item' + task.id);
  var checkBox = document.createElement('span');
  checkBox.setAttribute('id', 'task-list-checkbox-' + task.id);
  checkBox.setAttribute('class', 'check-box');
  checkBox.textContent = '☐';
  checkBox.addEventListener('click', toggleTask)
  var taskListDescription = document.createElement('span');
  taskListDescription.setAttribute('id', 'task-list-description-' + task.id);
  taskListDescription.setAttribute('class', 'task-list-description')
  taskListDescription.textContent = task.description;
  taskList.appendChild(taskListItem);
  taskListItem.appendChild(checkBox);
  taskListItem.appendChild(taskListDescription);
}

function toggleTask() {
  if (this.textContent == "☐") {
    this.textContent = "☑"
    this.parentElement.lastChild.setAttribute('class', 'task-list-description-complete')
  }
  else {
    this.textContent = "☐"
    this.parentElement.lastChild.setAttribute('class', 'task-list-description')
  }
}

function createAddTaskButton(project) {
  const taskUl = document.getElementById('task-ul-' + project.id)
  var addTaskLi = document.createElement('li');
  addTaskLi.setAttribute('class', 'add-task-li');
  addTaskLi.setAttribute('id', 'add-task-li-' + project.id)
  taskUl.appendChild(addTaskLi);
  const addTaskButton = document.createElement('button');
  addTaskButton.setAttribute('class', 'add-task-button');
  addTaskButton.setAttribute('id', 'add-task-button-' + project.id);
  addTaskLi.appendChild(addTaskButton);
  addTaskButton.innerHTML = '<svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg>'
  addTaskLabel = document.createElement('span');
  addTaskLabel.setAttribute('class', 'add-task-label');
  addTaskLabel.textContent = 'Add task';
  addTaskLi.appendChild(addTaskLabel)
  addTaskButton.addEventListener('click', toggleInputFieldOn)
}

function toggleInputFieldOn() {
  this.parentElement.parentElement.lastChild.setAttribute('style', 'display: block')
  this.parentElement.setAttribute('style',  'display: none');
}

function toggleInputFieldOff() {
  this.parentElement.parentElement.lastChild.setAttribute('style', 'display: none')
  this.parentElement.previousSibling.setAttribute('style',  'display: block');
}

function createInputField(project) {
  const taskUl = document.getElementById('task-ul-' + project.id)
  var addInputLi = document.createElement('li');
  addInputLi.setAttribute('class', 'add-input-li');
  addInputLi.setAttribute('id', 'add-input-li-project-' + project.id)
  const taskInput = document.createElement('input');
  taskInput.setAttribute('id', 'task-input-to-project-' + project.id)
  const taskSaveButton = document.createElement('button');
  taskSaveButton.setAttribute('id', 'save-to-project-' + project.id);
  taskSaveButton.setAttribute('class', 'save-button');
  taskSaveButton.textContent = 'Save';
  const taskCancelButton = document.createElement('button');
  taskCancelButton.setAttribute('id', 'cancel-add-to-project-' + project.id);
  taskCancelButton.setAttribute('class', 'cancel-button');
  taskCancelButton.textContent = 'Cancel';
  taskCancelButton.addEventListener('click', toggleInputFieldOff)
  taskUl.appendChild(addInputLi);
  addInputLi.appendChild(taskInput);
  addInputLi.appendChild(taskSaveButton);
  addInputLi.appendChild(taskCancelButton);
}

function displayProjects() {
  allProjects.forEach(createProjectDiv);
}

initProjects();
displayProjects();