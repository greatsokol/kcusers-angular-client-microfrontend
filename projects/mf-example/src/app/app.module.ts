import {NgModule} from "@angular/core";

import {APP_ROUTES} from "./app.routes";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {ExposingModule} from "./exposing-module/exposing.module";
import {BrowserModule} from "@angular/platform-browser";
import {AuthModule} from "@@auth-lib"

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    ExposingModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
