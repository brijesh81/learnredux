import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLogged = useSelector(state => state.LoggedReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h>Counter : {counter}</h>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h1>Is logged in</h1> : <h1>Is logged out</h1>}
    </div>
  );
}

export default App;
