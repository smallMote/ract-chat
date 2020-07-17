import React, {Component} from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Switch, Route } from 'react-router-dom'
import DialogWindow from './components/DialogueWindow'
import UserList from "@/pages/UserList";
// import Dialog from './pages/Dialog'

function mapStateToProps(state) {
  return {}
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact  path="/" component={UserList}/>
          <Route exact  path="/dialog" component={DialogWindow}/>
        </Switch>
      </Router>
    )
  }
}

export default connect(
  mapStateToProps,
)(App)
