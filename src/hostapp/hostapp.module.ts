import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {HostAppComponent} from "./hostapp.component";
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./hostapp.routes";
import {FormsModule} from "@angular/forms";
import {AuthModule} from "@@auth-lib";
import {appConfig} from "../config";

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES) //{bindToComponentInputs: true}
  ],
  providers: [
    {
      provide: 'appConfig', useValue: appConfig
    }
  ],
  declarations: [
    HostAppComponent
  ],
  bootstrap: [
    HostAppComponent
  ]
})
export class HostAppModule {
}
