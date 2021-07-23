import React, { createContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movie from "./components/Movie";
import "./App.css";

const APP_DEFAULT_STATE = {
  state: {
    categories: [],
    clickedMovie: {}
  },
  setState: () => {},
};

export const AppContext = createContext(APP_DEFAULT_STATE);

function App() {
  const [state, setState] = useState(APP_DEFAULT_STATE.state);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route path="/:movieId">
            <Movie />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
