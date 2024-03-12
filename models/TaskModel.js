class TaskModel {
    constructor(title) {
      this.title = title;
      this.completed = false;
    }
  
    complete() {
      this.completed = true;
    }
  }
  
  export default TaskModel;
  