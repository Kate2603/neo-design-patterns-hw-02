import { User } from "./models/User";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";

const logger = new Logger();

const emailNotifier = new EmailNotification(logger);
const smsNotifier = new SMSNotification(logger);
const pushNotifier = new PushNotification(logger);

const user = new User("example@email.com", "+380123456789", "device-token-abc");

// Кожен сервіс окремо викликається лише з релевантними даними
const emailService = new NotificationService([emailNotifier]);
emailService.notify(user.email, "Ваш платіж оброблено успішно!");

const smsService = new NotificationService([smsNotifier]);
smsService.notify(user.phone, "Ваш платіж оброблено успішно!");

const pushService = new NotificationService([pushNotifier]);
pushService.notify(user.deviceToken, "Ваш платіж оброблено успішно!");
