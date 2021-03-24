declare var VanillaCalendar;

import { ListComponent } from "./TS_modules/components";
import { Storage, StorageController } from "./TS_modules/storage";
import { IdGenerator } from "./TS_modules/idGenerator";
import { MessageClient } from "./TS_modules/messageClient";
import { Render } from "./TS_modules/render";
import { ElementClient, EventClient } from "./TS_modules/DOMClient";

let storage = new Storage();
storage.initStorage();
let storageDo = new StorageController(storage.toDoStorage);
let dom: any = new ElementClient();

let myCalendar = new VanillaCalendar({
  selector: "#myCalendar",
  pastDates: false,
  onSelect: (data, elem) => {
    function converteToDate(d: any): object {
      let dateList: string[] = d.date.split(" ");
      return new Date(
        Date.parse(`${dateList[1]} ${dateList[2]}, ${dateList[3]}`)
      );
    }
    let selectedDate: object = converteToDate(data);
    dom.setSelectedElements(selectedDate, elem);
  },
});

dom.setCalendarBody(document.body.querySelector(".vanilla-calendar-body"));
let component = new ListComponent();
let idGenerator = new IdGenerator();
let message = new MessageClient();
let renderMashine = new Render(storage.toDoStorage, dom, component);
let client = new EventClient(
  storageDo,
  renderMashine,
  message,
  dom,
  idGenerator,
  storage.toDoStorage
);

client.initFormEvents();
client.initListEvents();
client.initCalendarChangeEvents();
client.initSaveBeforeClose();
