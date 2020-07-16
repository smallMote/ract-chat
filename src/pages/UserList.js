import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserListItem from '@/components/UserListItem'
import './UserList.scss'
import {Link} from "react-router-dom";

function mapStateToProps(state) {
	return {}
}

class UserList extends Component {
	state = {
		users: [
			{
				uuid: 1,
				avatar: '',
				nickName: 'Larry',
				currentMessage: '晚安！'
			},
			{
				uuid: 2,
				avatar: '',
				nickName: 'Anna',
				currentMessage: '晚安,too！'
			},
		]
	}
	goDialog = (uuid) => {
		this.props.history.push(`/dialog/${uuid}`)
	}
	render() {
		return (
			<div className="user-list">
				{
					this.state.users.map((item) =>{
						return (
							// onClick={() => this.goDialog(item.uuid)}
							<Link
								className="list-item"
								key={`user-list-item-${item.uuid}`}
								to={`/dialog/${item.uuid}`}>
								<UserListItem
									uuid={item.uuid}
									avatar={item.avatar}
									nickName={item.nickName}
									currentMessage={item.currentMessage}
								/>
							</Link>
						)
					})
				}
			</div>
		)
	}
}

export default connect(
	mapStateToProps
)(UserList)
