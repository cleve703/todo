import  { allProjects, allTasks, projectCounter, taskCounter } from './object-logic'

function toggleTaskComplete(taskId) {
  var task = allTasks.find(t => t.id == taskId);
  if (task.complete == true) { task.complete = false } else { task.complete = true };
}

function toggleTaskDisplayDetails(taskId) {
  var task = allTasks.find(t => t.id == taskId);
  if (task.displayDetails == true) { task.displayDetails = false } else { task.displayDetails = true };
}

function getTaskIndex(taskId) {
  return allTasks.indexOf(allTasks.find(t => t.id == taskId));
}

function getProjectIndex(projectId) {
  return allProjects.indexOf(allProjects.find(p => p.id == projectId));
}

function deleteProject(projectId) {
  allProjects.splice(getProjectIndex(projectId), 1);
}

function modifyProject(projectId, title) {
  const thisProject = allProjects[getProjectIndex(projectId)];
  thisProject.title = title;
}

function modifyTask(taskId, title, description, priority, dueDate) {
  const thisTask = allTasks[getTaskIndex(taskId)];
  thisTask.title = title;
  thisTask.description = description;
  thisTask.priority = priority;
  thisTask.dueDate = dueDate;
  console.log(thisTask);
}

function deleteTask(taskId) {
  allTasks.splice(getTaskIndex(taskId), 1);
}

function projectDisplayToggle(projectId) {
  const thisProject = allProjects[getProjectIndex(projectId)];
  if (projectId == 'all') {
    allProjects.forEach( p=> { p.display = true })
  } else {
    if (thisProject.display == true) {
      thisProject.display = false 
    } else { 
      thisProject.display = true 
    };
  }
}

function projectDisplayAll() {
  allProjects.forEach(
    p => { p.display = true }
  )
}

function saveToLocalStorage() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
  localStorage.setItem('allTasks', JSON.stringify(allTasks));
  localStorage.setItem('projectCounter', JSON.stringify(projectCounter));
  localStorage.setItem('taskCounter', JSON.stringify(taskCounter));
}

export {toggleTaskComplete, toggleTaskDisplayDetails, getTaskIndex, modifyTask, deleteTask, deleteProject, modifyProject, projectDisplayToggle, projectDisplayAll, saveToLocalStorage } 