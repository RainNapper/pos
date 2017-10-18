import { browseReducer, IBrowseStoreState } from "client/app/store/reducers/browse";
import { IMenuStoreState, menuReducer } from "client/app/store/reducers/menu";
import { ITableStoreState, tableReducer } from "client/app/store/reducers/table";
import { IUserStoreState, userReducer } from "client/app/store/reducers/user";
import { combineReducers, Reducer } from "redux";

export interface IRootStoreState {
  user: IUserStoreState;
  browse: IBrowseStoreState;
  menu: IMenuStoreState;
  table: ITableStoreState;
}

export const rootReducer: Reducer<IRootStoreState> = combineReducers<IRootStoreState>({
  user: userReducer,
  browse: browseReducer,
  menu: menuReducer,
  table: tableReducer,
});
