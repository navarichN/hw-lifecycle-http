import './App.css';
import Watches from './components/Watches/Watches';
import Crud from './components/Crud/Crud';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navigation">
            <ul className="navigation-list">
              <li>
                <Link to="/Watches">Watches</Link>
              </li>
              <li>
                <Link to="/Crud">Crud</Link>
              </li>
            </ul>
          </nav>
          <Route exact path="/Watches" component={Watches} />
          <Route exact path="/Crud" component={Crud} />
        </div>
      </Router>
    </div>
  );
}

export default App;