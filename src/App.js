import Use_effect from "./Components/Use_effect";
import Use_state from "./Use_state";

function App() {
  return (
    <div className="App">
      <h2>useState to increament counter</h2>
      <Use_state />
      <h2>useEffect used to change document title</h2>
      <Use_effect />
    </div>
  );
}

export default App;
