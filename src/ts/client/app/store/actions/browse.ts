import { NAVIGATE_TO, NAVIGATE_BACK, INavigateToAction, INavigateBackAction } from "client/app/store/actions/actions";
import { IRootStoreState } from "client/app/store/reducers/root";
import { Action, Dispatch } from "redux";

export const navigate = (dispatch: Dispatch<IRootStoreState>) => (target: string): void => {
  dispatch(buildNavigateAction(target));
};

export const navigateBack = (dispatch: Dispatch<IRootStoreState>) => (stepsBack: number): void => {
  dispatch(buildNavigateBackAction(stepsBack));
};

const buildNavigateAction = (target: string): INavigateToAction => {
  return {
    type: NAVIGATE_TO,
    target,
  };
};

const buildNavigateBackAction = (stepsBack: number): INavigateBackAction => {
  return {
    type: NAVIGATE_BACK,
    stepsBack,
  };
};
