import React, { useState } from "react";

function Use_state() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>counter value is: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>increament</button>
    </div>
  );
}

export default Use_state;
