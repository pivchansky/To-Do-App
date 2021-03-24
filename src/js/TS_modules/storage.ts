export class Storage {
  public toDoStorage: object;
  constructor() {}

  initStorage(): void {
    if (localStorage.getItem("toDoStorage")) {
      console.log(localStorage.getItem("toDoStorage"));
      this.toDoStorage = JSON.parse(localStorage.getItem("toDoStorage"));
    } else{
      this.toDoStorage = {};
    }
  }

  closeStorage(storage: object): void {
    localStorage.setItem("toDoStorage", JSON.stringify(storage));
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
    let sought;
    for (let key in this.storage) {
      if (key.length < 13) continue;
      this.storage[key].forEach((element) => {
        if (element.randomID == id) sought = element;
      });
    }
    return sought || null;
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
    let sought = this.takeTaskById(id);
    this.storage[this.takeTaskById(id).taskDay].forEach((element, index) => {
      if (element.randomID == id) {
        if (this.storage[this.takeTaskById(id).taskDay].length > 1) {
          delete this.storage[this.takeTaskById(id).taskDay][index];
        } else {
          delete this.storage[this.takeTaskById(id).taskDay];
        }
      }
    });
  }
}
