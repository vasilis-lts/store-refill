import { ILocker } from "./ILocker";

export interface IBlock {
  code: string;
  Lockers: ILocker[];
}
