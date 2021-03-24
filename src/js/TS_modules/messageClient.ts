export class MessageClient {
  protected _snackBar: HTMLElement;
  constructor() {
    this._snackBar = document.body.querySelector("#snackBar");
  }
  show(str: string): void {
    this._snackBar.innerHTML = str;
    this._snackBar.className = "show";
    setTimeout((): void => this._snackBar.classList.remove("show"), 3000);
  }
}
