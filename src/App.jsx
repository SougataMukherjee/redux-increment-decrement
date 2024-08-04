import { useReducer } from "react";

const initialState = { count: 0, color: false, user: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      //if initialState = 0; then return state + 1;
      return { ...state, count: state.count + 1, color: !state.color };
    case "DECREMENT":
      return { ...state, count: state.count - 1, color: !state.color };
    case "RESET":
      return initialState;
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <p style={{ backgroundColor: state.color ? "#FFF" : "#FFF952" }}>
        Count: {state.count}
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
      <input
        value={state.user}
        onChange={(e) =>
          dispatch({ type: "SET_USER", payload: e.target.value })
        }
        placeholder="Enter user name"
      />
      <p>User: {state.user}</p>
    </div>
  );
}
