class TaskModel {
  constructor(storage) {
    this.storage = storage;
  }

  create(taskData) {
    const { title, description, priority } = taskData;
    const newData = {
      title,
      description,
      priority,
      complited: false,
    };
    this.storage.save(newData);
  }
}

export default TaskModel;
