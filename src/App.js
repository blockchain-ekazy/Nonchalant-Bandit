import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import WelcomePage from './Components/WelcomePage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Switch>
       <Route exact path='/'>
     <WelcomePage/>

       </Route>
       <Route exact path='/Home'>
         <Home/>
       </Route>
     </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
