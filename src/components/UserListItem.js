import React, {Component} from 'react'
import {connect} from 'react-redux'
import './UserListItem.scss'

function mapStateToProps(state) {
	return {}
}

class UserListItem extends Component {
	render() {
		const { avatarSrc, nickName, currentMessage } = this.props
		return (
			<div className="user-list-item">
				<div className="avatar">
					{avatarSrc && <img src={avatarSrc} alt="avatar"/>}
				</div>
				<div className="media">
					<div className="nick-name">{nickName}</div>
					<div className="current-message">{currentMessage}</div>
				</div>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
)(UserListItem)
