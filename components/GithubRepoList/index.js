import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isRepoPublic, cleanRepoFields, sortByStars, cleanOwner } from '../../utils/githubUtil';
import RepoList from './RepoList';
import RepoOwner from './RepoOwner';

const ListContainer = styled.article`
	font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

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
			<ListContainer id={`user-${this.props.userName}`}>
				{ owner && <RepoOwner {...owner} /> }
				{ repos && <RepoList repos={repos} /> }
			</ListContainer>
		);
	}
}

GithubRepoList.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default GithubRepoList;
