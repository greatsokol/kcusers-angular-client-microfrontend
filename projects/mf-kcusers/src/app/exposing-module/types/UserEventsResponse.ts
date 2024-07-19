import {Principal} from "./Principal";
import {Page} from "./Page";
import {UserEvent} from "./UserEvent";

export type UsersEventsResponse = {
  readonly principal: Principal;
  readonly payload: Page & { content: UserEvent[]; };
}
