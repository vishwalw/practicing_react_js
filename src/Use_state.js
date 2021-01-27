import React, { useState } from "react";

function Use_state() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>counter value is: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>increament</button>
    </div>
  );
}

export default Use_state;
