import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyImageComponent } from "./my-image/my-image.component";
import { MyButtonComponent } from "./my-button/my-button.component";
import { MyServiceService } from "./my-service.service";
import { MessagesComponent } from "./models/messages/messages.component";
import { MessageComponent } from "./models/message/message.component";
import { UserComponent } from "./models/user/user.component";
import { MessagesService } from "./messages.service";

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyButtonComponent,
    MessagesComponent,
    MessageComponent,
    UserComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MyServiceService, MessagesService, MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
