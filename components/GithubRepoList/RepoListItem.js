import React, { PropTypes } from 'react';

const RepoListItem = ({
	title,
	name,
	id,
	description,
	url,
	creationDate,
	lastUpdateDate,
	homepage,
	size,
	stars,
	watchers,
	language,
	openIssues,
}) => (
	<li className={`repo-list-item ${name}`} id={`repo-${id}`}>
		<h1>
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				title={title}
			>
				{title}
			</a>
			{creationDate}
			{lastUpdateDate}
			{homepage}
			{size}
			{watchers}
			{language}
			{openIssues}
		</h1>
		<small>{stars} stars</small>
		<p>{description}</p>
	</li>
);

export const repoPropTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string,
	url: PropTypes.string.isRequired,
	creationDate: PropTypes.string.isRequired,
	lastUpdateDate: PropTypes.string.isRequired,
	homepage: PropTypes.string,
	size: PropTypes.number.isRequired,
	stars: PropTypes.number.isRequired,
	watchers: PropTypes.number.isRequired,
	language: PropTypes.string,
	openIssues: PropTypes.number.isRequired,
};

RepoListItem.defaultProps = {
	description: '',
	homepage: '',
	language: 'unknown',
};

RepoListItem.propTypes = repoPropTypes;

export default RepoListItem;

