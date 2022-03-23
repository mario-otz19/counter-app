import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";

function App() {
  return (
    <div className="example">
      {/* <Counter /> */}
      {/* <Counter initialValue={ 100 } /> */}
      {/* <CounterBy /> */}
      {/* <CounterEffect />  */}
      <CounterHook />
    </div>
  );
}

export default App;
