import React, { Component, PropTypes } from 'react';
import { isRepoPublic, repoPropTypes, cleanRepoFields, sortByStars } from '../utils/githubUtil';

const RepoListItem = ({
	title,
	id,
	description,
	stars,
	url,
}) => (
	<li className="repo-list-item" id={`repo-${id}`}>
		<h1>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				title={title}
			>
				{title}
			</a>
		</h1>
		<small>{stars} stars</small>
		<p>{description}</p>
	</li>
);

RepoListItem.propTypes = repoPropTypes;

const RepoList = ({ repos }) => (
	<ul className="repo-list">
		{repos.map((repo) => <RepoListItem key={repo.id} {...repo} />)}
	</ul>
);

RepoList.propTypes = {
	repos: PropTypes.arrayOf(PropTypes.shape(repoPropTypes)),
};

class GithubRepoList extends Component {
	constructor(props) {
		super(props);
		this.state = { repos: [] };
		this.handleResponse = this.handleResponse.bind(this);
	}
	componentDidMount() {
		const userName = 'vogelino';
		fetch(`https://api.github.com/users/${userName}/repos`)
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

GithubRepoList.propTypes = {};
GithubRepoList.defaultProps = {};

export default GithubRepoList;

