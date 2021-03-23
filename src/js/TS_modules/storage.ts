export class Storage {
  public toDoStorage: object;
  constructor() {}

  initStorage(): void {
    if (!localStorage.getItem("toDoStorage")) {
      this.toDoStorage = {};
    }

    if (localStorage.getItem("toDoStorage")) {
      this.toDoStorage = JSON.parse(localStorage.getItem("toDoStorage"));
    }
  }
}

// the basic structure of storage will be:
// {
//  "date timestamp": [{},{},{}],
//  "date timestamp": [{},{},{}],
//  "date timestamp": [{},{},{}],
//  "date timestamp": [{},{},{}],
//  "date timestamp": [{},{},{}],
// }

export class StorageController {
  constructor(private storage: object) {
    this.storage = storage;
  }

  takeTaskById(id: string): any {
    for (let key in this.storage) {
      this.storage[key].forEach((element) => {
        if (element.randomID == id) return element;
      });
    }
    return null;
  }

  takeAllStorage(): object {
    return this.storage;
  }

  saveTask(options: any): void {
    if (this.storage[options.taskDay]) {
      this.storage[options.taskDay].push(options);
    } else {
      this.storage[options.taskDay] = [options];
    }
  }

  updateTask(options): void {
    let sought: object = this.takeTaskById(options.randomID);
    sought = options;
  }

  deleteTask(id: string): void {
    this.storage[this.takeTaskById(id).taskDay].forEach((element, index) => {
      if (element.randomID == id) {
        delete this.storage[this.takeTaskById(id).taskDay][index];
      }
    });
  }
}
