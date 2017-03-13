import React, { PropTypes } from 'react';
import RepoListItem, { repoPropTypes } from './RepoListItem';

const RepoList = ({ repos }) => (
	<ul className="repo-list">
		{repos.map((repo) => <RepoListItem key={repo.id} {...repo} />)}
	</ul>
);

RepoList.defaultProps = {
	repos: [],
};

RepoList.propTypes = {
	repos: PropTypes.arrayOf(PropTypes.shape(repoPropTypes)),
};

export default RepoList;

