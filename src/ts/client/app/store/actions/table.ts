import { ISelectTableAction, SELECT_TABLE } from "app/store/actions/actions";

export const selectTable = (dispatch) => (selectedTable: string): void => {
  dispatch({
    selectedTable,
    type: SELECT_TABLE,
  });
};
