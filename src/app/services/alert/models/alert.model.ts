import { AlertType } from '../enums/alert-type';

export class Alert {
  public type: AlertType;
  public title: string;
  public content: string;

  constructor(data: any = {}) {
    this.type = data.type ? data.type : AlertType.info;
    this.title = data.title ? data.title : '';
    this.content = data.content ? data.content : '';
  }
}
