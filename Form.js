import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from './src/state-controls/actions';

function mapDispatchToProps(dispatch) {
	return {
		addArticle: article => dispatch(addArticle(article))
	};
};

class ConnectedForm extends React.Component {
	constructor() {
		super();
		this.state = {
			title: ''
		};
	}

	handleChange = (e) => this.setState({ [e.target.id]: e.target.value });

	handleSubmit = (e) => {
		e.preventDefault();
		const { title } = this.state;
		const id = +new Date();
		this.props.addArticle({ title, id });
		this.setState({ title: '' })
	}

	render() {
		const { title } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={title}
					id="title"
					onChange={this.handleChange}
				/>
				<button>Add</button>
			</form>
		)
	}
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;