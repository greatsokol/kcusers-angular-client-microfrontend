import {Component, OnInit} from "@angular/core";

@Component({
  selector: "progress-component",
  templateUrl: "./progress.component.html"
})
export class ProgressComponent implements OnInit {
  public show: string = "false";

  ngOnInit(): void {
    setInterval(() => {
      this.show = "true";
    }, 750);
  }
}
