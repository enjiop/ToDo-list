class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addTask.bind(this));
    view.on('toggle', this.toggleStatus.bind(this));
    view.on('delete', this.deleteTask.bind(this));
    view.on('edit', this.editTask.bind(this));
    view.on('filter', this.filter.bind(this));

    view.show(model.getAll());
  }

  addTask({ title, description, priority }) {
    const task = this.model.createTask({
      title,
      description,
      priority,
    });
    this.view.addTask(task);
  }

  toggleStatus({ id, status }) {
    const task = this.model.updateTask({ status }, id);
    console.log(task);
    this.view.toggleStatus(task);
  }

  deleteTask(id) {
    this.model.removeTask(id);
    this.view.deleteTask(id);
  }

  editTask({ newData, id }) {
    const task = this.model.updateTask(newData, id);
    console.log(newData, id, task);

    this.view.editTask(task, id);
  }

  filter({ status, priority }) {
    const filteredData = this.model.filter({ status, priority });
    this.view.show(filteredData);
  }
}

export default Controller;
