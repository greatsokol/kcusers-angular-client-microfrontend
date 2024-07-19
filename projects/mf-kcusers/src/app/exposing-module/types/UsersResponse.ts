import {Principal} from "./Principal";
import {Page} from "./Page";
import {User} from "./User";

export type UsersResponse = {
  readonly principal: Principal;
  readonly payload: Page & { content: User[]; };
}
