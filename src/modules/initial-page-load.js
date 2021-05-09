import { allProjects, allTasks, toggleTaskComplete } from './logic'

function buildProjectsHtml () {
  let mainScreen = document.getElementById('jumbotron');
  allProjects.forEach(e => {
    // create list to contain all projects as li and sublist for each set of tasks
    const projectList = createHtmlElement('ul', 'project-list', 'project-list')
    mainScreen.appendChild(projectList);
    // create div for each project
    const projectDiv = createHtmlElement('div', 'project-div', 'project-div-' + e.id);
    projectList.appendChild(projectDiv);
    // create list item for each project
    const project = createHtmlElement('li', 'project-li', 'project-li-' + e.id);
    projectDiv.appendChild(project);
    // create project description as first li
    const projectNameLi = createHtmlElement('li', 'project-name', 'project-name-' + e.id);
    projectNameLi.textContent = e.description;
    project.appendChild(projectNameLi);
    // create nested ul of tasks for each project
    const projectUl = createHtmlElement('ul', 'project-task-list', 'project-task-list-' + e.id);
    project.appendChild(projectUl);
    // add li for each task within each nested ul
    const projectTaskArray = buildTaskArray(e.id);
    buildTaskList(projectTaskArray, projectUl);
    // add li for adding a new task
    const addTaskLi = createHtmlElement('li', 'add-task-li', 'add-task-li-' + e.id);
    addTaskLi.textContent = 'Add task';
    projectUl.appendChild(addTaskLi);     
    mainScreen.appendChild(projectDiv);
  });
}

function buildTaskList(projectTaskArray, projectUl) {
  projectTaskArray.forEach(t => {
    const checkbox = determineCheckboxStatus(t.complete);
    const taskLi = createHtmlElement('li', 'task-description-li', 'task-description-li-' + t.id)
    const checkBoxSpan = createHtmlElement('span', 'checkbox-span', 'checkbox-span-' + t.id);
    checkBoxSpan.textContent = checkbox;
    const taskSpan = createHtmlElement('span', 'task-span', 'id-span-' + t.id);
    taskSpan.textContent = t.description;
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