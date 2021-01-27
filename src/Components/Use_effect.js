import React, { useState, useEffect } from "react";

function Use_effect() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${counter} times`;
  });
  return (
    <div>
      <p>Click and look at document title</p>
      <button onClick={() => setCounter(counter + 1)}>click {counter}</button>
    </div>
  );
}

export default Use_effect;
