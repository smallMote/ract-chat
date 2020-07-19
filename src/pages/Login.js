import React, {Component} from 'react'
import {connect} from 'react-redux'
import Button from "@/lib/Button";
import './Login.scss'

function mapStateToProps(state) {
	return {}
}

class Login extends Component {
	render() {
		return (
			<div className="login">
				<div className="avatar-group">
					<div className="avatar">Anna</div>
					<div className="avatar">Larry</div>
				</div>
				<Button>立即登录</Button>
			</div>
		)
	}
}

export default connect(
	mapStateToProps,
)(Login)
