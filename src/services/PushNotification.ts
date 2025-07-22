import { INotification, ILogger } from "../core/interfaces";

export class PushNotification implements INotification {
  constructor(private logger: ILogger) {}

  send(to: string, message: string): void {
    this.logger.log(`Sending PUSH to ${to}`);
    console.log(`Push sent to ${to}: ${message}`);
  }
}
