import { AppAction, NAVIGATE_BACK, NAVIGATE_TO } from "client/app/store/actions/actions";
import { Reducer } from "redux";

export interface IBrowseStoreState {
  path: string[];
  selectedId?: string;
}

const DEFAULT_STATE: IBrowseStoreState = {
  path: ["1"],
  selectedId: undefined,
};

export const browseReducer: Reducer<IBrowseStoreState> = (
  state: IBrowseStoreState = DEFAULT_STATE,
  action: AppAction): IBrowseStoreState => {
  switch (action.type) {
    case NAVIGATE_TO:
      return {
        ...state,
        path: [...state.path, action.target],
      };
    case NAVIGATE_BACK:
      return {
        ...state,
        path: state.path.slice(0, state.path.length - action.stepsBack),
      };
    default:
      return state;
  }
};
