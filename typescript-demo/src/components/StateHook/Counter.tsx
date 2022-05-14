import { useReducer } from "react";

type CounterState = {
  count: number;
};

// Discriminated Unions in Typescript and is the recommended
// approach for typing reducer functions.

type UpdateAction = {
  // This is responsible only for increment and decrement actions.
  type: "increment" | "decrement";
  payload: number;
};

type ResetAction = {
  // This is responsible only for reset action.
  type: "reset";
  // payload?: number;
};

type CounterAction = UpdateAction | ResetAction;

const initialState = {
  count: 0,
  /*
    First we have an initial state which is an object
    with count set to 0.
  */
};

function reducer(state: CounterState, action: CounterAction) {
  /*
        reducer function is responsible for updating the state.
        It accepts state and action as parameters and based on
        the action.type, it updates the counte value.

        If action.type is increment, count is incremented by
        payload that is specified when dispatching the action.
        
        If action.type is decrement, we subtract the payload
        from the current count value.

        Else we will return the case as it is in default case.
    */
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /*
    We have called useReducer hook passing in reducer function and
    initial state which returns the state and dispatch for use in
    our component.
  */
  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
  /*
    In the JSX, we displayed the counte value and also we have two
    buttons to update the count value.

    The first one is Increment 10 which onClick dispatches an action
    where type is increment and payload is 10.

    Similarly we have Decrement 10 button with type as decrement and
    payload as 10.
  */
};
