import { IncrementAction, DecrementAction } from "./action";
import { useSelector, useDispatch } from "react-redux";

export const Page = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Count : {value} </h2>
        <button onClick={() => dispatch(IncrementAction())}>Increment</button>
        <button onClick={() => dispatch(DecrementAction())}>Decrement</button>
      </div>
    </>
  );
};
