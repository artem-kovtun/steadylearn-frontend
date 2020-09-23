export class PageLoadProperties {
  isDataLoaded: boolean;
  isAccessAllowed: boolean;

  constructor(isAccessAllowed: boolean) {
    this.isDataLoaded = false;
    this.isAccessAllowed = isAccessAllowed;
  }

  public DataLoaded() {
    this.isDataLoaded = true;
  }

  public AccessDenied() {
    this.isAccessAllowed = false;
  }

  public AccessAllowed() {
    this.isAccessAllowed = true;
  }
}
