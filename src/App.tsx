import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Projects from "./containers/Projects";
import Collections from "./containers/Collections";
import Teams from "./containers/Teams";

import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/collections" component={Collections} />
        <Route path="/teams" component={Teams} />
        <Route path="/" exact component={Projects} />
      </Switch>
    </Router>
  );
};

export default App;
