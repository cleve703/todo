/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let projectCounter = 0;\nlet taskCounter = 0;\nlet allProjects = [];\n\ncreateProject.prototype.f = function() {};\n\nfunction createProject(description, id=projectCounter) {\n  let project = Object.create(createProject.prototype);\n  project.id = id;\n  project.description = description;\n  project.complete = false;\n  project.tasks = [];\n  projectCounter++;\n  allProjects.push(project);\n  return project;\n}\n\ncreateTask.prototype.f = function() {};\n\nfunction createTask(description, project, id=taskCounter) {\n  let task = Object.create(createTask.prototype)\n  task.description = description;\n  task.id = id;\n  task.complete = false;\n  task.project = project;\n  taskCounter++;\n  allProjects[project].tasks.push(task);\n}\n\nfunction initProjects() {\n  if (allProjects.length == 0) {\n    createProject('Welcome');\n    createTask('eat', '0');\n  }\n}\n\nfunction createProjectDiv(proj) {\n  const projectContainer = document.getElementById('jumbotron');\n  const projectDiv = document.createElement('div');\n  projectDiv.setAttribute('id', 'project-' + proj.id + '-div');\n  projectDiv.setAttribute('class', 'project-div');\n  projectDiv.textContent = proj.description;\n  projectContainer.appendChild(projectDiv);\n  const taskUl = document.createElement('ul');\n  taskUl.setAttribute('id', 'task-ul-' + proj.id);\n  taskUl.setAttribute('class', 'task-ul');\n  projectDiv.appendChild(taskUl);\n  if (proj.tasks.length > 0) {\n    proj.tasks.forEach(createTaskListItems)\n  }\n  createAddTaskButton(proj);\n  createInputField(proj);\n}\n\nfunction createTaskListItems(task) {\n  const taskList = document.getElementById('task-ul-' + task.project);\n  const taskListItem = document.createElement('li');\n  taskListItem.setAttribute('id', 'task-list-item' + task.id);\n  var checkBox = document.createElement('span');\n  checkBox.setAttribute('id', 'task-list-checkbox-' + task.id);\n  checkBox.setAttribute('class', 'check-box');\n  if (task.complete == false ){\n    checkBox.textContent = '☐'\n  } else {\n    checkBox.textContent = '☑'\n  }\n  checkBox.addEventListener('click', toggleTask)\n  var taskListDescription = document.createElement('span');\n  taskListDescription.setAttribute('id', 'task-list-description-' + task.id);\n  taskListDescription.setAttribute('class', 'task-list-description')\n  taskListDescription.textContent = task.description;\n  if (task.complete == true) {\n    taskListDescription.setAttribute('class', 'task-list-description-complete')\n  };\n  taskList.appendChild(taskListItem);\n  taskListItem.appendChild(checkBox);\n  taskListItem.appendChild(taskListDescription);\n}\n\nfunction toggleTask() {\n  var currentTask;\n  var taskId = this.id.replace('task-list-checkbox-', '');\n  allProjects.forEach(p => {\n    currentTask = p.tasks.find( t => t.id == taskId )\n  });\n  if (this.textContent == \"☐\") {\n    currentTask.complete = true;\n    this.textContent = \"☑\";\n    this.parentElement.lastChild.setAttribute('class', 'task-list-description-complete');\n  }\n  else {\n    currentTask.complete = false;\n    this.textContent = \"☐\"\n    this.parentElement.lastChild.setAttribute('class', 'task-list-description')\n  }\n}\n\nfunction createAddTaskButton(project) {\n  const taskUl = document.getElementById('task-ul-' + project.id)\n  var addTaskLi = document.createElement('li');\n  addTaskLi.setAttribute('class', 'add-task-li');\n  addTaskLi.setAttribute('id', 'add-task-li-' + project.id)\n  taskUl.appendChild(addTaskLi);\n  const addTaskButton = document.createElement('button');\n  addTaskButton.setAttribute('class', 'add-task-button');\n  addTaskButton.setAttribute('id', 'add-task-button-' + project.id);\n  addTaskLi.appendChild(addTaskButton);\n  addTaskButton.innerHTML = '<svg width=\"13\" height=\"13\"><path d=\"M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>'\n  addTaskLabel = document.createElement('span');\n  addTaskLabel.setAttribute('class', 'add-task-label');\n  addTaskLabel.textContent = 'Add task';\n  addTaskLi.appendChild(addTaskLabel)\n  addTaskButton.addEventListener('click', toggleInputFieldOn)\n}\n\nfunction toggleInputFieldOn() {\n  this.parentElement.parentElement.lastChild.setAttribute('style', 'display: block')\n  this.parentElement.setAttribute('style',  'display: none');\n}\n\nfunction toggleInputFieldOff() {\n  console.log(this)\n  this.parentElement.parentElement.lastChild.setAttribute('style', 'display: none')\n  this.parentElement.previousSibling.setAttribute('style',  'display: block');\n  this.parentElement.firstChild.value = \"\"\n}\n\nfunction createInputField(project) {\n  const taskUl = document.getElementById('task-ul-' + project.id);\n  var addInputLi = document.createElement('li');\n  addInputLi.setAttribute('class', 'add-input-li');\n  addInputLi.setAttribute('id', 'add-input-li-project-' + project.id);\n  const taskInput = document.createElement('input');\n  taskInput.setAttribute('id', 'task-input-to-project-' + project.id);\n  taskInput.setAttribute('name', 'task-description')\n  const taskSaveButton = document.createElement('button');\n  taskSaveButton.setAttribute('id', 'save-to-project-' + project.id);\n  taskSaveButton.setAttribute('class', 'save-button');\n  taskSaveButton.textContent = 'Save';\n  taskSaveButton.addEventListener('click', saveNewTask);\n  taskSaveButton.addEventListener('click', toggleInputFieldOff);\n  const taskCancelButton = document.createElement('button');\n  taskCancelButton.setAttribute('id', 'cancel-add-to-project-' + project.id);\n  taskCancelButton.setAttribute('class', 'cancel-button');\n  taskCancelButton.textContent = 'Cancel';\n  taskCancelButton.addEventListener('click', toggleInputFieldOff)\n  taskUl.appendChild(addInputLi);\n  addInputLi.appendChild(taskInput);\n  addInputLi.appendChild(taskSaveButton);\n  addInputLi.appendChild(taskCancelButton);\n}\n\nfunction saveNewTask() {\n  var projectId = this.id.replace('save-to-project-', '');\n  var taskDesc = this.parentElement.firstChild.value;\n  var task = createTask(taskDesc, projectId);\n  displayProjects();\n}\n\nfunction clearProjects() {\n  var jumbotron = document.getElementById('jumbotron');\n  while (jumbotron.firstChild) {\n    jumbotron.removeChild(jumbotron.firstChild);\n  }\n}\n\nfunction displayProjects() {\n  clearProjects();\n  allProjects.forEach(createProjectDiv);\n}\n\ninitProjects();\ndisplayProjects();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;