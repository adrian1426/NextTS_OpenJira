import { IInitialUIState } from "@/interfaces";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "./UITypes";

type TActionType = | "SIDEBAR/OPEN" | "SIDEBAR/CLOSE";

interface IAction {
  type: TActionType,
  payload: any
}

export const UIReducer = (state: IInitialUIState, action: IAction): IInitialUIState => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        sideMenuOpen: true
      }
    case SIDEBAR_CLOSE:
      return {
        ...state,
        sideMenuOpen: false
      }
    default:
      return state;
  }
};