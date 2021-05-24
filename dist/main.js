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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_object_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/object-logic */ \"./src/modules/object-logic.js\");\n/* harmony import */ var _modules_html_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/html-builder */ \"./src/modules/html-builder.js\");\n\n\n\n\n(0,_modules_object_logic__WEBPACK_IMPORTED_MODULE_0__.initProjects)();\n(0,_modules_html_builder__WEBPACK_IMPORTED_MODULE_1__.buildProjectsHtml)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/html-builder.js":
/*!*************************************!*\
  !*** ./src/modules/html-builder.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildProjectsHtml\": () => (/* binding */ buildProjectsHtml)\n/* harmony export */ });\n/* harmony import */ var _object_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-logic */ \"./src/modules/object-logic.js\");\n/* harmony import */ var _object_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-helpers */ \"./src/modules/object-helpers.js\");\n\n\n\n\nfunction buildProjectsHtml () {\n  const mainScreen = document.getElementById('jumbotron');\n  // create list to contain all projects as li and sublist for each set of tasks\n  const projectList = createHtmlElement('ul', 'project-list', 'project-list');\n  const projectSelectorList = document.getElementById('project-selector');\n  const projectLinkAll = createHtmlElement('li', 'project-link display', 'project-link-all');\n  projectLinkAll.textContent = 'View all projects';\n  projectLinkAll.addEventListener('click', filterProjectList)\n  projectSelectorList.appendChild(projectLinkAll);\n  mainScreen.appendChild(projectList);\n  \n  _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(e => {\n    // create link for left-menu\n    const projectLink = createHtmlElement('li', 'project-link display', 'project-link-' + e.id);\n    projectLink.textContent = e.title;\n    projectLink.addEventListener('click', filterProjectList);\n    if (e.display == true) {\n      projectLink.className = 'project-link display'\n      console.log(projectLink.class);\n    } else {\n      projectLink.className = 'project-link'\n    };\n    projectSelectorList.appendChild(projectLink);\n    if (e.display == true) {\n      // create list item for each project\n      const project = createHtmlElement('li', 'project-li', 'project-li-' + e.id);\n      projectList.appendChild(project);\n  \n      // create div for each project\n      const projectDiv = createHtmlElement('div', 'project-div', 'project-div-' + e.id);\n      project.appendChild(projectDiv);\n  \n      // create project description as span\n      const projectNameSpan = createHtmlElement('span', 'project-name', 'project-name-' + e.id);\n      projectNameSpan.textContent = e.title;\n      projectDiv.appendChild(projectNameSpan);\n      \n      // create edit icon for each project\n      const editButton = createHtmlElement('button', 'edit-button', 'edit-project-button-' + e.id);\n      const editSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>';\n      editButton.innerHTML = editSVG;\n      editButton.addEventListener('click', editProjectButton);\n  \n      // create delete icon for each project\n      const deleteButton = createHtmlElement('button', 'delete-button', 'delete-project-button-' + e.id);\n      const deleteSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>';\n      deleteButton.innerHTML = deleteSVG;\n      deleteButton.addEventListener('click', deleteProjectButton);\n      \n      projectDiv.appendChild(editButton);\n      projectDiv.appendChild(deleteButton);\n      const projectHR = createHtmlElement('hr', 'project-hr', 'project-hr-' + e.id);\n      projectDiv.appendChild(projectHR);\n      // create nested ul of tasks for each project\n      const projectUl = createHtmlElement('ul', 'project-task-list', 'project-task-list-' + e.id);\n      projectDiv.appendChild(projectUl);\n      // add li for each task within each nested ul\n      const projectTaskArray = buildTaskArray(e.id);\n      buildTaskList(projectTaskArray, projectUl);\n      // add li for adding a new task\n      const newTaskPrompt = createInputPrompt('task', e.id);\n      const newTaskForm = createInputForm('task', e.id);\n      projectUl.appendChild(newTaskPrompt);     \n      projectUl.appendChild(newTaskForm);\n    }\n\n  });\n  const addNewProject = createHtmlElement('li', 'project-li', 'add-new-project-li');\n  const addNewProjectDiv = createHtmlElement('div', 'project-div', 'add-new-project-div');\n  const addNewProjectUl = createHtmlElement('ul', 'add-project-ul', 'add-project-ul');\n  const addNewProjectPrompt = createInputPrompt('project', '0');\n  const addNewProjectForm = createInputForm('project', '0');\n  addNewProjectUl.appendChild(addNewProjectPrompt);\n  addNewProjectUl.appendChild(addNewProjectForm);\n  projectList.appendChild(addNewProject);\n  addNewProject.appendChild(addNewProjectDiv);\n  addNewProjectDiv.appendChild(addNewProjectUl);\n}\n\nfunction editProjectButton() {\n  var projectId = this.id.replace('edit-project-button-', '');\n  var projectNameField = document.getElementById('project-name-' + projectId);\n  projectNameField.setAttribute('contenteditable', 'true');\n  projectNameField.focus();\n  projectNameField.addEventListener('keypress', function (e) {\n    if (e.key === 'Enter') {\n      var newProjectName = projectNameField.innerHTML;\n      (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.modifyProject)(projectId, newProjectName);\n      clearAll();\n      buildProjectsHtml();\n      (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n\n    }\n  });\n};\n\nfunction deleteProjectButton() {\n  var projectId = this.id.replace('delete-project-button-', '');\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(projectId);\n  clearAll();\n  buildProjectsHtml();\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n\n}\n\nfunction filterProjectList() { \n  const selector = this.id.replace('project-link-','');\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.projectDisplayToggle)(selector);\n  clearAll();\n  buildProjectsHtml();\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n\n}\n\nfunction buildTaskList(projectTaskArray, projectUl) {\n  projectTaskArray.forEach(t => {\n    const checkbox = determineCheckboxStatus(t.complete);\n    const taskLi = createTaskLi(t) \n    const checkBoxSpan = createHtmlElement('span', 'checkbox-span', 'checkbox-span-' + t.id);\n    checkBoxSpan.textContent = checkbox;\n    const taskTitleSpan = createHtmlElement('span', 'task-title-span task-span', 'task-title-span-' + t.id);\n    taskTitleSpan.textContent = t.title;\n    const taskDescSpan = createHtmlElement('span', 'task-desc-span task-span', 'task-desc-span-' + t.id);\n    taskDescSpan.textContent = t.description;\n    // taskDescSpan.setAttribute('style', 'display: none');\n    const taskPrioritySpan = createHtmlElement('span', 'task-priority-span task-span', 'task-priority-span-' + t.id);\n    taskPrioritySpan.textContent = t.priority;\n    if (t.priority == 'Priority 1') {\n      taskLi.className += ' priority-one'\n    } else if (t.priority == 'Priority 2') {\n      taskLi.className += ' priority-two'\n    } else if (t.priority == 'Priority 3') {\n      taskLi.className += ' priority-three'\n    }\n    // taskPrioritySpan.setAttribute('style', 'display: none');\n    const taskDueDateSpan = createHtmlElement('span', 'task-due-date-span task-span', 'task-due-date-span-' + t.id);\n    taskDueDateSpan.textContent = t.dueDate;\n    // taskDueDateSpan.setAttribute('style', 'display: none');\n    // create delete button for each task\n    const deleteButton = createHtmlElement('button', 'delete-button', 'delete-button-' + t.id);\n    const deleteSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-trash-2\"><polyline points=\"3 6 5 6 21 6\"></polyline><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"></path><line x1=\"10\" y1=\"11\" x2=\"10\" y2=\"17\"></line><line x1=\"14\" y1=\"11\" x2=\"14\" y2=\"17\"></line></svg>';\n    deleteButton.innerHTML = deleteSVG;\n    deleteButton.addEventListener('click', deleteTaskButton);\n    // create edit button for each task\n    const editButton = createHtmlElement('button', 'action-button', 'edit-button-' + t.id);\n    const editSVG = '<svg xmlns=\"http://www.w3.org/20 00/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit\"><path d=\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"></path><path d=\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z\"></path></svg>';\n    editButton.innerHTML = editSVG;\n    editButton.addEventListener('click', displayEditForm);\n\n    const viewButton = createHtmlElement('button', 'action-button view', 'view-button-' + t.id);\n    const viewSVG = '<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-eye\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>';\n    viewButton.innerHTML = viewSVG;\n    viewButton.addEventListener('click', displayTaskDetails);\n    if (t.complete) {\n      // taskLi.setAttribute('class', 'task-description-li complete');\n      taskTitleSpan.className += ' complete';\n      checkBoxSpan.setAttribute('class', 'checkbox-span complete')\n    };\n    checkBoxSpan.addEventListener('click', toggleCompletion);\n    projectUl.appendChild(taskLi);\n    taskLi.appendChild(checkBoxSpan);\n    taskLi.appendChild(taskTitleSpan);\n    taskLi.appendChild(taskDescSpan);\n    taskLi.appendChild(taskPrioritySpan);\n    taskLi.appendChild(taskDueDateSpan);\n    taskLi.appendChild(viewButton);\n    taskLi.appendChild(editButton);\n    taskLi.appendChild(deleteButton);\n  })\n}\n\nfunction createTaskLi(t) {\n  var taskLi;\n  if (t.displayDetails == false) {\n    taskLi = createHtmlElement('li', 'task-description-li hide-details', 'task-description-li-' + t.id);\n  } else {\n    taskLi = createHtmlElement('li', 'task-description-li show-details', 'task-description-li-' + t.id);\n  }\n  if (t.complete == true) {\n    taskLi.className += ' complete';\n  }\n  return taskLi;\n}\nfunction displayEditForm() {\n  const taskId = this.id.replace('edit-button-','');\n  const taskLi = this.parentNode;\n  const taskUl = taskLi.parentNode;\n  const editForm = createEditForm('task', taskId);\n  taskUl.appendChild(editForm);\n  this.removeEventListener('click', displayEditForm);\n}\n\nfunction displayTaskDetails() {\n  const taskId = this.id.replace('view-button-', '');\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.toggleTaskDisplayDetails)(taskId);\n  clearAll();\n  buildProjectsHtml();\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n\n}\n\nfunction deleteTaskButton() {\n  var taskId = this.id.replace('delete-button-', '');\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskId);\n  clearAll();\n  buildProjectsHtml();\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n\n}\n\nfunction createInputPrompt(formObjectType, formObjectId) {\n  const thisPromptLi = createHtmlElement('li', 'add-' + formObjectType + '-li', 'add-' + formObjectType + '-li-' + formObjectId);\n    const addButton = createHtmlElement('span', 'add-' + formObjectType + '-button-span', 'add-' + formObjectType + '-button-span-' + formObjectId);\n    addButton.innerHTML = '<svg width=\"13\" height=\"13\"><path d=\"M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z\" fill=\"currentColor\" fill-rule=\"evenodd\"></path></svg>'\n    addButton.addEventListener('click', toggleInputFieldOn)\n    const addDesc = createHtmlElement('span', 'add-' + formObjectType + '-desc-span', 'add-' + formObjectType + '-desc-span-' + formObjectId);\n    addDesc.textContent = \"Add \" + formObjectType;\n    thisPromptLi.appendChild(addButton);\n    thisPromptLi.appendChild(addDesc);\n    return thisPromptLi;\n  }\n  \n  function createInputForm(formObjectType, formObjectId) {\n    const thisFormLi = createHtmlElement('li', formObjectType + '-form-li', 'add-' + formObjectType + '-form-li-' + formObjectId);\n    thisFormLi.setAttribute('style', 'display: none');\n    const thisForm = createHtmlElement('div', formObjectType + '-form-div', 'add-' + formObjectType + '-form-div-' + formObjectId);\n    const thisFormHeading = createHtmlElement('h5', 'form-heading', 'form-heading-' + formObjectType + '-' + formObjectId);\n    thisFormHeading.textContent = `Create new ${formObjectType}`;\n    const addFormTitleInput = createHtmlElement('input', formObjectType + '-form-title-input', 'add-' + formObjectType + '-form-title-input-' + formObjectId);\n    addFormTitleInput.setAttribute('type', 'text');\n    addFormTitleInput.setAttribute('name', 'new-' + formObjectType + '-title');\n    addFormTitleInput.setAttribute('placeholder', 'Title');\n    const addFormDescriptionInput = createHtmlElement('input', formObjectType + '-form-description-input', 'add-' + formObjectType + '-form-description-input-' + formObjectId);\n    addFormDescriptionInput.setAttribute('type', 'text');\n    addFormDescriptionInput.setAttribute('name', 'new-' + formObjectType + '-description');\n    addFormDescriptionInput.setAttribute('placeholder', 'Description');\n    const priorityInput = createHtmlElement('select', 'select-' + formObjectType + '-priority', 'select-' + formObjectType + '-priority-' + formObjectId);\n    const optionP1 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-1-project-' + formObjectId);\n    optionP1.textContent = 'Priority 1';\n    const optionP2 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-2-project-' + formObjectId);\n    optionP2.textContent = 'Priority 2';\n    const optionP3 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-3-project-' + formObjectId);\n    optionP3.textContent = 'Priority 3';\n    priorityInput.appendChild(optionP1);\n    priorityInput.appendChild(optionP2);    \n    priorityInput.appendChild(optionP3);\n    const dueDateInput = createHtmlElement('input', 'input-date', 'input-date-' + formObjectId);\n    dueDateInput.setAttribute('type', 'date');\n    dueDateInput.setAttribute('name', 'due-date');\n    var today = new Date().toISOString().substr(0,10);\n    dueDateInput.setAttribute('value', today);\n    const addFormSubmitButton = createHtmlElement('input', 'button submit-button', 'submit-button-' + formObjectId);\n    addFormSubmitButton.setAttribute('type', 'submit');\n    addFormSubmitButton.setAttribute('value', 'Save');\n    if (formObjectType == 'task') {\n      addFormSubmitButton.addEventListener('click', saveNewTask);\n    } else {\n      addFormSubmitButton.addEventListener('click', saveNewProject);\n    }\n    const addFormCancelButton = createHtmlElement('input', 'button cancel-button', 'cancel-button-' + formObjectType + '-' + formObjectId);\n    addFormCancelButton.setAttribute('value', 'Cancel');\n    addFormCancelButton.setAttribute('type', 'button');\n    addFormCancelButton.addEventListener('click', toggleInputFieldOff);\n    thisFormLi.appendChild(thisForm);\n    thisForm.appendChild(thisFormHeading);\n    thisForm.appendChild(addFormTitleInput);\n    if (formObjectType == 'task') {\n      thisForm.appendChild(addFormDescriptionInput);\n      thisForm.appendChild(priorityInput);\n      thisForm.appendChild(dueDateInput);\n    };\n    thisForm.appendChild(addFormSubmitButton);\n    thisForm.appendChild(addFormCancelButton);\n    return thisFormLi;\n}\n\nfunction createEditForm(formObjectType, formObjectId) {\n  var thisObject;\n  if (formObjectType == 'task') {\n    thisObject = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks[formObjectId]\n  } else if (formObjectType == 'project') {\n    thisObject = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[formObjectId]\n  };\n  const thisFormLi = createHtmlElement('li', formObjectType + '-form-li', 'edit-' + formObjectType + '-form-li-' + formObjectId);\n  // thisFormLi.setAttribute('style', 'display: none');\n  const thisForm = createHtmlElement('div', formObjectType + '-form-div', 'edit-' + formObjectType + '-form-div-' + formObjectId);\n  const thisFormHeading = createHtmlElement('h5', 'form-heading', 'form-heading-' + formObjectType + '-' + formObjectId);\n  thisFormHeading.textContent = `Edit ${formObjectType}`;\n  const addFormTitleInput = createHtmlElement('input', formObjectType + '-form-title-input', 'edit-' + formObjectType + '-form-title-input-' + formObjectId);\n  addFormTitleInput.setAttribute('type', 'text');\n  addFormTitleInput.setAttribute('name', 'new-' + formObjectType + '-title');\n  addFormTitleInput.setAttribute('value', thisObject.title);\n  const addFormDescriptionInput = createHtmlElement('input', formObjectType + '-form-description-input', 'edit-' + formObjectType + '-form-description-input-' + formObjectId);\n  addFormDescriptionInput.setAttribute('type', 'text');\n  addFormDescriptionInput.setAttribute('name', 'new-' + formObjectType + '-description');\n  addFormDescriptionInput.setAttribute('value', thisObject.description);\n  const priorityInput = createHtmlElement('select', 'select-' + formObjectType + '-priority', 'select-' + formObjectType + '-priority-' + formObjectId);\n  const optionP1 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-1-project-' + formObjectId);\n  optionP1.textContent = 'Priority 1';\n  const optionP2 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-2-project-' + formObjectId);\n  optionP2.textContent = 'Priority 2';\n  const optionP3 = createHtmlElement('option', 'select-priority-option', 'select-priority-option-3-project-' + formObjectId);\n  optionP3.textContent = 'Priority 3';\n  priorityInput.appendChild(optionP1);\n  priorityInput.appendChild(optionP2);    \n  priorityInput.appendChild(optionP3);\n  priorityInput.value = thisObject.priority;\n  const dueDateInput = createHtmlElement('input', 'input-date', 'input-date-' + formObjectId);\n  dueDateInput.setAttribute('type', 'date');\n  dueDateInput.setAttribute('name', 'due-date');\n  dueDateInput.setAttribute('value', thisObject.dueDate);\n  const addFormSubmitButton = createHtmlElement('input', 'button submit-button', 'submit-button-' + formObjectType + '-' + formObjectId);\n  addFormSubmitButton.setAttribute('type', 'submit');\n  addFormSubmitButton.setAttribute('value', 'Update');\n  if (formObjectType == 'task') {\n    addFormSubmitButton.addEventListener('click', updateTask);\n  } else {\n    addFormSubmitButton.addEventListener('click', updateProject);\n  }\n  const addFormCancelButton = createHtmlElement('input', 'button cancel-button', 'cancel-button-' + formObjectType + '-' + formObjectId);\n  addFormCancelButton.setAttribute('value', 'Cancel');\n  addFormCancelButton.setAttribute('type', 'button');\n  addFormCancelButton.addEventListener('click', toggleEditFieldOff);\n  thisFormLi.appendChild(thisForm);\n  thisForm.appendChild(thisFormHeading);\n  thisForm.appendChild(addFormTitleInput);\n  if (formObjectType == 'task') {\n    thisForm.appendChild(addFormDescriptionInput);\n    thisForm.appendChild(priorityInput);\n    thisForm.appendChild(dueDateInput);\n  };\n  thisForm.appendChild(addFormSubmitButton);\n  thisForm.appendChild(addFormCancelButton);\n  return thisFormLi;\n}\n\nfunction toggleEditFieldOff() {\n  const taskId = this.id.replace('cancel-button-task-', '');\n  this.parentNode.setAttribute('style', 'display: none');\n  document.getElementById('edit-button-' + taskId).addEventListener('click', displayEditForm)\n}\n\nfunction updateTask() {\n  const taskId = this.parentNode.id.replace('edit-task-form-div-', '');\n  const title = this.parentNode.childNodes[1].value;\n  const description = this.parentNode.childNodes[2].value;\n  const priority = this.parentNode.childNodes[3].value;\n  const dueDate = this.parentNode.childNodes[4].value;\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.modifyTask)(taskId, title, description, priority, dueDate);\n  clearAll();\n  buildProjectsHtml();\n}\n\nfunction updateProject() {\n  // console.log(this);\n}\n\nfunction saveNewTask() {\n  var projectId = this.id.replace('submit-button-', '');\n  var newTaskTitle = document.getElementById('add-task-form-title-input-' + projectId).value;\n  var newTaskDescription = document.getElementById('add-task-form-description-input-' + projectId).value;\n  var newTaskPriority = document.getElementById('select-task-priority-'+ projectId).value;\n  var newTaskDueDate = document.getElementById('input-date-' + projectId).value;\n  (0,_object_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(newTaskTitle, newTaskDescription, newTaskPriority, newTaskDueDate, projectId);\n  clearAll();\n  buildProjectsHtml();\n}\n\nfunction saveNewProject() {\n  var newTaskDescription = document.getElementById('add-project-form-title-input-0').value;\n  (0,_object_logic__WEBPACK_IMPORTED_MODULE_0__.createProject)(newTaskDescription);\n  clearAll();\n  buildProjectsHtml();\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n\n}\n\nfunction toggleInputFieldOn() {\n  if (this.id.includes('project')) { var inputFieldType = 'project' } else { var inputFieldType = 'task'};\n  const projectId = this.id.replace('add-' + inputFieldType + '-button-span-', '');\n  document.getElementById('add-' + inputFieldType + '-button-span-' + projectId).setAttribute('style', 'display: none');\n  document.getElementById('add-' + inputFieldType + '-desc-span-' + projectId).setAttribute('style', 'display: none');\n  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: inline');\n}\n\nfunction toggleInputFieldOff() {\n  var inputFieldType;\n  if (this.id.includes('project')) { inputFieldType = 'project' } else { inputFieldType = 'task'};\n  const projectId = this.id.replace('cancel-button-' + inputFieldType + '-', '');\n  document.getElementById('add-' + inputFieldType + '-button-span-' + projectId).setAttribute('style', 'display: inline');\n  document.getElementById('add-' + inputFieldType + '-desc-span-' + projectId).setAttribute('style', 'display: inline');\n  document.getElementById('add-' + inputFieldType + '-form-li-' + projectId).setAttribute('style', 'display: none')\n}\n\nfunction createHtmlElement(elementName, elementClass, elementId) {\n  const newElement = document.createElement(elementName);\n  newElement.setAttribute('class', elementClass);\n  newElement.setAttribute('id', elementId);\n  return newElement;\n}\n\nfunction toggleCompletion() {\n  var taskId = this.id.replace('checkbox-span-', '');\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.toggleTaskComplete)(taskId);\n  clearAll();\n  buildProjectsHtml();\n  (0,_object_helpers__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)();\n}\n\nfunction clearAll() {\n  clearLeftMenu();\n  clearJumbotron();\n}\n\nfunction clearJumbotron() {\n  const parent = document.getElementById('jumbotron');\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction clearLeftMenu() {\n  const parent = document.getElementById('project-selector');\n  while (parent.firstChild) {\n    parent.removeChild(parent.firstChild);\n  }\n}\n\nfunction buildTaskArray(id) {\n  var array = [];\n  _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.forEach(t => {\n    if (t.project == id) {\n      array.push(t)\n    }\n  });\n  return array;\n}\n\nfunction determineCheckboxStatus(complete) {\n  if (complete == true) {\n    return \"☑\"\n  } else {\n    return \"☐\"\n  }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/html-builder.js?");

/***/ }),

/***/ "./src/modules/object-helpers.js":
/*!***************************************!*\
  !*** ./src/modules/object-helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleTaskComplete\": () => (/* binding */ toggleTaskComplete),\n/* harmony export */   \"toggleTaskDisplayDetails\": () => (/* binding */ toggleTaskDisplayDetails),\n/* harmony export */   \"getTaskIndex\": () => (/* binding */ getTaskIndex),\n/* harmony export */   \"modifyTask\": () => (/* binding */ modifyTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"modifyProject\": () => (/* binding */ modifyProject),\n/* harmony export */   \"projectDisplayToggle\": () => (/* binding */ projectDisplayToggle),\n/* harmony export */   \"projectDisplayAll\": () => (/* binding */ projectDisplayAll),\n/* harmony export */   \"saveToLocalStorage\": () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _object_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-logic */ \"./src/modules/object-logic.js\");\n\n\nfunction toggleTaskComplete(taskId) {\n  var task = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.find(t => t.id == taskId);\n  if (task.complete == true) { task.complete = false } else { task.complete = true };\n}\n\nfunction toggleTaskDisplayDetails(taskId) {\n  var task = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.find(t => t.id == taskId);\n  if (task.displayDetails == true) { task.displayDetails = false } else { task.displayDetails = true };\n}\n\nfunction getTaskIndex(taskId) {\n  return _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.indexOf(_object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.find(t => t.id == taskId));\n}\n\nfunction getProjectIndex(projectId) {\n  return _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.indexOf(_object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.find(p => p.id == projectId));\n}\n\nfunction deleteProject(projectId) {\n  _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(getProjectIndex(projectId), 1);\n}\n\nfunction modifyProject(projectId, title) {\n  const thisProject = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[getProjectIndex(projectId)];\n  thisProject.title = title;\n}\n\nfunction modifyTask(taskId, title, description, priority, dueDate) {\n  const thisTask = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks[getTaskIndex(taskId)];\n  thisTask.title = title;\n  thisTask.description = description;\n  thisTask.priority = priority;\n  thisTask.dueDate = dueDate;\n  console.log(thisTask);\n}\n\nfunction deleteTask(taskId) {\n  _object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks.splice(getTaskIndex(taskId), 1);\n}\n\nfunction projectDisplayToggle(projectId) {\n  const thisProject = _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects[getProjectIndex(projectId)];\n  if (projectId == 'all') {\n    _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach( p=> { p.display = true })\n  } else {\n    if (thisProject.display == true) {\n      thisProject.display = false \n    } else { \n      thisProject.display = true \n    };\n  }\n}\n\nfunction projectDisplayAll() {\n  _object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects.forEach(\n    p => { p.display = true }\n  )\n}\n\nfunction saveToLocalStorage() {\n  localStorage.setItem('allProjects', JSON.stringify(_object_logic__WEBPACK_IMPORTED_MODULE_0__.allProjects));\n  localStorage.setItem('allTasks', JSON.stringify(_object_logic__WEBPACK_IMPORTED_MODULE_0__.allTasks));\n  localStorage.setItem('projectCounter', JSON.stringify(_object_logic__WEBPACK_IMPORTED_MODULE_0__.projectCounter));\n  localStorage.setItem('taskCounter', JSON.stringify(_object_logic__WEBPACK_IMPORTED_MODULE_0__.taskCounter));\n}\n\n \n\n//# sourceURL=webpack://todo/./src/modules/object-helpers.js?");

/***/ }),

/***/ "./src/modules/object-logic.js":
/*!*************************************!*\
  !*** ./src/modules/object-logic.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allProjects\": () => (/* binding */ allProjects),\n/* harmony export */   \"allTasks\": () => (/* binding */ allTasks),\n/* harmony export */   \"taskCounter\": () => (/* binding */ taskCounter),\n/* harmony export */   \"projectCounter\": () => (/* binding */ projectCounter),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"initProjects\": () => (/* binding */ initProjects)\n/* harmony export */ });\nlet projectCounter = 0;\nlet taskCounter = 0;\nlet allProjects = [];\nlet allTasks = [];\n\nfunction createProject(title, id=projectCounter) {\n  let project = Object.create(createProject.prototype);\n  project.id = id;\n  project.title = title;\n  project.complete = false;\n  project.display = true;\n  project.tasks = [];\n  projectCounter++;\n  allProjects.push(project);\n  return project;\n}\n\nfunction createTask(title, description, priority, dueDate, project, id=taskCounter) {\n  let task = Object.create(createTask.prototype);\n  task.title = title;\n  task.description = description;\n  task.priority = priority;\n  task.dueDate = dueDate;\n  task.id = id;\n  task.complete = false;\n  task.displayDetails = false;\n  task.project = project;\n  allTasks.push(task)\n  taskCounter++;\n}\n\nfunction initProjects() {\n  var localAllProjects = localStorage.getItem('allProjects');\n  console.log(localAllProjects);\n  var localAllTasks = localStorage.getItem('allTasks');\n  console.log(localAllTasks);\n  var localProjectCounter = localStorage.getItem('projectCounter');\n  var localTaskCounter = localStorage.getItem('taskCounter');\n  \n  if ((localAllProjects !== undefined) && (localAllProjects !== null)) {allProjects = JSON.parse(localAllProjects)};\n  if ((localAllTasks !== undefined) && (localAllTasks !== null)) {allTasks = JSON.parse(localAllTasks)};\n  if ((localProjectCounter !== undefined) && (localProjectCounter !== null)) {projectCounter = JSON.parse(localProjectCounter)};\n  if ((localTaskCounter !== undefined) && (localTaskCounter !== null)) {taskCounter = JSON.parse(localTaskCounter)};\n\n  if (allProjects.length == 0) {\n    createProject('Welcome');\n  }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/modules/object-logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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