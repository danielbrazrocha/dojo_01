import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import './styles/main.css'


const App = () => {
    return <> 
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
}

export default App