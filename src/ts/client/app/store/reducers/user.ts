import { Reducer } from "redux";

export interface IUserStoreState {
  name: string;
}

const DEFAULT_STATE = {
  name: "My One and Only",
};

export const userReducer: Reducer<IUserStoreState> = (
    state: IUserStoreState = DEFAULT_STATE,
    action): IUserStoreState => {
  switch (action.type) {
    default:
      return state;
  }
};
