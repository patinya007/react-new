import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Page/Dashboard'
import LogIn from './Page/LogIn'
import { AuthProvider } from './components/Auth'
import User from './Page/User'
import AddUser from './Page/AddUser'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/user" component={User} />
          <Route exact path="/AddUser" component={AddUser} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;