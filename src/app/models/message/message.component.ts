import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"]
})
export class MessageComponent implements OnInit {
  timestamp: Date;
  body: string;

  constructor() {
    this.timestamp = new Date();
    this.body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
  }

  saveMessage(timestamp: Date, body: string) {
    console.log(timestamp, body);
  }

  ngOnInit() {
    this.saveMessage(this.timestamp, this.body);
  }
}
