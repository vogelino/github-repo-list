import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import GithubRepoList from '../components/GithubRepoList';

const Container = styled.div`
	padding: 0 20px;
`;

export default () => (
	<Container>
		<Head>
			<meta name="viewport" content="width=device-width" />
		</Head>
		<GlobalStyles />
		<GithubRepoList userName="vogelino" />
	</Container>
);
