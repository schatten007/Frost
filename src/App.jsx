import Home from "./pages/Home";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path={["/", "/game/:id"]}>
          <Home/>
        </Route>
      </Switch>
      <GlobalStyle/>
    </div>
  );
}

export default App;
