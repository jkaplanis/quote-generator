import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
  // Redirect
} from "react-router-dom";
import MyDocument from "./CreatePdf";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Quote Generator</h1>
        </Route>
        <Route exact path="/preview">
          <PDFViewer height="800" width="600">
            <MyDocument />
          </PDFViewer>
        </Route>
        <Route exact path="/pdf">
          <PDFDownloadLink document={<MyDocument />} fileName="quote.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
