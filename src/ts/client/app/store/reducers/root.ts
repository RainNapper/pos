import { browseReducer, IBrowseStoreState } from "client/app/store/reducers/browse";
import { IMenuStoreState, menuReducer } from "client/app/store/reducers/menu";
import { IUserStoreState, userReducer } from "client/app/store/reducers/user";
import { combineReducers, Reducer } from "redux";

export interface IRootStoreState {
  user: IUserStoreState;
  browse: IBrowseStoreState;
  menu: IMenuStoreState;
}

export const rootReducer: Reducer<IRootStoreState> = combineReducers<IRootStoreState>({
  user: userReducer,
  browse: browseReducer,
  menu: menuReducer,
});
