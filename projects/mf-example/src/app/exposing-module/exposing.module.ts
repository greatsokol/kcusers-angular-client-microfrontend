import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExampleComponentComponent } from "./example-component/example-component.component";
import { RouterModule } from "@angular/router";
import { FLIGHTS_ROUTES } from "./exposing.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  exports: [
    ExampleComponentComponent
  ],
  declarations: [
    ExampleComponentComponent
  ]
})
export class ExposingModule { }
