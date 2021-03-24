export class ElementClient {
  public calendarElment: HTMLElement;
  public inputElement: HTMLInputElement;
  public form: HTMLFormElement;
  public listWrapper: HTMLTableSectionElement;
  public currentDate: Date;
  public currentCalendarPoint: HTMLElement;
  public datePerform: HTMLSpanElement;
  public calendarBody: HTMLElement;

  constructor() {
    this.calendarElment = document.querySelector("#myCalendar");
    this.inputElement = document.querySelector("#ctrlText");
    this.form = document.querySelector("#ctrlForm");
    this.listWrapper = document.querySelector(".list");
    this.datePerform = document.querySelector("#ctrlDate");
  }

  setSelectedElements(date: Date, calendarPoint: HTMLElement) {
    this.currentDate = date;
    this.currentCalendarPoint = calendarPoint;
  }

  setCalendarBody(givenElement: HTMLElement) {
    this.calendarBody = givenElement;
  }
}

export class EventClient extends ElementClient {
  protected _currentDate: Date;
  protected _currentCalendarPoint: HTMLElement;

  constructor(
    public storageControllerClass: any,
    public renderClass: any,
    public messageController: any,
    public domStorage: any,
    public idGenerator: any,
    public toDoStorage: any
  ) {
    super();
    this.storageControllerClass = storageControllerClass;
    this.renderClass = renderClass;
    this.messageController = messageController;
    (this.domStorage = domStorage), (this.idGenerator = idGenerator);
    this.toDoStorage = toDoStorage;
  }

  initFormEvents(): void {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!this.domStorage.inputElement.value) {
        this.messageController.show("You need to enter correctly value!");
        return;
      }

      if (this.domStorage.datePerform.innerText == "Chose the date pls!") {
        this.messageController.show("You need to chose a date!");
        return;
      }
      this.storageControllerClass.saveTask({
        taskContent: this.domStorage.inputElement.value,
        isDone: false,
        randomID: this.idGenerator.generate(),
        taskDay: +this.domStorage.currentDate,
      });
      this.storageControllerClass.sendStorage();
      this.renderClass.cleanInput(this.domStorage.inputElement);
      this.renderClass.initRender();
    });
  }

  initListEvents(): void {
    this.renderClass.initRender();
    this.listWrapper.addEventListener("click", (event) => {
      let listTarget: any = event.target;
      if (listTarget.matches(".list__button")) {
        this.storageControllerClass.deleteTask(
          listTarget.parentElement.dataset.taskId
        );
        this.renderClass.initRender();
        this.storageControllerClass.sendStorage();
      }
      if (listTarget.matches(".list__item")) {
        listTarget.classList.toggle("list__item_checked");
        if (listTarget.classList.contains("list__item_checked")) {
          let newOptions: any = this.storageControllerClass.takeTaskById(
            listTarget.dataset.taskId
          );
          if (!newOptions) return;
          newOptions.isDone = true;
          this.storageControllerClass.updateTask(newOptions);
        } else {
          let newOptions: any = this.storageControllerClass.takeTaskById(
            listTarget.dataset.taskId
          );
          newOptions.isDone = false;
          this.storageControllerClass.updateTask(newOptions);
        }
        this.storageControllerClass.sendStorage();
      }
    });
  }

  initCalendarChangeEvents(): void {
    this.calendarElment.addEventListener("click", () => {
      this.renderClass.initRender();
    });
  }
}
