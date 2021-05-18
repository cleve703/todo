let projectCounter = 0;
let taskCounter = 0;
let allProjects = [];
let allTasks = [];

function createProject(title, id=projectCounter) {
  let project = Object.create(createProject.prototype);
  project.id = id;
  project.title = title;
  project.complete = false;
  project.tasks = [];
  projectCounter++;
  allProjects.push(project);
  return project;
}

function createTask(title, description, priority, dueDate, project, id=taskCounter) {
  let task = Object.create(createTask.prototype);
  task.title = title;
  task.description = description;
  task.priority = priority;
  task.dueDate = dueDate;
  task.id = id;
  task.complete = false;
  task.displayDetails = false;
  task.project = project;
  allTasks.push(task)
  taskCounter++;
}

function initProjects() {
  if (allProjects.length == 0) {
    createProject('Welcome');
  }
}

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

function deleteTask(taskId) {
  allTasks.splice(getTaskIndex(taskId), 1);
}

export {allProjects, allTasks, createProject, createTask, initProjects, toggleTaskComplete, toggleTaskDisplayDetails, getTaskIndex, deleteTask }