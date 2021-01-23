import Booklist from "./Components/Booklist";
import Handleevent from "./Components/Handleevent";
import Helloworld from "./Components/Helloworld";
import Navbar from "./Components/Navbar";
import Use_effect from "./Components/Use_effect";
import ThemeContextProvider from "./context/Themecontext";
import Use_state from "./Use_state";

function App() {
  return (
    <div className="App">
      <Helloworld message="xyz" />
      {/* <FunctionalComponent /> */}
      {/* <Handleevent />
      <Use_state />
      <Use_effect /> */}
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
