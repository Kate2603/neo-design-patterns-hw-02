import { INotification, ILogger } from "../core/interfaces";

export class EmailNotification implements INotification {
  constructor(private logger: ILogger) {}

  send(to: string, message: string): void {
    this.logger.log(`Sending EMAIL to ${to}`);
    console.log(`Email sent to ${to}: ${message}`);
  }
}
