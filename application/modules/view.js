import EventEmmiter from './helpers';

class TaskView extends EventEmmiter {
  constructor() {
    super();

    this.root = document.getElementById('root');
    this.showCreateFormBtn = document.getElementById('showCreateForm');
    this.searchAndFilterForm = document.forms.searchAndFilterForm;
    this.createForm = document.forms.createForm;
    this.bg = document.getElementById('bg');

    this.listContainer = document.createElement('section');
    this.listContainer.className = 'list-container container';

    const { search, statusFilter, priorityFilter } = this.searchAndFilterForm;

    this.showCreateFormBtn.addEventListener(
      'click',
      this.showCreateEditForm('add'),
    );

    search.addEventListener('change', this.handleSearchTask.bind(this));
    statusFilter.addEventListener('change', this.handleFiltering.bind(this));
    priorityFilter.addEventListener('change', this.handleFiltering.bind(this));

    this.root.appendChild(this.listContainer);
  }

  getItem(id) {
    return this.listContainer.querySelector(`[data-id="${id}"]`);
  }

  show(tasks) {
    this.listContainer.innerHTML = null;
    if (!tasks) {
      const noItemsMessage = document.createElement('h2');
      noItemsMessage.textContent = 'No tasks...';
      this.listContainer.appendChild(noItemsMessage);
    }
    tasks.forEach((task) => {
      const listItem = this.createListItem(task);
      this.listContainer.appendChild(listItem);
    });
  }

  handleSearchTask({ target }) {}

  handleFiltering() {
    const { status, priority } = this.searchAndFilterForm;
    this.emit('filter', { status: status.value, priority: priority.value });
  }

  handleSave = (mode, id) => (e) => {
    e.preventDefault();
    const form = document.getElementById('createForm');
    const { title, description, priority } = form;
    const task = {
      title: title.value,
      description: description.value,
      priority: priority.value,
    };

    if (mode === 'edit') {
      this.emit('edit', { newData: task, id });
    } else if (mode === 'add') {
      this.emit('add', task);
    }

    this.removeForm();
  };

  createListItem(task) {
    const { id, title, description, priority, status } = task;
    const listItem = document.createElement('div');
    listItem.className = 'list-item';

    if (!status) {
      listItem.classList.add('status-done');
    } else {
      listItem.classList.remove('status-done');
    }

    listItem.dataset.id = id;

    listItem.innerHTML = `
      <h2 class="list__title">${title}</h2>
      <p class="list__description">${description}</p>
      <span class="list__priority">${priority}</span>
      <button class="list__edit-btn _toggle btn">...</button>
      <div class="list__edit-container _hidden">
        <ul class="list__edit-nav">
          <li class="list__edit-item">
            <label class="_status">
              <span>${status ? 'Done task' : 'Open task'}</span>
              <input type="checkbox" name="status" ${status ? 'checked' : ''}>
            </label>
          </li>
          <li class="list__edit-item">
            <button class="list__edit-btn _edit btn">Edit</button>
          </li>
          <li class="list__edit-item">
          <button class="list__edit-btn _delete btn">Delete</button>
          </li>
        </ul>
      </div>
    `;

    return this.addEventListeners(listItem);
  }

  addEventListeners(item) {
    const toogleMenu = item.querySelector('button._toggle');
    const status = item.querySelector('._status');
    const editBtn = item.querySelector('button._edit');
    const deleteBtn = item.querySelector('button._delete');
    const id = item.dataset.id;

    console.log(item, id);

    toogleMenu.addEventListener('click', this.toggleDropdownMenu(item));
    status.addEventListener('change', this.handleToggleStatusTask(item));
    editBtn.addEventListener('click', this.showCreateEditForm('edit', id));
    deleteBtn.addEventListener('click', this.handleDeleteTask(item));

    return item;
  }

  handleToggleStatusTask = (taskNode) => ({ target }) => {
    const id = taskNode.dataset.id;
    const status = target.checked;
    this.emit('toggle', { id, status });
  };

  handleDeleteTask = (taskNode) => () => {
    this.emit('delete', taskNode.dataset.id);
  };

  createFormInit() {
    const newForm = document.createElement('form');
    newForm.id = 'createForm';

    newForm.innerHTML = `
        <label>
          <input type="text" name="title" placeholder="Title" required />
        </label>
        <label>
          <textarea name="description" placeholder="Description"></textarea>
        </label>
        <label>
          <select name="priority">
            <option value="high">High</option>
            <option value="normal" selected>Normal</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <button name="cancel" type="reset" class="btn">Cancel</button>
        <button name="save" class="btn">Save</button>
    `;
    return newForm;
  }

  showCreateEditForm = (mode, id) => () => {
    this.bg.classList.remove('_hidden');
    const createForm = this.createFormInit();

    console.log(mode, id);

    createForm.cancel.addEventListener('cancel', this.removeForm.bind(this));

    if (mode === 'edit') {
      createForm.addEventListener('submit', this.handleSave(mode, id));
    } else if (mode === 'add') {
      createForm.addEventListener('submit', this.handleSave(mode));
    }

    this.root.appendChild(createForm);
  };

  removeForm() {
    const form = document.getElementById('createForm');
    this.root.removeChild(form);
    this.bg.classList.add('_hidden');
  }

  addTask(task) {
    const listItem = this.createListItem(task);
    this.listContainer.appendChild(listItem);
    this.clearForm(this.createForm);
  }

  toggleStatus({ id }) {
    const taskNode = this.getItem(id);
    const statusNode = taskNode.querySelector('._status');
    const statusSpan = statusNode.querySelector('span');
    const statusCheckbox = statusNode.querySelector('[type="checkbox"]');
    const status = statusCheckbox.checked; // If checked: status - open, else status - done

    if (status) {
      statusSpan.textContent = 'Done task';
      taskNode.classList.remove('status-done');
    } else {
      statusSpan.textContent = 'Open task';
      taskNode.classList.add('status-done');
    }
    this.toggleDropdownMenu(taskNode)();
  }

  deleteTask(id) {
    const listItem = this.getItem(id);
    this.listContainer.removeChild(listItem);
  }

  editTask({ title, description, priority }, id) {
    const listItem = this.getItem(id);
    const listTitle = listItem.querySelector('.list__title');
    const listDescription = listItem.querySelector('.list__description');
    const listPriority = listItem.querySelector('.list__priority');

    listTitle.textContent = title;
    listDescription.textContent = description;
    listPriority.textContent = priority;
  }
}

TaskView.prototype.toggleDropdownMenu = (taskNode) => () => {
  const dropMenu = taskNode.querySelector('.list__edit-container');
  dropMenu.classList.toggle('_hidden');
};

TaskView.prototype.clearForm = (form) => {
  const elements = Array.from(form.elements);
  elements.forEach((el) => {
    if (el.nodeName !== 'SELECT') {
      el.value = null;
    } else if (el.name === 'priority') {
      el.value = 'normal';
    }
  });
};

export default TaskView;
