import {Principal} from "./Principal";
import {Page} from "./Page";
import {Login} from "./Login";

export type LoginResponse = {
  readonly principal: Principal;
  readonly payload: Page & { content: Login[]; };
}
