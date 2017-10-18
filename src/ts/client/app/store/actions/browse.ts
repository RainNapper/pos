import { INavigateBackAction, INavigateToAction, NAVIGATE_BACK, NAVIGATE_TO } from "client/app/store/actions/actions";
import { IRootStoreState } from "client/app/store/reducers/root";
import { Action, Dispatch } from "redux";

export const navigateTo = (dispatch: Dispatch<IRootStoreState>) => (target: string): void => {
  dispatch(buildNavigateToAction(target));
};

export const navigateBack = (dispatch: Dispatch<IRootStoreState>) => (stepsBack: number): void => {
  dispatch(buildNavigateBackAction(stepsBack));
};

const buildNavigateToAction = (target: string): INavigateToAction => {
  return {
    target,
    type: NAVIGATE_TO,
  };
};

const buildNavigateBackAction = (stepsBack: number): INavigateBackAction => {
  return {
    stepsBack,
    type: NAVIGATE_BACK,
  };
};
