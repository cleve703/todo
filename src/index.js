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
  taskListItem.textContent = task.description;
  taskList.appendChild(taskListItem);
}

function createAddTaskButton(project) {
  const taskUl = document.getElementById('task-ul-' + project.id)
  var addTaskLi = document.createElement('li');
  addTaskLi.setAttribute('class', 'add-task-li');
  taskUl.appendChild(addTaskLi);
  addTaskLi.innerHTML = '<button class="add-task-button"><svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg></button><span class="add-task-label">Add task</span></li>'
}

function createInputField(project) {
  const taskUl = document.getElementById('task-ul-' + project.id)
  var addInputLi = document.createElement('li');
  addInputLi.setAttribute('class', 'add-input-li');
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