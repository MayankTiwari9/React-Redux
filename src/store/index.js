import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "incrementBy2") {
    return {
      counter: state.counter + 2,
    };
  }

  if (action.type === "decrementBy2") {
    return {
      counter: state.counter - 2,
    };
  }

  return state;
};

const store = createStore(counterReducer);

store.dispatch({type: "incrementBy2"});
store.dispatch({type: "decrementBy2"});


export default store;
