import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
    </Router>
  );
}

export default App;
