import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NgxGalleryModule } from "ngx-gallery";
import "hammerjs";
import { BodyComponent } from "./components/body/body.component";
import { FooterComponent } from "./components/footer/footer.component";

import { AuthenticationService } from "./services/authentication.service";
import { fakeBackendProvider } from "./helpers/fake-backend";

@NgModule({
  declarations: [AppComponent, HeaderComponent, BodyComponent, FooterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgxGalleryModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
