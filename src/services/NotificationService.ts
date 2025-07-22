import { INotification } from "../core/interfaces";

export class NotificationService {
  constructor(private channels: INotification[]) {}

  notify(to: string, message: string): void {
    this.channels.forEach((channel) => {
      channel.send(to, message);
    });
  }
}
