import { Reducer } from "redux";

export interface INameStoreState {
  name: string;
}

const DEFAULT_STATE = {
  name: "My One and Only",
};

export const nameReducer: Reducer<INameStoreState> = (
    state: INameStoreState = DEFAULT_STATE,
    action): INameStoreState => {
  switch (action.type) {
    default:
      return state;
  }
};
