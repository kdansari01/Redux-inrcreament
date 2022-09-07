import { INCREMENT, DECREMENT } from "./constant";

const initialState = {
  value: 0
};
export const AddReducer = (state = initialState, action) => {
  // console.log(INCREMENT);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    default:
      return state;
  }
};
