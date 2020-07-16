import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogWindow from './components/DialogueWindow'

function mapStateToProps(state) {
  return {}
}

class App extends Component {
  render() {
    return (
      <div>
        <DialogWindow/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(App)
