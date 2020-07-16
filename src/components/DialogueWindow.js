import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogViewer from './DialogViewer'
import NavigationHead from './NavigationHead'
import DialogueBottom from './DialogueBottom'
import './DialogWindow.scss'

function mapStateToProps(state) {
  return {}
}

class DialogueWindow extends Component {
  render() {
    return (
      <div className='dialog-container'>
        <NavigationHead/>
        <DialogViewer/>
        <DialogueBottom/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
)(DialogueWindow)
