import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Anchor from '../atoms/Anchor';

const Container = styled.div`
	display: block;
	margin: 20px 0;
`;

const Avatar = styled.img`
	width: 40px;
	height: 40px;
	float: left;
	border-radius: 50%;
	border: 1px solid lightgrey;
	margin-right: 20px;
`;

const UserName = styled.h1`
	margin: 0;
	padding: 3px 0;
	font-size: 24px;
	font-weight: 300;

	${Anchor} {
		font-weight: 600;
	}
`;

const RepoOwner = ({
	id,
	login,
	htmlUrl,
	avatarUrl,
}) => (
	<Container id={id}>
		<Avatar src={avatarUrl} alt={`Profile pricture of github user "${login}"`} />
		<UserName>
			<Anchor href={htmlUrl} target="_blank" rel="noreferrer noopener">
				{login}
			</Anchor>
			{'\'s repositories'}
		</UserName>
	</Container>
);

RepoOwner.propTypes = {
	login: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	htmlUrl: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string.isRequired,
};

export default RepoOwner;
