import Booklist from "./Components/Booklist";
import Handleevent from "./Components/Handleevent";
import Helloworld from "./Components/Helloworld";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/themeToggle";
import Use_effect from "./Components/Use_effect";
import ThemeContextProvider from "./context/Themecontext";
import Use_state from "./Use_state";
import Spacex from "./Components/Spacex";
import Form from "./Components/Form";
import { ApolloConsumer } from "@apollo/client";

function App() {
  return (
    // <ApolloConsumer>
    //   {(client) => {
    //     console.log(client);
    //     return (
    <div className="App">
      {/* <Helloworld message="xyz" /> */}
      {/* <FunctionalComponent /> */}
      {/* <Handleevent />
      <Use_state />
      <Use_effect /> */}
      {/* <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />
      </ThemeContextProvider> */}
      <Spacex />
      <Form></Form>
    </div>
  );
  //   }}
  // </ApolloConsumer>
}

export default App;
