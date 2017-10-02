import { AppAction, TABLE_ADD_ITEM } from "client/app/store/actions/actions";
import { Reducer } from "redux";

interface ITableSelections {
}
interface ITable {
}

export interface ITableStoreState {
  tables: Map<string, ITable>;
}

const DEFAULT_STATE: ITableStoreState = {
  tables: new Map<string, ITable>(),
};

export const browseReducer: Reducer<ITableStoreState> = (
  state: ITableStoreState = DEFAULT_STATE,
  action: AppAction): ITableStoreState => {
  switch (action.type) {
    case TABLE_ADD_ITEM:
    
      return {
        ...state,
      };
    default:
      return state;
  }
};

