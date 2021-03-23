export class ListComponent {
  taskContent: string;
  isDone: boolean;
  randomID: string;
  taskDay: number;

  constructor(options: any) {
    this.taskContent = options.taskContent;
    this.isDone = options.isDone;
    this.randomID = options.randomID;
    this.taskDay = options.taskDay;
  }

  getElement(): HTMLElement {
    let listItem: HTMLElement = document.createElement("div");
    listItem.classList.add("list__item");
    listItem.setAttribute('data-task-id', this.randomID);
    if (this.isDone) listItem.classList.add("list__item_checked");
    listItem.innerHTML = `
            <p class="list__text">${this.taskContent}</p>
            <button class="list__button">Delete</button>`;
    return listItem;
  }
}
