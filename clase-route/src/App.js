import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Profile from './components/Profile'
import Dynamic from './components/Dynamic'
import ProtectedRoute from './ProtectedRoute'
import NavBarCustom from './components/NavBarCustom'
import Formulario from './components/Formulario'
import SingIn from './components/SingIn'

const App = () => {

  return(
  <div>
    <NavBarCustom/>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/register' component={Formulario}/>
      <Route exact path='/login' component={SingIn}/>
      <Route exact path='/home/:id' component={Dynamic}/>
      <ProtectedRoute exact path='/app' component={Profile}/>    
      <Route  path='*' component={() => "404 not Found"}/>
    </Switch>
  </div>
)}


export default App;
