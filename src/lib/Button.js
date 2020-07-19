import React, {Component} from 'react'
import {connect} from 'react-redux'
import './Button.scss'

function mapStateToProps(state) {
	return {}
}

class Button extends Component {
	render() {
		return (
			<button className="btn">
				{ this.props.children }
			</button>
		)
	}
}

export default connect(
	mapStateToProps,
)(Button)
