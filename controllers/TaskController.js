import TaskModel from '../models/TaskModel';

class TaskController {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const task = new TaskModel(title);
    this.tasks.push(task);
  }

  completeTask(task) {
    task.complete();
  }

  deleteTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }
}

export default new TaskController();
