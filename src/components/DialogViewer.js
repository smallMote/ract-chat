import React, {Component} from 'react'
import {connect} from 'react-redux'
import DialogMessage from './DialogMessage'
import './DialogViewer.scss'

function mapStateToProps(state) {
  return {}
}

class DialogViewer extends Component {
  render() {
    const { messageList } = this.props
    return (
      <div className="dialog-viewer">
        {
          messageList.map((item, index) => {
            return <DialogMessage
              key={index}
              message={item.message}
              reverse={item.reverse}
            />
          })
        }
        {/*<DialogMessage reverse/>*/}
      </div>
    )
  }
}

export default connect(
  mapStateToProps
)(DialogViewer)
