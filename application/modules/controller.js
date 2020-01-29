class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addTask.bind(this));
    view.on('toggle', this.toggleStatus.bind(this));
    view.on('delete', this.deleteTask.bind(this));
    view.on('edit', this.editTask.bind(this));
    view.on('filter', this.filter.bind(this));
    view.on('search', this.search.bind(this));

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
    this.view.toggleStatus(task);
  }

  deleteTask(id) {
    this.model.removeTask(id);
    this.view.deleteTask(id);
  }

  editTask({ newData, id }) {
    const task = this.model.updateTask(newData, id);

    this.view.editTask(task, id);
  }

  filter({ status, priority }) {
    const filteredData = this.model.filterData({ status, priority });
    this.view.show(filteredData);
  }

  search({ searchQuery, status, priority }) {
    const data = this.model.searchData({ searchQuery, status, priority });
    this.view.show(data);
  }
}

export default Controller;
