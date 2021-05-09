import { allProjects, allTasks, toggleTaskComplete } from './logic'

function buildProjectsHtml () {
  let mainScreen = document.getElementById('jumbotron');
  allProjects.forEach(e => {
    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'project-list');
    projectList.setAttribute('class', 'project-list');
    mainScreen.appendChild(projectList);
    // create div for each project
    const projectDiv = document.createElement('div');
    projectDiv.setAttribute('class', 'project-div');
    projectDiv.setAttribute('id', 'project-div-' + e.id);
    projectList.appendChild(projectDiv);
    // create unordered list for each project
    const project = document.createElement('li');
    project.setAttribute('id', 'project-li-' + e.id);
    project.setAttribute('class', 'project-li');
    projectDiv.appendChild(project);
    // create project description as first li
    const projectName = e.description;
    const projectNameLi = document.createElement('li');
    projectNameLi.setAttribute('class', 'project-name');
    projectNameLi.setAttribute('id', 'project-name-' + e.id);
    projectNameLi.textContent = projectName;
    project.appendChild(projectNameLi);
    // create nested ul of tasks for each project
    const projectTaskArray = buildTaskArray(e.id);
    const projectUl = document.createElement('ul');
    projectUl.setAttribute('class', 'project-task-list');
    projectUl.setAttribute('id', 'project-task-list-' + e.id);
    project.appendChild(projectUl);
    // add li for each task within each nested ul
    projectTaskArray.forEach(t => {
      const checkbox = determineCheckboxStatus(t.complete);
      const taskLi = document.createElement('li');
      taskLi.setAttribute('class', 'task-description-li');
      taskLi.setAttribute('id', 'task-description-li-' + t.id);
      const checkBoxSpan = document.createElement('span');
      checkBoxSpan.setAttribute('class', 'checkbox-span');
      checkBoxSpan.setAttribute('id', 'checkbox-span-' + t.id);
      checkBoxSpan.textContent = checkbox;
      const taskSpan = document.createElement('span');
      taskSpan.setAttribute('class', 'task-span');
      taskSpan.setAttribute('id', 'id-span-' + t.id);
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
    mainScreen.appendChild(projectDiv);
  });
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

function determineCheckboxStatus(t) {
  if (t == true) {
    return "☑"
  } else {
    return "☐"
  }
}

export { buildProjectsHtml }