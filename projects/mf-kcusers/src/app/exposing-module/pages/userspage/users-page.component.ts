import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {DATE_FORMAT} from "../../services/DateFormatToken";
import {UsersLoaderService} from "../../services/UsersLoaderService";
import {ActivatedRoute} from "@angular/router";
import {AuthorizableDataComponent} from "../../components/etc/AuthorizableDataComponent";

@Component({
  selector: "users-page-component",
  templateUrl: "./users-page.component.html"
})
export class UsersPageComponent extends AuthorizableDataComponent implements OnInit, OnDestroy {
  protected dateFormat = inject(DATE_FORMAT);
  protected usersLoader = inject(UsersLoaderService);
  private route = inject(ActivatedRoute);
  // private pageNumber = 0;
  // private pageSize = 10;

  ngOnDestroy(): void {
    this.usersLoader.clear();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const page = params["page"] ? params["page"] : 0;
      const size = params["size"] ? params["size"] : 10;
      this.usersLoader.load("/api/users", {page, size});
    });
  }
}
