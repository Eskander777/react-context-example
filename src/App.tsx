import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { ThemeContext, themes } from "./context";
import RoutedComponent from "./components/RoutedComponents";
import RoutedComponent2 from "./components/RoutedComponent2";
import Toolbar from "./components/Toolbar";

function App() {
  const [theme, setNewState] = React.useState(themes.dark);

  const toggleTheme = () => {
    setNewState(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Link</Link>
        <Link to="/new">Link2</Link>
        <Link to="/context">Context</Link>
      </nav>
      <Switch>
        <Route path="/new">
          <RoutedComponent2 />
        </Route>
        <Route path="/context">
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Toolbar />
          </ThemeContext.Provider>
        </Route>
        <Route path="/">
          <RoutedComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
