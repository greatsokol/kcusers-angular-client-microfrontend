import {Component} from "@angular/core";
import {AuthService} from "@@auth-lib";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./hostapp.component.html"
})
export class HostAppComponent {
  title = "HOST APPLICATION";

  constructor(protected readonly authService: AuthService,
              protected readonly router: Router) {
  }

}
