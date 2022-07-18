import React, { useEffect } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <Route>
        <Home path={["/game/:id", "/"]} />
      </Route>
    </div>
  );
}

export default App;
