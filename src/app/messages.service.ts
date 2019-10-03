import { Injectable } from "@angular/core";
import { MessageComponent } from "./models/message/message.component";
import { MessagesComponent } from "./models/messages/messages.component";
import { UserComponent } from "./models/user/user.component";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  Messages: MessagesComponent;
  messageArray: MessageComponent[];

  constructor() {}

  messageGenerator(numMessages: number) {
    while (numMessages > 0) {
      let newMessage = new MessageComponent();
      newMessage.body = `Test ${numMessages}`;
      numMessages--;
      //this.messageArray.push(newMessage);
      //console.log(newMessage);
    }
    return this.messageArray;
  }
}
