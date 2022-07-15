import React, { useEffect } from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Route>
        <Home path={["/game/:id", "/"]} />
      </Route>
    </div>
  );
}

export default App;
