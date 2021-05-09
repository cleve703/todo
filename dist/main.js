/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initial-page-load */ \"./src/modules/initial-page-load.js\");\n\n\n\n\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\n(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_1__.buildProjectsHtml)();\n\n// function buildProjectDiv(proj) {\n//   const projectContainer = document.getElementById('jumbotron');\n//   const projectDiv = document.createElement('div');\n//   projectDiv.setAttribute('id', 'project-' + proj.id + '-div');\n//   projectDiv.setAttribute('class', 'project-div');\n//   projectDiv.textContent = proj.description;\n//   projectContainer.appendChild(projectDiv);\n//   const taskUl = document.createElement('ul');\n//   taskUl.setAttribute('id', 'task-ul-' + proj.id);\n//   taskUl.setAttribute('class', 'task-ul');\n//   projectDiv.appendChild(taskUl);\n//   if (proj.tasks.length > 0) {\n//     proj.tasks.forEach(buildTaskListItems)\n//   }\n//   createAddTaskButton(proj);\n//   createInputField(proj);\n// }\n\n// function buildTaskListItems(task) {\n//   const taskList = document.getElementById('task-ul-' + task.project);\n//   const taskListItem = document.createElement('li');\n//   taskListItem.setAttribute('id', 'task-list-item' + task.id);\n//   var checkBox = document.createElement('span');\n//   checkBox.setAttribute('id', 'task-list-checkbox-' + task.id);\n//   checkBox.setAttribute('class', 'check-box');\n//   if (task.complete == false ){\n//     checkBox.textContent = '☐'\n//   } else {\n//     checkBox.textContent = '☑'\n//   }\n//   checkBox.addEventListener('click', toggleTask)\n//   var taskListDescription = document.createElement('span');\n//   taskListDescription.setAttribute('id', 'task-list-description-' + task.id);\n//   taskListDescription.setAttribute('class', 'task-list-description')\n//   taskListDescription.textContent = task.description;\n//   if (task.complete == true) {\n//     taskListDescription.setAttribute('class', 'task-list-description-complete')\n//   };\n//   taskList.appendChild(taskListItem);\n//   taskListItem.appendChild(checkBox);\n//   taskListItem.appendChild(taskListDescription);\n// }\n\n// function toggleTask() {\n//   var currentTask;\n//   var taskId = this.id.replace('task-list-checkbox-', '');\n//   allProjects.forEach(p => {\n//     if (p.tasks.find(t=> t.id != null))\n//     {currentTask = p.tasks.find( t => t.id == taskId )}\n//   });\n//   if (this.textContent == \"☐\") {\n//     currentTask.complete = true;\n//     this.textContent = \"☑\";\n//     this.parentElement.lastChild.setAttribute('class', 'task-list-description-complete');\n//   }\n//   else {\n//     currentTask.complete = false;\n//     this.textContent = \"☐\"\n//     this.parentElement.lastChild.setAttribute('class', 'task-list-description')\n//   }\n// }\n\n// function createAddTaskButton(project) {\n//   const taskUl = document.getElementById('task-ul-' + project.id)\n//   var addTaskLi = document.createElement('li');\n//   addTaskLi.setAttribute('class', 'add-task-li');\n//   addTaskLi.setAttribute('id', 'add-task-li-' + project.id)\n//   taskUl.appendChild(addTaskLi);\n//   const addTaskButton = document.createElement('button');\n//   addTaskButton.setAttribute('class', 'add-task-button');\n//   addTaskButton.setAttribute('id', 'add-task-button-' + project.id);\n//   addTaskLi.appendChild(addTaskButton);\n//   addTaskButton.innerHTML = '<svg width=\"13\" height=\"13\"><path d=\"M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>'\n//   addTaskLabel = document.createElement('span');\n//   addTaskLabel.setAttribute('class', 'add-task-label');\n//   addTaskLabel.textContent = 'Add task';\n//   addTaskLi.appendChild(addTaskLabel)\n//   addTaskButton.addEventListener('click', toggleInputFieldOn)\n// }\n\n// function toggleInputFieldOn() {\n//   this.parentElement.parentElement.lastChild.setAttribute('style', 'display: block')\n//   this.parentElement.setAttribute('style',  'display: none');\n// }\n\n// function toggleInputFieldOff() {\n//   console.log(this)\n//   this.parentElement.parentElement.lastChild.setAttribute('style', 'display: none')\n//   this.parentElement.previousSibling.setAttribute('style',  'display: block');\n//   this.parentElement.firstChild.value = \"\"\n// }\n\n// function createInputField(project) {\n//   const taskUl = document.getElementById('task-ul-' + project.id);\n//   var addInputLi = document.createElement('li');\n//   addInputLi.setAttribute('class', 'add-input-li');\n//   addInputLi.setAttribute('id', 'add-input-li-project-' + project.id);\n//   const taskInput = document.createElement('input');\n//   taskInput.setAttribute('id', 'task-input-to-project-' + project.id);\n//   taskInput.setAttribute('name', 'task-description')\n//   const taskSaveButton = createSaveButton('save-to-project-' + project.id);\n//   taskSaveButton.addEventListener('click', saveNewTask);\n//   taskSaveButton.addEventListener('click', toggleInputFieldOff);\n//   const taskCancelButton = createCancelButton('cancel-add-to-project-' + project.id);\n//   taskCancelButton.addEventListener('click', toggleInputFieldOff)\n//   taskUl.appendChild(addInputLi);\n//   addInputLi.appendChild(taskInput);\n//   addInputLi.appendChild(taskSaveButton);\n//   addInputLi.appendChild(taskCancelButton);\n// }\n\n// function createAddProjectDiv() {\n//   const projectContainer = document.getElementById('jumbotron');\n//   const addProjectDiv = document.createElement('div');\n//   addProjectDiv.setAttribute('class', 'project-div');\n//   addProjectDiv.setAttribute('id', 'add-project-div');\n//   projectContainer.appendChild(addProjectDiv);\n//   const projectInput = document.createElement('input');\n//   projectInput.setAttribute('id', 'new-project-input');\n//   projectInput.setAttribute('name', 'project-description');\n//   const saveProjectButton = createSaveButton('new-project');\n//   const cancelProjectButton = createCancelButton('new-project')\n//   addProjectDiv.appendChild(projectInput);\n//   addProjectDiv.appendChild(saveProjectButton);\n//   addProjectDiv.appendChild(cancelProjectButton);\n//   saveProjectButton.addEventListener('click', saveNewProject);\n// }\n\n// function saveNewProject() {\n//   var projectDesc = this.parentElement.firstChild.value;\n//   var task = createProject(projectDesc);\n//   displayProjects();\n// }\n\n// function createSaveButton(id) {\n//   taskSaveButton = document.createElement('button')\n//   taskSaveButton.setAttribute('id', id);\n//   taskSaveButton.setAttribute('class', 'save-button');\n//   taskSaveButton.textContent = 'Save';\n//   return taskSaveButton;\n// }\n\n// function createCancelButton(id) {\n//   taskCancelButton = document.createElement('button')\n//   taskCancelButton.setAttribute('id', id);\n//   taskCancelButton.setAttribute('class', 'cancel-button');\n//   taskCancelButton.textContent = 'Cancel';\n//   return taskCancelButton;\n// }\n\n// function saveNewTask() {\n//   var projectId = this.id.replace('save-to-project-', '');\n//   var taskDesc = this.parentElement.firstChild.value;\n//   var task = createTask(taskDesc, projectId);\n//   displayProjects();\n// }\n\n// function clearProjects() {\n//   var jumbotron = document.getElementById('jumbotron');\n//   while (jumbotron.firstChild) {\n//     jumbotron.removeChild(jumbotron.firstChild);\n//   }\n// }\n\n// function displayProjects() {\n//   clearProjects();\n//   allProjects.forEach(buildProjectDiv);\n//   createAddProjectDiv()\n// }\n\n// initProjects();\n// displayProjects();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildProjectsHtml\": () => (/* binding */ buildProjectsHtml)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\n\nfunction buildProjectsHtml () {\n  let mainScreen = document.getElementById('jumbotron');\n  _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(e => {\n    const projectList = document.createElement('ul');\n    projectList.setAttribute('id', 'project-list');\n    projectList.setAttribute('class', 'project-list');\n    mainScreen.appendChild(projectList);\n    // create div for each project\n    const projectDiv = document.createElement('div');\n    projectDiv.setAttribute('class', 'project-div');\n    projectDiv.setAttribute('id', 'project-div-' + e.id);\n    projectList.appendChild(projectDiv);\n    // create unordered list for each project\n    const project = document.createElement('li');\n    project.setAttribute('id', 'project-li-' + e.id);\n    project.setAttribute('class', 'project-li');\n    projectDiv.appendChild(project);\n    // create project description as first li\n    const projectName = e.description;\n    const projectNameLi = document.createElement('li');\n    projectNameLi.setAttribute('class', 'project-name');\n    projectNameLi.setAttribute('id', 'project-name-' + e.id);\n    projectNameLi.textContent = projectName;\n    project.appendChild(projectNameLi);\n    // create nested ul of tasks for each project\n    const projectTaskArray = buildTaskArray(e.id);\n    const projectUl = document.createElement('ul');\n    projectUl.setAttribute('class', 'project-task-list');\n    projectUl.setAttribute('id', 'project-task-list-' + e.id);\n    project.appendChild(projectUl);\n    // add li for each task within each nested ul\n    projectTaskArray.forEach(t => {\n      const checkbox = determineCheckboxStatus(t.complete);\n      const taskLi = document.createElement('li');\n      taskLi.setAttribute('class', 'task-description-li');\n      taskLi.setAttribute('id', 'task-description-li-' + t.id);\n      const checkBoxSpan = document.createElement('span');\n      checkBoxSpan.setAttribute('class', 'checkbox-span');\n      checkBoxSpan.setAttribute('id', 'checkbox-span-' + t.id);\n      checkBoxSpan.textContent = checkbox;\n      const taskSpan = document.createElement('span');\n      taskSpan.setAttribute('class', 'task-span');\n      taskSpan.setAttribute('id', 'id-span-' + t.id);\n      taskSpan.textContent = t.description;\n      if (t.complete) {\n        taskLi.setAttribute('class', 'task-description-li complete');\n        taskSpan.setAttribute('class', 'task-span complete');\n        checkBoxSpan.setAttribute('class', 'checkbox-span complete')\n      };\n      taskLi.addEventListener('click', toggleCompletion);\n      projectUl.appendChild(taskLi);\n      taskLi.appendChild(checkBoxSpan);\n      taskLi.appendChild(taskSpan);\n    })\n    mainScreen.appendChild(projectDiv);\n  });\n}\n\nfunction toggleCompletion() {\n  var taskId = this.id.replace('task-description-li-', '');\n  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.toggleTaskComplete)(taskId);\n  clearJumbotron();\n  buildProjectsHtml();\n}\n\nfunction clearJumbotron() {\n  const parent = document.getElementById('jumbotron');\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction buildTaskArray(id) {\n  var array = [];\n  _logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.forEach(t => {\n    if (t.project == id) {\n      array.push(t)\n    }\n  });\n  return array;\n}\n\nfunction determineCheckboxStatus(t) {\n  if (t == true) {\n    return \"☑\"\n  } else {\n    return \"☐\"\n  }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"allTasks\": () => (/* binding */ allTasks),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"initProjects\": () => (/* binding */ initProjects),\n/* harmony export */   \"toggleTaskComplete\": () => (/* binding */ toggleTaskComplete)\n/* harmony export */ });\nlet projectCounter = 0;\nlet taskCounter = 0;\nlet allProjects = [];\nlet allTasks = [];\n\nfunction createProject(description, id=projectCounter) {\n  let project = Object.create(createProject.prototype);\n  project.id = id;\n  project.description = description;\n  project.complete = false;\n  project.tasks = [];\n  projectCounter++;\n  allProjects.push(project);\n  return project;\n}\n\nfunction createTask(description, project, id=taskCounter) {\n  let task = Object.create(createTask.prototype);\n  task.description = description;\n  task.id = id;\n  task.complete = false;\n  task.project = project;\n  allTasks.push(task)\n  taskCounter++;\n}\n\nfunction initProjects() {\n  if (allProjects.length == 0) {\n    createProject('Welcome');\n    createTask('eat', '0');\n    createTask('sleep', '0');\n    createProject('Exercise');\n    createTask('pushups', '1');\n    createTask('pullups', '1');\n  }\n}\n\nfunction toggleTaskComplete(taskId) {\n  var task = allTasks.find(t => t.id == taskId)\n  if (task.complete == true) { task.complete = false } else { task.complete = true };\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;