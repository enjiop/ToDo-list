import './sass/main.sass';
// import 'normalize.css';
// import 'bootstrap-css';

import Store from './modules/store';
import TaskModel from './modules/model';
import TaskView from './modules/view';
import Controller from './modules/controller';

document.addEventListener('DOMContentLoaded', () => {
  const storage = new Store('local');
  const model = new TaskModel(storage);
  const view = new TaskView();
  const controller = new Controller(model, view);
});
