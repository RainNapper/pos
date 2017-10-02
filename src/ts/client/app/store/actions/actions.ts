import { IBrowseStoreState } from "client/app/store/reducers/browse";
import { Action } from "redux";

export type AppAction =
  INoAction
  | INavigateToAction
  | INavigateBackAction
  | ITableAddItemAction
  ;

export type NAVIGATE_TO = "POSPOS/BROWSE/NAVIGATE";
export const NAVIGATE_TO: NAVIGATE_TO = "POSPOS/BROWSE/NAVIGATE";
export interface INavigateToAction extends Action {
  type: NAVIGATE_TO;
  target: string;
}

export type NAVIGATE_BACK = "POSPOS/BROWSE/NAVIGATE_BACK";
export const NAVIGATE_BACK: NAVIGATE_BACK = "POSPOS/BROWSE/NAVIGATE_BACK";
export interface INavigateBackAction extends Action {
  type: NAVIGATE_BACK;
  stepsBack: number;
}

export type TABLE_ADD_ITEM = "POSPOS/TABLE/ADD_ITEM";
export const TABLE_ADD_ITEM: TABLE_ADD_ITEM = "POSPOS/TABLE/ADD_ITEM";
export interface ITableAddItemAction extends Action {
  type: TABLE_ADD_ITEM;
}

export interface INoAction extends Action {
  type: "";
}
