import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';
import Form from './components/Form/Form';
import Detail from './components/Detail/Detail';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path = "/" render = {()=><Landing/>}/>
     
      <Route exact path = "/home" render={() => <Home />}/>

      <Route exact path = "/detail/:id" render = {()=><Detail/>}/>

      <Route exact path = "/form" render = {()=><Form/>}/>
      
      <Route exact path = "/nav" render = {()=><NavBar/>}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;




  