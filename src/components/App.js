import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../router/Detail";
import Home from "../router/Home";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
