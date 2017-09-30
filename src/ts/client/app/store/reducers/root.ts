import { browseReducer, IBrowseStoreState } from "client/app/store/reducers/browse";
import { IMenuStoreState, menuReducer } from "client/app/store/reducers/menu";
import { INameStoreState, nameReducer } from "client/app/store/reducers/name";
import { combineReducers, Reducer } from "redux";

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
