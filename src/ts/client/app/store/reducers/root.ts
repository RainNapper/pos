import { combineReducers, Reducer } from 'redux';
import { nameReducer, INameStoreState } from 'client/app/store/reducers/name';
import { browseReducer, IBrowseStoreState } from "client/app/store/reducers/browse";
import { menuReducer, IMenuStoreState } from "client/app/store/reducers/menu";

export interface IRootStoreState {
  // user?: IUserState;
  name: INameStoreState;
  browse: IBrowseStoreState;
  menu: IMenuStoreState;
}

export const rootReducer: Reducer<IRootStoreState> = combineReducers<IRootStoreState>({
  name: nameReducer,
  browse: browseReducer,
  menu: menuReducer,
});