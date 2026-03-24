class Store {
  state;
  reducer;
  listeners = new Map();

  constructor(reducer, initialState) {
    this.reducer = reducer;
    this.state = initialState;
  }

  subscribe(callback) {
    this.listeners.set(callback, callback);
  }

  unsubscribe(callback) {
    this.listeners.delete(callback);
  }

  sendChanges() {
    this.listeners.values().forEach((callback) => callback(this.state));
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.sendChanges();
  }
}

export const createStore = () => {
  let currentStore = null;
  return (reducer, initialState) => {
    if (currentStore) return currentStore;
    currentStore = new Store(reducer, initialState);
    return currentStore;
  };
};
