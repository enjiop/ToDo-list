import './sass/main.sass';
import 'normalize.css';
import Store from './modules/store';

document.addEventListener('DOMContentLoaded', () => {
  const storage = new Store('local');
  storage.remove(1572645921435);
});
