import React, { PropTypes } from 'react';
import styled from 'styled-components';
import RepoListItem, { repoPropTypes } from './RepoListItem';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const RepoList = ({ repos }) => (
	<List>
		{repos.map((repo) => <RepoListItem key={repo.id} {...repo} />)}
	</List>
);

RepoList.defaultProps = {
	repos: [],
};

RepoList.propTypes = {
	repos: PropTypes.arrayOf(PropTypes.shape(repoPropTypes)),
};

export default RepoList;
