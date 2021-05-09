import { createProject, createTask, initProjects } from './modules/logic';
import { buildProjectsHtml } from './modules/initial-page-load';


initProjects();
buildProjectsHtml();

// function buildProjectDiv(proj) {
//   const projectContainer = document.getElementById('jumbotron');
//   const projectDiv = document.createElement('div');
//   projectDiv.setAttribute('id', 'project-' + proj.id + '-div');
//   projectDiv.setAttribute('class', 'project-div');
//   projectDiv.textContent = proj.description;
//   projectContainer.appendChild(projectDiv);
//   const taskUl = document.createElement('ul');
//   taskUl.setAttribute('id', 'task-ul-' + proj.id);
//   taskUl.setAttribute('class', 'task-ul');
//   projectDiv.appendChild(taskUl);
//   if (proj.tasks.length > 0) {
//     proj.tasks.forEach(buildTaskListItems)
//   }
//   createAddTaskButton(proj);
//   createInputField(proj);
// }

// function buildTaskListItems(task) {
//   const taskList = document.getElementById('task-ul-' + task.project);
//   const taskListItem = document.createElement('li');
//   taskListItem.setAttribute('id', 'task-list-item' + task.id);
//   var checkBox = document.createElement('span');
//   checkBox.setAttribute('id', 'task-list-checkbox-' + task.id);
//   checkBox.setAttribute('class', 'check-box');
//   if (task.complete == false ){
//     checkBox.textContent = '☐'
//   } else {
//     checkBox.textContent = '☑'
//   }
//   checkBox.addEventListener('click', toggleTask)
//   var taskListDescription = document.createElement('span');
//   taskListDescription.setAttribute('id', 'task-list-description-' + task.id);
//   taskListDescription.setAttribute('class', 'task-list-description')
//   taskListDescription.textContent = task.description;
//   if (task.complete == true) {
//     taskListDescription.setAttribute('class', 'task-list-description-complete')
//   };
//   taskList.appendChild(taskListItem);
//   taskListItem.appendChild(checkBox);
//   taskListItem.appendChild(taskListDescription);
// }

// function toggleTask() {
//   var currentTask;
//   var taskId = this.id.replace('task-list-checkbox-', '');
//   allProjects.forEach(p => {
//     if (p.tasks.find(t=> t.id != null))
//     {currentTask = p.tasks.find( t => t.id == taskId )}
//   });
//   if (this.textContent == "☐") {
//     currentTask.complete = true;
//     this.textContent = "☑";
//     this.parentElement.lastChild.setAttribute('class', 'task-list-description-complete');
//   }
//   else {
//     currentTask.complete = false;
//     this.textContent = "☐"
//     this.parentElement.lastChild.setAttribute('class', 'task-list-description')
//   }
// }

// function createAddTaskButton(project) {
//   const taskUl = document.getElementById('task-ul-' + project.id)
//   var addTaskLi = document.createElement('li');
//   addTaskLi.setAttribute('class', 'add-task-li');
//   addTaskLi.setAttribute('id', 'add-task-li-' + project.id)
//   taskUl.appendChild(addTaskLi);
//   const addTaskButton = document.createElement('button');
//   addTaskButton.setAttribute('class', 'add-task-button');
//   addTaskButton.setAttribute('id', 'add-task-button-' + project.id);
//   addTaskLi.appendChild(addTaskButton);
//   addTaskButton.innerHTML = '<svg width="13" height="13"><path d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z" fill="currentColor" fill-rule="evenodd"></path></svg>'
//   addTaskLabel = document.createElement('span');
//   addTaskLabel.setAttribute('class', 'add-task-label');
//   addTaskLabel.textContent = 'Add task';
//   addTaskLi.appendChild(addTaskLabel)
//   addTaskButton.addEventListener('click', toggleInputFieldOn)
// }

// function toggleInputFieldOn() {
//   this.parentElement.parentElement.lastChild.setAttribute('style', 'display: block')
//   this.parentElement.setAttribute('style',  'display: none');
// }

// function toggleInputFieldOff() {
//   console.log(this)
//   this.parentElement.parentElement.lastChild.setAttribute('style', 'display: none')
//   this.parentElement.previousSibling.setAttribute('style',  'display: block');
//   this.parentElement.firstChild.value = ""
// }

// function createInputField(project) {
//   const taskUl = document.getElementById('task-ul-' + project.id);
//   var addInputLi = document.createElement('li');
//   addInputLi.setAttribute('class', 'add-input-li');
//   addInputLi.setAttribute('id', 'add-input-li-project-' + project.id);
//   const taskInput = document.createElement('input');
//   taskInput.setAttribute('id', 'task-input-to-project-' + project.id);
//   taskInput.setAttribute('name', 'task-description')
//   const taskSaveButton = createSaveButton('save-to-project-' + project.id);
//   taskSaveButton.addEventListener('click', saveNewTask);
//   taskSaveButton.addEventListener('click', toggleInputFieldOff);
//   const taskCancelButton = createCancelButton('cancel-add-to-project-' + project.id);
//   taskCancelButton.addEventListener('click', toggleInputFieldOff)
//   taskUl.appendChild(addInputLi);
//   addInputLi.appendChild(taskInput);
//   addInputLi.appendChild(taskSaveButton);
//   addInputLi.appendChild(taskCancelButton);
// }

// function createAddProjectDiv() {
//   const projectContainer = document.getElementById('jumbotron');
//   const addProjectDiv = document.createElement('div');
//   addProjectDiv.setAttribute('class', 'project-div');
//   addProjectDiv.setAttribute('id', 'add-project-div');
//   projectContainer.appendChild(addProjectDiv);
//   const projectInput = document.createElement('input');
//   projectInput.setAttribute('id', 'new-project-input');
//   projectInput.setAttribute('name', 'project-description');
//   const saveProjectButton = createSaveButton('new-project');
//   const cancelProjectButton = createCancelButton('new-project')
//   addProjectDiv.appendChild(projectInput);
//   addProjectDiv.appendChild(saveProjectButton);
//   addProjectDiv.appendChild(cancelProjectButton);
//   saveProjectButton.addEventListener('click', saveNewProject);
// }

// function saveNewProject() {
//   var projectDesc = this.parentElement.firstChild.value;
//   var task = createProject(projectDesc);
//   displayProjects();
// }

// function createSaveButton(id) {
//   taskSaveButton = document.createElement('button')
//   taskSaveButton.setAttribute('id', id);
//   taskSaveButton.setAttribute('class', 'save-button');
//   taskSaveButton.textContent = 'Save';
//   return taskSaveButton;
// }

// function createCancelButton(id) {
//   taskCancelButton = document.createElement('button')
//   taskCancelButton.setAttribute('id', id);
//   taskCancelButton.setAttribute('class', 'cancel-button');
//   taskCancelButton.textContent = 'Cancel';
//   return taskCancelButton;
// }

// function saveNewTask() {
//   var projectId = this.id.replace('save-to-project-', '');
//   var taskDesc = this.parentElement.firstChild.value;
//   var task = createTask(taskDesc, projectId);
//   displayProjects();
// }

// function clearProjects() {
//   var jumbotron = document.getElementById('jumbotron');
//   while (jumbotron.firstChild) {
//     jumbotron.removeChild(jumbotron.firstChild);
//   }
// }

// function displayProjects() {
//   clearProjects();
//   allProjects.forEach(buildProjectDiv);
//   createAddProjectDiv()
// }

// initProjects();
// displayProjects();