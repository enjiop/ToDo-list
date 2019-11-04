import EventEmmiter from './helpers';

class TaskModel extends EventEmmiter {
  constructor(storage) {
    super();
    this.storage = storage;
  }

  createTask(taskData) {
    const { title, description, priority } = taskData;
    const newData = {
      title,
      description,
      priority,
      status: true,
    };
    return this.storage.save(newData);
  }

  removeTask(id) {
    this.storage.remove(id);
  }

  getTask(id) {
    return this.storage.getTask(id);
  }

  getAll() {
    return this.storage.getAllTasks();
  }

  updateTask(updateData, id) {
    return this.storage.save(updateData, id);
  }

  filter({ status, priority }) {
    const data = this.getAll();
    const parsedStatus = this.parseStatusValue(status);
    const field = this.getFilterField(parsedStatus, priority);
    let filteredData = [];

    switch (field) {
      case 'all':
        filteredData = data;
        break;
      case 'priority':
        filteredData = data.filter((el) => el.priority === priority);
        break;
      case 'status':
        filteredData = data.filter((el) => el.status === parsedStatus);
        break;
      case 'both':
        filteredData = data.filter(
          (el) => el.priority === priority && el.status === parsedStatus,
        );
        break;
      default:
        filteredData = [];
        break;
    }

    return filteredData;
  }
}

TaskModel.prototype.getFilterField = (statusValue, priorityValue) => {
  let field;
  if (priorityValue === 'all' && statusValue === 'all') {
    field = 'all';
  } else if (priorityValue !== 'all' && statusValue === 'all') {
    field = 'priority';
  } else if (statusValue !== 'all' && priorityValue === 'all') {
    field = 'status';
  } else {
    field = 'both';
  }

  return field;
};

TaskModel.prototype.parseStatusValue = (statusValue) => {
  let parsedStatus;
  if (statusValue === 'open') {
    parsedStatus = true;
  } else if (statusValue === 'done') {
    parsedStatus = false;
  } else {
    parsedStatus = 'all';
  }

  return parsedStatus;
};

export default TaskModel;
