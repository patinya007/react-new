import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LogIn from './components/LogIn'
import { AuthProvider } from './components/Auth'
import Navbar from './components/Navbar'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/Navbar" component={Navbar} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;