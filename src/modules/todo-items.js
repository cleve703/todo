const behavior = {
  getToDoInfo() {
      return this.title + ' ' + this.description + ' ' + this.dueDate + ' '  + this.priority;
  }
}

function createToDo(title, description, dueDate, priority) {
  let toDo = Object.create(behavior);
  toDo.title = title;
  toDo.description = description;
  toDo.dueDate = dueDate;
  toDo.priority = priority
  return toDo;
}

function todoInitialize() {
  let toDoList = [];
  toDoList.push(createToDo("title", "desc", "due", "1"));
  return toDoList;
}

export default todoInitialize;