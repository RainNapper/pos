import { Action } from 'redux';
import { IBrowseStoreState } from "client/app/store/reducers/browse";

export type AppAction =
  NavigateAction |
  NavigateBackAction |
  OtherAction;

export type NAVIGATE = 'POSPOS/BROWSE/NAVIGATE';
export const NAVIGATE: NAVIGATE = 'POSPOS/BROWSE/NAVIGATE';
export interface NavigateAction extends Action {
  type: NAVIGATE; 
  target: string;
}

export type NAVIGATE_BACK = 'POSPOS/BROWSE/NAVIGATE_BACK';
export const NAVIGATE_BACK: NAVIGATE_BACK = 'POSPOS/BROWSE/NAVIGATE_BACK';
export interface NavigateBackAction extends Action {
  type: NAVIGATE_BACK; 
  stepsBack: number;
}

export interface OtherAction extends Action {
  type: '';
}