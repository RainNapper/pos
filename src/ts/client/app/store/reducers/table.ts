import { AppAction, SELECT_TABLE } from "client/app/store/actions/actions";
import { Reducer } from "redux";
import { ITable, PartyPhase } from "shared/models/table";

export interface ITableStoreState {
  activeTable?: string;
  tables: Map<string, ITable>;
}

const DEFAULT_STATE: ITableStoreState = {
  activeTable: undefined,
  tables: buildTables(),
};

export const tableReducer: Reducer<ITableStoreState> = (
  state: ITableStoreState = DEFAULT_STATE,
  action: AppAction): ITableStoreState => {
  switch (action.type) {
    case SELECT_TABLE:
      return {
        ...state,
        activeTable: action.selectedTable,
      };
    default:
      return state;
  }
};

function buildTables() {
  return new Map<string, ITable>([
    ["1", {
      id: "1",
      number: 1,
      seats: 4,
    }],
    ["2", {
      id: "2",
      number: 2,
      seats: 4,
    }],
    ["3", {
      id: "3",
      number: 3,
      seats: 8,
    }],
    ["4", {
      id: "4",
      number: 4,
      seats: 6,
    }],
  ]);
}
