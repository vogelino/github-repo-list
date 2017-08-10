import React, { PropTypes } from 'react';

const RepoOwner = ({
	id,
	login,
	htmlUrl,
	avatarUrl,
	gistsUrl,
}) => (
	<div className={`repo-owner ${login}`} id={id}>
		<img src={avatarUrl} alt={`Profile pricture of github user "${login}"`} />
		<h1>
			<a href={htmlUrl} target="_blank" rel="noreferrer noopener">
				{login}
			</a>
		</h1>
		<p>
			{gistsUrl}
		</p>
	</div>
);

RepoOwner.propTypes = {
	login: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	htmlUrl: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	gistsUrl: PropTypes.string.isRequired,
};

export default RepoOwner;

