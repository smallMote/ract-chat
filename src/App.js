import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogWindow from './components/DialogueWindow'
// import Dialog from './pages/Dialog'

function mapStateToProps(state) {
  return {}
}

class App extends Component {
  render() {
    return (
      <div>
        {/*<Dialog/>*/}
        <DialogWindow/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(App)
