import {Component, inject} from "@angular/core";
import {AuthService} from "@@auth-lib";

@Component({
  selector: "example-component",
  templateUrl: "./example-component.component.html"
})
export class ExampleComponentComponent {
  protected authService = inject(AuthService);
  constructor() {
  }
}
