import './app.scss';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SearchPage from './pages/SearchPage/SearchPage';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [user, setUser] = useState()
  const [pokemon, setPokemon] = useState()
 
const handleChange = (e) =>{
setUser(e.target.value)
} 

const getPokemonSelected = (name) => {
  setPokemon(name)
}

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' >
            <LoginPage handleChange={handleChange} />
            </Route>
            <Route exact path='/search' >
            <SearchPage 
            user={user}
            getPokemonSelected={getPokemonSelected} />
            </Route>
            <Route exact path={`/${pokemon}`} >
            <DetailsPage />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
