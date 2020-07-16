import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogMessage from './DialogMessage'
import './DialogViewer.scss'

function mapStateToProps(state) {
  return {}
}

class DialogViewer extends Component {
  state = {
    messageList: []
  }
  appendMessage = () => {

  }
  render() {
    return (
      <div className="dialog-viewer">
        <DialogMessage/>
        <DialogMessage reverse/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(DialogViewer)
