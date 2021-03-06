import { Component, OnInit } from "@angular/core";
import { MessageComponent } from "../message/message.component";
import { MessagesService } from "../../messages.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  messages: MessageComponent[];

  constructor(private messagesService: MessagesService) {
    this.messages = this.messagesService.messageGenerator(10);
    console.log(`Arry len ${this.messages}`);
  }

  ngOnInit() {}
}
