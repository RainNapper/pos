import { IBrowseStoreState } from "client/app/store/reducers/browse";
import { Action } from "redux";

export type AppAction =
  INoAction
  | INavigateToAction
  | INavigateBackAction
  | ITableAddItemAction
  | ISelectTableAction
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

export type ADD_ITEM = "POSPOS/TABLE/ADD_ITEM";
export const ADD_ITEM: ADD_ITEM = "POSPOS/TABLE/ADD_ITEM";
export interface ITableAddItemAction extends Action {
  type: ADD_ITEM;
}

export type SELECT_TABLE = "POSPOS/SELECT_TABLE";
export const SELECT_TABLE: SELECT_TABLE = "POSPOS/SELECT_TABLE";
export interface ISelectTableAction extends Action {
  type: SELECT_TABLE;
  selectedTable: string;
}

export interface INoAction extends Action {
  type: "";
}
