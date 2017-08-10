import React from 'react';
import GlobalStyles from '../components/GlobalStyles';
import GithubRepoList from '../components/GithubRepoList';

export default () => (
	<div>
		<GlobalStyles />
		<GithubRepoList userName="vogelino" />
	</div>
);
