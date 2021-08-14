import './app.css';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';


function App() {
  const [user, setUser] = useState(null)
 
const handleChange = (e) =>{
setUser(e.target.value)
} 

const logout = () =>{
  setUser(null);
}


  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' >
            <LoginPage handleChange={handleChange} />
            </Route>
            <PrivateRoute path='/search' user={user} component={SearchPage} logout={logout} />
            <Route path='*'>
              Error 404
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
