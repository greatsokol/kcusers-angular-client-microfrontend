import {TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ExampleComponentComponent} from "./example-component.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AuthService} from "@@auth-lib";


describe("ExampleComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [ExampleComponentComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
      {
        provide: AuthService,
        useValue: jasmine.createSpyObj("AuthService",
          ["subscribeOnKeycloakReady", "getAuthContext", "isLoggedIn"])
      }
    ]
  }));

  it("Example: should create the application", () => {
    const fixture = TestBed.createComponent(ExampleComponentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it("should render authorities if logged in", () => {
    const fixture = TestBed.createComponent(ExampleComponentComponent);
    fixture.componentInstance.authService.isLoggedIn = jasmine.createSpy().and.returnValue(true);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".test-authorities-rendered")).toBeTruthy();
  });

  it("should render spinner if NOT logged in", () => {
    const fixture = TestBed.createComponent(ExampleComponentComponent);
    fixture.componentInstance.authService.isLoggedIn = jasmine.createSpy().and.returnValue(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".test-spinner")).toBeTruthy();
  });
});
