let projectCounter = 0;
let taskCounter = 0;
let allProjects = [];
let allTasks = [];

function createProject(description, id=projectCounter) {
  let project = Object.create(createProject.prototype);
  project.id = id;
  project.description = description;
  project.complete = false;
  project.tasks = [];
  projectCounter++;
  allProjects.push(project);
  return project;
}

function createTask(description, project, id=taskCounter) {
  let task = Object.create(createTask.prototype);
  task.description = description;
  task.id = id;
  task.complete = false;
  task.project = project;
  allTasks.push(task)
  taskCounter++;
}

function initProjects() {
  if (allProjects.length == 0) {
    createProject('Welcome');
    createTask('eat', '0');
    createTask('sleep', '0');
    createProject('Exercise');
    createTask('pushups', '1');
    createTask('pullups', '1');
  }
}

function toggleTaskComplete(taskId) {
  var task = allTasks.find(t => t.id == taskId)
  if (task.complete == true) { task.complete = false } else { task.complete = true };
}

export {allProjects, allTasks, createProject, createTask, initProjects, toggleTaskComplete }