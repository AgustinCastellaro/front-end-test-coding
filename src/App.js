import react from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mainpage from './pages/Mainpage';
import UserDetails from './pages/UserDetails';
import './sass/app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/user/:name" component={UserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
