import React, { Component, PropTypes } from 'react';
import { isRepoPublic, cleanRepoFields, sortByStars } from '../../utils/githubUtil';
import RepoList from './RepoList';

class GithubRepoList extends Component {
	constructor(props) {
		super(props);
		this.state = { repos: [] };
		this.handleResponse = this.handleResponse.bind(this);
	}
	componentDidMount() {
		fetch(`https://api.github.com/users/${this.props.userName}/repos`)
			.then((response) => response.json())
			.then(this.handleResponse);
	}
	handleResponse(response) {
		const repos = response
			.map(cleanRepoFields)
			.filter(isRepoPublic)
			.sort(sortByStars('DESC'));

		this.setState({ repos });
	}
	render() {
		return (
			<RepoList repos={this.state.repos} />
		);
	}
}

GithubRepoList.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default GithubRepoList;

