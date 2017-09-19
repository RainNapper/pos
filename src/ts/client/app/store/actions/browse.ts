import { Action, Dispatch } from 'redux';
import { NAVIGATE, NAVIGATE_BACK, NavigateAction, NavigateBackAction } from "../actions/actions";
import { IRootStoreState } from "../reducers/root";

export const navigate = (dispatch: Dispatch<IRootStoreState>) => (target: string): void => {
  dispatch(buildNavigateAction(target));
}

export const navigateBack = (dispatch: Dispatch<IRootStoreState>) => (stepsBack: number): void => {
  dispatch(buildNavigateBackAction(stepsBack));
}

const buildNavigateAction = (target: string): NavigateAction => {
  return {
    type: NAVIGATE,
    target
  };
}

const buildNavigateBackAction = (stepsBack: number): NavigateBackAction => {
  return {
    type: NAVIGATE_BACK,
    stepsBack,
  }
}