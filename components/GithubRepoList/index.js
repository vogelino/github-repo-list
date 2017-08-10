import React, { Component, PropTypes } from 'react';
import { isRepoPublic, cleanRepoFields, sortByStars, cleanOwner } from '../../utils/githubUtil';
import RepoList from './RepoList';
import RepoOwner from './RepoOwner';

class GithubRepoList extends Component {
	constructor(props) {
		super(props);
		this.state = { owner: false, repos: false };
		this.handleResponse = this.handleResponse.bind(this);
	}
	componentDidMount() {
		fetch(`https://api.github.com/users/${this.props.userName}/repos`)
			.then((response) => response.json())
			.then(this.handleResponse);
	}
	handleResponse(response) {
		this.setState({
			owner: cleanOwner(response[0].owner),
			repos: response
				.map(cleanRepoFields)
				.filter(isRepoPublic)
				.sort(sortByStars('DESC')),
		});
	}
	render() {
		const { repos, owner } = this.state;
		return (
			<div className={`github-repo-list user-${this.props.userName}`}>
				{ owner && <RepoOwner {...owner} /> }
				{ repos && <RepoList repos={repos} /> }
			</div>
		);
	}
}

GithubRepoList.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default GithubRepoList;

