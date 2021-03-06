let projectCounter = 0;
let taskCounter = 0;
let allProjects = [];
let allTasks = [];

function createProject(title, id=projectCounter) {
  let project = Object.create(createProject.prototype);
  project.id = id;
  project.title = title;
  project.complete = false;
  project.display = true;
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
  var localAllProjects = localStorage.getItem('allProjects');
  console.log(localAllProjects);
  var localAllTasks = localStorage.getItem('allTasks');
  console.log(localAllTasks);
  var localProjectCounter = localStorage.getItem('projectCounter');
  var localTaskCounter = localStorage.getItem('taskCounter');
  
  if ((localAllProjects !== undefined) && (localAllProjects !== null)) {allProjects = JSON.parse(localAllProjects)};
  if ((localAllTasks !== undefined) && (localAllTasks !== null)) {allTasks = JSON.parse(localAllTasks)};
  if ((localProjectCounter !== undefined) && (localProjectCounter !== null)) {projectCounter = JSON.parse(localProjectCounter)};
  if ((localTaskCounter !== undefined) && (localTaskCounter !== null)) {taskCounter = JSON.parse(localTaskCounter)};

  if (allProjects.length == 0) {
    createProject('Welcome');
  }
}

export { allProjects, allTasks, taskCounter, projectCounter, createProject, createTask, initProjects }