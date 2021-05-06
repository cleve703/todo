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

eval("let projectCounter = 0;\nlet taskCounter = 0;\nlet allProjects = [];\n\ncreateProject.prototype.f = function() {};\n\nfunction createProject(description, id=projectCounter) {\n  let project = Object.create(createProject.prototype);\n  project.id = id;\n  project.description = description;\n  project.complete = false;\n  project.tasks = [];\n  projectCounter++;\n  allProjects.push(project);\n  return project;\n}\n\ncreateTask.prototype.f = function() {};\n\nfunction createTask(description, project, id=taskCounter) {\n  let task = Object.create(createTask.prototype)\n  task.description = description;\n  task.id = id;\n  task.complete = false;\n  task.project = project;\n  taskCounter++;\n  allProjects[project].tasks.push(task);\n}\n\nfunction initProjects() {\n  if (allProjects.length == 0) {\n    createProject('Welcome');\n    createTask('eat', '0');\n  }\n}\n\nfunction createProjectDiv(desc) {\n  const projectContainer = document.getElementById('jumbotron');\n  const projectDiv = document.createElement('div');\n  projectDiv.setAttribute('id', 'project-' + desc.id + '-div');\n  projectDiv.setAttribute('class', 'project-div');\n  projectDiv.textContent = desc.description;\n  projectContainer.appendChild(projectDiv);\n  const taskUl = document.createElement('ul');\n  taskUl.setAttribute('id', 'task-ul-' + desc.id);\n  taskUl.setAttribute('class', 'task-ul');\n  projectDiv.appendChild(taskUl);\n  if (desc.tasks.length > 0) {\n    desc.tasks.forEach(createTaskListItems)\n  }\n  createAddTaskButton(desc);\n  createInputField(desc);\n}\n\nfunction createTaskListItems(task) {\n  const taskList = document.getElementById('task-ul-' + task.project);\n  const taskListItem = document.createElement('li');\n  taskListItem.setAttribute('id', 'task-list-item' + task.id);\n  taskListItem.textContent = '☐ ' + task.description;\n  taskList.appendChild(taskListItem);\n}\n\nfunction createAddTaskButton(project) {\n  const taskUl = document.getElementById('task-ul-' + project.id)\n  var addTaskLi = document.createElement('li');\n  addTaskLi.setAttribute('class', 'add-task-li');\n  addTaskLi.setAttribute('id', 'add-task-li-' + project.id)\n  taskUl.appendChild(addTaskLi);\n  const addTaskButton = document.createElement('button');\n  addTaskButton.setAttribute('class', 'add-task-button');\n  addTaskButton.setAttribute('id', 'add-task-button-' + project.id);\n  addTaskLi.appendChild(addTaskButton);\n  addTaskButton.innerHTML = '<svg width=\"13\" height=\"13\"><path d=\"M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>'\n  addTaskLabel = document.createElement('span');\n  addTaskLabel.setAttribute('class', 'add-task-label');\n  addTaskLabel.textContent = 'Add task';\n  addTaskLi.appendChild(addTaskLabel)\n  addTaskButton.addEventListener('click', toggleInputFieldOn)\n}\n\nfunction toggleInputFieldOn() {\n  this.parentElement.parentElement.lastChild.setAttribute('style', 'display: block')\n  this.parentElement.setAttribute('style',  'display: none');\n}\n\nfunction toggleInputFieldOff() {\n  this.parentElement.parentElement.lastChild.setAttribute('style', 'display: none')\n  this.parentElement.previousSibling.setAttribute('style',  'display: block');\n}\n\nfunction createInputField(project) {\n  const taskUl = document.getElementById('task-ul-' + project.id)\n  var addInputLi = document.createElement('li');\n  addInputLi.setAttribute('class', 'add-input-li');\n  addInputLi.setAttribute('id', 'add-input-li-project-' + project.id)\n  const taskInput = document.createElement('input');\n  taskInput.setAttribute('id', 'task-input-to-project-' + project.id)\n  const taskSaveButton = document.createElement('button');\n  taskSaveButton.setAttribute('id', 'save-to-project-' + project.id);\n  taskSaveButton.setAttribute('class', 'save-button');\n  taskSaveButton.textContent = 'Save';\n  const taskCancelButton = document.createElement('button');\n  taskCancelButton.setAttribute('id', 'cancel-add-to-project-' + project.id);\n  taskCancelButton.setAttribute('class', 'cancel-button');\n  taskCancelButton.textContent = 'Cancel';\n  taskCancelButton.addEventListener('click', toggleInputFieldOff)\n  taskUl.appendChild(addInputLi);\n  addInputLi.appendChild(taskInput);\n  addInputLi.appendChild(taskSaveButton);\n  addInputLi.appendChild(taskCancelButton);\n}\n\nfunction displayProjects() {\n  allProjects.forEach(createProjectDiv);\n}\n\ninitProjects();\ndisplayProjects();\n\n//# sourceURL=webpack://todo/./src/index.js?");

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