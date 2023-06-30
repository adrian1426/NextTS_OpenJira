import { IInitialUIState } from "./IInitialUIState";

export interface IUIContext {
  state: IInitialUIState,
  dispatch: Function
}