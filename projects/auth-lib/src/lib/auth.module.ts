import {NgModule} from "@angular/core";
import {KeycloakService} from "keycloak-angular";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {KeycloakBearerInterceptorProvider, KeycloakInitializerProvider} from "./keycloak";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    KeycloakService,
    AuthService,
    KeycloakInitializerProvider,
    KeycloakBearerInterceptorProvider
  ],
  exports: []
})
export class AuthModule {
}
