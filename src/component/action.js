import { INCREMENT, DECREMENT } from "./constant";

export const IncrementAction = (payload) => {
  return {
    type: INCREMENT,
    payload
  };
};

export const DecrementAction = (payload) => {
  return {
    type: DECREMENT,
    payload
  };
};
