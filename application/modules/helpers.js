class EventEmmiter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    (this.events[event] || (this.events[event] = [])).push(listener);
    return this;
  }

  emit(event, arg) {
    (this.events[event] || []).slice().forEach((lsn) => lsn(arg));
  }
}

export default EventEmmiter;
