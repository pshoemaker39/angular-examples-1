import { Component, OnInit } from "@angular/core";
import { MyServiceService } from "../my-service.service";
import { AppRoutingModule } from "../app-routing.module";

@Component({
  selector: "app-my-button",
  templateUrl: "./my-button.component.html",
  styleUrls: ["./my-button.component.css"]
})
export class MyButtonComponent implements OnInit {
  state: boolean;

  constructor(private myServiceService: MyServiceService) {
    this.state = false;
  }

  setState() {
    this.state = this.myServiceService.likeImage(this.getState());
  }

  getState() {
    return this.state;
  }

  clicked() {
    this.setState();
    console.log(this.getState());
  }

  ngOnInit() {}
}
