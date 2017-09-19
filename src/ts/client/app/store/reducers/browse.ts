import { Reducer } from 'redux';
import { AppAction, NAVIGATE, NAVIGATE_BACK } from '../actions/actions';

export interface IBrowseStoreState {
  selectedId?: string;
  path: string[];
}

const DEFAULT_STATE: IBrowseStoreState = {
  selectedId: undefined,
  path: ['1']
}

export const browseReducer: Reducer<IBrowseStoreState> = (
  state: IBrowseStoreState = DEFAULT_STATE,
  action: AppAction): IBrowseStoreState => {
  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        path: [...state.path, action.target]
      };
    case NAVIGATE_BACK:
      return {
        ...state,
        path: state.path.slice(0, state.path.length - action.stepsBack)
      }
    default:
      return state;
  }
}