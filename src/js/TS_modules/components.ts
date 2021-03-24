export class ListComponent {
  taskContent: string;
  isDone: boolean;
  randomID: string;
  taskDay: number;

  constructor() {}

  getElement(options: any): HTMLElement {
    this.taskContent = options.taskContent;
    this.isDone = options.isDone;
    this.randomID = options.randomID;
    this.taskDay = options.taskDay;
    let listItem: HTMLElement = document.createElement("div");
    listItem.classList.add("list__item");
    listItem.setAttribute("data-task-id", this.randomID);
    if (this.isDone) listItem.classList.add("list__item_checked");
    listItem.innerHTML = `
            <p class="list__text">${this.taskContent}</p>
            <button class="list__button">Delete</button>`;
    return listItem;
  }
}
