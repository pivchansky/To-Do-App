export class Render {
  constructor(
    public storage: object,
    protected domStorage: any,
    public listComponent: any
  ) {
    this.storage = storage;
    this.domStorage = domStorage;
    this.listComponent = listComponent;
  }
  initRender(): void {
    let formattedToUser: string =
      " " + this.domStorage.currentDate.toString().slice(4, 15);
    this.domStorage.datePerform.innerText = formattedToUser;

    this.domStorage.listWrapper.innerHTML = "";

    if (!((+this.domStorage.currentDate).toString() in this.storage)) {
      this.domStorage.listWrapper.innerHTML =
        '<h3 style="text-align: center;">You have not tasks for this day yet!</h3>';
      return;
    }

    for (let key in this.domStorage.storage) {
      if (key == (+this.domStorage.currentDate).toString()) {
        this.domStorage.storage[key].forEach((item) => {
          this.domStorage.listWrapper.append(
            this.listComponent.getElement({
              taskContent: item.taskContent,
              isDone: item.isDone,
              randomID: item.randomID,
              taskDay: item.taskDay,
            })
          );
        });
      }
    }

    let daySet: object = this.domStorage.calendarBody.querySelectorAll("span");

    function converteToDate(d: string): object {
      let dateList: string[] = d.split(" ");
      return new Date(
        Date.parse(`${dateList[1]} ${dateList[2]}, ${dateList[3]}`)
      );
    }

    for (let key in daySet) {
      let currentDateDiv: HTMLElement = daySet[key].parentElement;
      let currentDateText: string;
      if (currentDateDiv) {
        currentDateText = currentDateDiv.dataset.calendarDate;
      } else {
        break;
      }
      let currentSpanDate: object = converteToDate(currentDateText);
      let spanDate: number = +daySet[key].innerText;
      if (isNaN(spanDate)) return;

      for (let key2 in this.storage) {
        let currentDate: number = new Date(+key2).getDate();

        if (spanDate == currentDate) {
          daySet[key].classList.add("vanilla-calendar-date--has-task");
        } else {
          if (!((+currentSpanDate).toString() in this.storage)) {
            daySet[key].classList.remove("vanilla-calendar-date--has-task");
          }
        }
      }
    }
  }
}
