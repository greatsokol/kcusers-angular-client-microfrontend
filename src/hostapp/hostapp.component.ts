import {Component, inject} from "@angular/core";
import {AuthService} from "@@auth-lib";
import {Router} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./hostapp.component.html"
})
export class HostAppComponent {
  title = "HOST APPLICATION";

  protected readonly authService = inject(AuthService);
  protected readonly router = inject(Router);

  constructor() {
  }

}
