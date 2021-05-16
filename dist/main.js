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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ \"./src/modules/logic.js\");\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initial-page-load */ \"./src/modules/initial-page-load.js\");\n\n\n\n\n(0,_modules_logic__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\n(0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_1__.buildProjectsHtml)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildProjectsHtml\": () => (/* binding */ buildProjectsHtml)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\n\nfunction buildProjectsHtml () {\n  let mainScreen = document.getElementById('jumbotron');\n  // create list to contain all projects as li and sublist for each set of tasks\n  const projectList = createHtmlElement('ul', 'project-list', 'project-list');\n  mainScreen.appendChild(projectList);\n  _logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(e => {\n    // create list item for each project\n    const project = createHtmlElement('li', 'project-li', 'project-li-' + e.id);\n    projectList.appendChild(project);\n    // create div for each project\n    const projectDiv = createHtmlElement('div', 'project-div', 'project-div-' + e.id);\n    project.appendChild(projectDiv);\n    // create project description as first li\n    const projectNameLi = createHtmlElement('li', 'project-name', 'project-name-' + e.id);\n    projectNameLi.textContent = e.title;\n    projectNameLi.innerHTML += '<hr style=\"margin-top: 1px; color: lightgray;\"></hr>'\n    projectDiv.appendChild(projectNameLi);\n    // create nested ul of tasks for each project\n    const projectUl = createHtmlElement('ul', 'project-task-list', 'project-task-list-' + e.id);\n    projectDiv.appendChild(projectUl);\n    // add li for each task within each nested ul\n    const projectTaskArray = buildTaskArray(e.id);\n    buildTaskList(projectTaskArray, projectUl);\n    // add li for adding a new task\n    const newTaskPrompt = createInputPrompt('task', e.id);\n    const newTaskForm = createInputForm('task', e.id);\n    projectUl.appendChild(newTaskPrompt);     \n    projectUl.appendChild(newTaskForm);\n\n  });\n  const addNewProject = createHtmlElement('li', 'project-li', 'add-new-project-li');\n  const addNewProjectDiv = createHtmlElement('div', 'project-div', 'add-new-project-div');\n  const addNewProjectUl = createHtmlElement('ul', 'add-project-ul', 'add-project-ul');\n  const addNewProjectPrompt = createInputPrompt('project', '0');\n  const addNewProjectForm = createInputForm('project', '0');\n  addNewProjectUl.appendChild(addNewProjectPrompt);\n  addNewProjectUl.appendChild(addNewProjectForm);\n  projectList.appendChild(addNewProject);\n  addNewProject.appendChild(addNewProjectDiv);\n  addNewProjectDiv.appendChild(addNewProjectUl);\n}\n\nfunction buildTaskList(projectTaskArray, projectUl) {\n  projectTaskArray.forEach(t => {\n    const checkbox = determineCheckboxStatus(t.complete);\n    const taskLi = createHtmlElement('li', 'task-description-li', 'task-description-li-' + t.id)\n    const checkBoxSpan = createHtmlElement('span', 'checkbox-span', 'checkbox-span-' + t.id);\n    checkBoxSpan.textContent = checkbox;\n    const taskTitleSpan = createHtmlElement('span', 'task-title-span', 'task-title-span-' + t.id);\n    taskTitleSpan.textContent = t.title;\n    const taskDescSpan = createHtmlElement('span', 'task-desc-span', 'task-desc-span-' + t.id);\n    taskDescSpan.textContent = t.description;\n    taskDescSpan.setAttribute('style', 'display: none');\n    const taskPrioritySpan = createHtmlElement('span', 'task-priority-span', 'task-priority-span-' + t.id);\n    taskPrioritySpan.textContent = t.priority;\n    taskPrioritySpan.setAttribute('style', 'display: none');\n    const taskDueDateSpan = createHtmlElement('span', 'task-due-date-span', 'task-due-date-span-' + t.id);\n    taskDueDateSpan.textContent = t.dueDate;\n    taskDueDateSpan.setAttribute('style', 'display: none');\n    const deleteButton = createHtmlElement('button', 'delete-button', 'delete-button-' + t.id);\n    const deleteSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>';\n    deleteButton.innerHTML = deleteSVG;\n    const editButton = createHtmlElement('button', 'action-button', 'edit-button-' + t.id);\n    const editSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>';\n    editButton.innerHTML = editSVG;\n    const viewButton = createHtmlElement('button', 'action-button view', 'view-button-' + t.id);\n    const viewSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-eye\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>';\n    viewButton.innerHTML = viewSVG;\n    viewButton.addEventListener('click', displayTaskDetails)\n    if (t.complete) {\n      taskLi.setAttribute('class', 'task-description-li complete');\n      taskTitleSpan.setAttribute('class', 'task-span complete');\n      checkBoxSpan.setAttribute('class', 'checkbox-span complete')\n    };\n    checkBoxSpan.addEventListener('click', toggleCompletion);\n    projectUl.appendChild(taskLi);\n    taskLi.appendChild(checkBoxSpan);\n    taskLi.appendChild(taskTitleSpan);\n    taskLi.appendChild(taskDescSpan);\n    taskLi.appendChild(taskPrioritySpan);\n    taskLi.appendChild(taskDueDateSpan);\n    taskLi.appendChild(viewButton);\n    taskLi.appendChild(editButton);\n    taskLi.appendChild(deleteButton);\n  })\n}\n\nfunction displayTaskDetails() {\n  var taskId = this.id.replace('view-button-', '');\n  this.parentNode.childNodes.forEach(cn => { cn.setAttribute('style', 'display: inline-block')});\n}\n\nfunction createInputPrompt(formObjectType, formObjectId) {\n  const thisPromptLi = createHtmlElement('li', 'add-' + formObjectType + '-li', 'add-' + formObjectType + '-li-' + formObjectId);\n    const addButton = createHtmlElement('span', 'add-' + formObjectType + '-button-span', 'add-' + formObjectType + '-button-span-' + formObjectId);\n    addButton.innerHTML = '<svg width=\"13\" height=\"13\"><path d=\"M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>'\n    addButton.addEventListener('click', toggleInputFieldOn)\n    const addDesc = createHtmlElement('span', 'add-' + formObjectType + '-desc-span', 'add-' + formObjectType + '-desc-span-' + formObjectId);\n    addDesc.textContent = \"Add \" + formObjectType;\n    thisPromptLi.appendChild(addButton);\n    thisPromptLi.appendChild(addDesc);\n    return thisPromptLi;\n  }\n  \n  function createInputForm(formObjectType, formObjectId) {\n    const thisFormLi = createHtmlElement('li', 'add-' + formObjectType + '-form-li', 'add-' + formObjectType + '-form-li-' + formObjectId);\n    thisFormLi.setAttribute('style', 'display: none');\n    const addFormTitleInput = createHtmlElement('input', 'add-' + formObjectType + '-form-title-input', 'add-' + formObjectType + '-form-title-input-' + formObjectId);\n    addFormTitleInput.setAttribute('type', 'text');\n    addFormTitleInput.setAttribute('name', 'new-' + formObjectType + '-title');\n    addFormTitleInput.setAttribute('placeholder', 'Title');\n    const addFormDescriptionInput = createHtmlElement('input', 'add-' + formObjectType + '-form-description-input', 'add-' + formObjectType + '-form-description-input-' + formObjectId);\n    addFormDescriptionInput.setAttribute('type', 'text');\n    addFormDescriptionInput.setAttribute('name', 'new-' + formObjectType + '-description');\n    addFormDescriptionInput.setAttribute('placeholder', 'Description');\n    const priorityInput = createHtmlElement('select', 'select-' + formObjectType + '-priority', 'select-' + formObjectType + '-priority-' + formObjectId);\n    const optionP1 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-1-project-' + formObjectId);\n    optionP1.textContent = 'Priority 1';\n    const optionP2 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-2-project-' + formObjectId);\n    optionP2.textContent = 'Priority 2';\n    const optionP3 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-3-project-' + formObjectId);\n    optionP3.textContent = 'Priority 3';\n    priorityInput.appendChild(optionP1);\n    priorityInput.appendChild(optionP2);    \n    priorityInput.appendChild(optionP3);\n    const dueDateInput = createHtmlElement('input', 'input-date', 'input-date-' + formObjectId);\n    dueDateInput.setAttribute('type', 'date');\n    dueDateInput.setAttribute('name', 'due-date');\n    var today = new Date().toISOString().substr(0,10);\n    dueDateInput.setAttribute('value', today);\n    const addFormSubmitButton = createHtmlElement('input', 'button submit-button', 'submit-button-' + formObjectId);\n    addFormSubmitButton.setAttribute('type', 'submit');\n    addFormSubmitButton.setAttribute('value', 'Save');\n    if (formObjectType == 'task') {\n      addFormSubmitButton.addEventListener('click', saveNewTask);\n    } else {\n      addFormSubmitButton.addEventListener('click', saveNewProject);\n    }\n    const addFormCancelButton = createHtmlElement('input', 'button cancel-button', 'cancel-button-' + formObjectType + '-' + formObjectId);\n    addFormCancelButton.setAttribute('value', 'Cancel');\n    addFormCancelButton.setAttribute('type', 'button');\n    addFormCancelButton.addEventListener('click', toggleInputFieldOff);\n    thisFormLi.appendChild(addFormTitleInput);\n    if (formObjectType == 'task') {\n      thisFormLi.appendChild(addFormDescriptionInput);\n      thisFormLi.appendChild(priorityInput);\n      thisFormLi.appendChild(dueDateInput);\n    };\n    thisFormLi.appendChild(addFormSubmitButton);\n    thisFormLi.appendChild(addFormCancelButton);\n    return thisFormLi;\n}\n\nfunction saveNewTask() {\n  var projectId = this.id.replace('submit-button-', '');\n  var newTaskTitle = document.getElementById('add-task-form-title-input-' + projectId).value;\n  var newTaskDescription = document.getElementById('add-task-form-description-input-' + projectId).value;\n  var newTaskPriority = document.getElementById('select-task-priority-'+ projectId).value;\n  var newTaskDueDate = document.getElementById('input-date-' + projectId).value;\n  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(newTaskTitle, newTaskDescription, newTaskPriority, newTaskDueDate, projectId);\n  clearJumbotron();\n  buildProjectsHtml();\n}\n\nfunction saveNewProject() {\n  var newTaskDescription = document.getElementById('add-project-form-title-input-0').value;\n  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)(newTaskDescription);\n  clearJumbotron();\n  buildProjectsHtml();\n}\n\nfunction toggleInputFieldOn() {\n  var inputFieldType;\n  if (this.id.includes('project')) { inputFieldType = 'project' } else { inputFieldType = 'task'};\n  const projectId = this.id.replace('add-' + inputFieldType + '-button-span-', '');\n  document.getElementById('add-' + inputFieldType + '-button-span-' + projectId).setAttribute('style', 'display: none');\n  document.getElementById('add-' + inputFieldType + '-desc-span-' + projectId).setAttribute('style', 'display: none');\n  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: inline-flex')\n}\n\nfunction toggleInputFieldOff() {\n  var inputFieldType;\n  if (this.id.includes('project')) { inputFieldType = 'project' } else { inputFieldType = 'task'};\n  const projectId = this.id.replace('cancel-button-' + inputFieldType + '-', '');\n  document.getElementById('add-' + inputFieldType + '-button-span-' + projectId).setAttribute('style', 'display: inline');\n  document.getElementById('add-' + inputFieldType + '-desc-span-' + projectId).setAttribute('style', 'display: inline');\n  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: none')\n}\n\nfunction createHtmlElement(elementName, elementClass, elementId) {\n  const newElement = document.createElement(elementName);\n  newElement.setAttribute('class', elementClass);\n  newElement.setAttribute('id', elementId);\n  return newElement;\n}\n\nfunction toggleCompletion() {\n  var taskId = this.id.replace('checkbox-span-', '');\n  (0,_logic__WEBPACK_IMPORTED_MODULE_0__.toggleTaskComplete)(taskId);\n  clearJumbotron();\n  buildProjectsHtml();\n}\n\nfunction clearJumbotron() {\n  const parent = document.getElementById('jumbotron');\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction buildTaskArray(id) {\n  var array = [];\n  _logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.forEach(t => {\n    if (t.project == id) {\n      array.push(t)\n    }\n  });\n  return array;\n}\n\nfunction determineCheckboxStatus(complete) {\n  if (complete == true) {\n    return \"☑\"\n  } else {\n    return \"☐\"\n  }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"allTasks\": () => (/* binding */ allTasks),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"initProjects\": () => (/* binding */ initProjects),\n/* harmony export */   \"toggleTaskComplete\": () => (/* binding */ toggleTaskComplete),\n/* harmony export */   \"getTask\": () => (/* binding */ getTask)\n/* harmony export */ });\nlet projectCounter = 0;\nlet taskCounter = 0;\nlet allProjects = [];\nlet allTasks = [];\n\nfunction createProject(title, id=projectCounter) {\n  let project = Object.create(createProject.prototype);\n  project.id = id;\n  project.title = title;\n  project.complete = false;\n  project.tasks = [];\n  projectCounter++;\n  allProjects.push(project);\n  return project;\n}\n\nfunction createTask(title, description, priority, dueDate, project, id=taskCounter) {\n  let task = Object.create(createTask.prototype);\n  task.title = title;\n  task.description = description;\n  task.priority = priority;\n  task.dueDate = dueDate;\n  task.id = id;\n  task.complete = false;\n  task.project = project;\n  allTasks.push(task)\n  taskCounter++;\n}\n\nfunction initProjects() {\n  if (allProjects.length == 0) {\n    createProject('Welcome');\n  }\n}\n\nfunction toggleTaskComplete(taskId) {\n  var task = allTasks.find(t => t.id == taskId)\n  if (task.complete == true) { task.complete = false } else { task.complete = true };\n}\n\nfunction getTask(taskId) {\n  return allTasks.find(t => t.id == taskId)\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/logic.js?");

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