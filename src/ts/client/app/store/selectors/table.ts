import { IRootStoreState } from "client/app/store/reducers/root";
import { ITable } from "shared/models/table";

export const getActiveTable = (state: IRootStoreState): ITable | undefined  => {
  const activeTable = state.table.activeTable;
  if (activeTable !== undefined) {
    return state.table.tables.get(activeTable);
  }
  return undefined;
};

export const getTables = (state: IRootStoreState): ITable[] => {
  return Array.from(state.table.tables.values());
};
