class Store {
  constructor(name) {
    this.name = name;

    if (!localStorage[this.name]) {
      const data = {
        todos: [],
      };

      localStorage[this.name] = JSON.stringify(data);
    }

    this.observable = [];
  }

  addObservable(observable) {
    this.observable.push(observable);
  }

  notify() {
    this.observable.forEach((behavior) => behavior());
  }

  getTask(id) {
    const data = JSON.parse(localStorage[this.name]);
    const resultTask = data.todos.find(
      (item) => Number(item.id) === Number(id),
    );
    if (resultTask) {
      return resultTask;
    }

    return false;
  }

  save(newData, id) {
    const data = JSON.parse(localStorage[this.name]);
    if (id) {
      const newTodos = data.todos.map((task) => {
        if (Number(task.id) === Number(id)) {
          return { ...task, ...newData };
        }
        return task;
      });
      data.todos = newTodos;
    } else {
      // Generate ID
      const newTask = { ...{ id: new Date().getTime() }, ...newData };
      data.todos.push(newTask);
    }
    localStorage[this.name] = JSON.stringify(data);
    this.notify();
  }

  remove(id) {
    const data = JSON.parse(localStorage[this.name]);
    data.todos.forEach((task, i) => {
      if (Number(task.id) === Number(id)) {
        data.todos.splice(i, 1);
      }
    });
    localStorage[this.name] = JSON.stringify(data);
    this.notify();
  }
}

export default Store;
