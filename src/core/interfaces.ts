export interface INotification {
  send(to: string, message: string): void;
}

export interface ILogger {
  log(message: string): void;
}
