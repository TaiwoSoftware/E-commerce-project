import { useState } from "react";
import CartButton from "./CartButton";
function Counter() {
  const [count, setCounter] = useState(0);
  function incrementCount() {
    setCounter(count + 1);
  }

  function decrementCount() {
    setCounter(count - 1);
  }

  return (
    <>
      <div className="together">
        <div className="counterContainer">
          <button onClick={decrementCount}>-</button>
          <p className="count">{count}</p>
          <button onClick={incrementCount}>+</button>
        </div>
        <CartButton />
      </div>
    </>
  );
}
export default Counter;
