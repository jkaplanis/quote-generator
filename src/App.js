import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
  // Redirect
} from "react-router-dom";
import Pdf from "./pages/PrintReadyPdf";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Pdf />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
