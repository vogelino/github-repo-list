import React, { PropTypes } from 'react';
import styled from 'styled-components';
import fromNow from 'moment-from-now';
import Anchor from '../atoms/Anchor';

const ListItem = styled.li`
	padding: 0;
	margin: 15px 0 20px;
`;

const RepoTitle = styled.h1`
	margin: 0 0 10px;
	padding: 10px 0 0 0;
	border-top: 1px solid lightgrey;
	position: relative;
`;

const RepoTitleLink = styled(Anchor)`
	font-size: 18px;
	font-weight: 600;
`;

const DemoLink = styled(Anchor)`
	font-size: 12px;
	font-weight: 500;
	display: block;
`;

const MetaDataContainer = styled.small`
	color: grey;
	padding-right: 10px;
	margin-right: 10px;
	border-right: 1px solid lightgrey;

	&:last-child {
		border: 0;
	}
`;

const LanguageIcon = styled.svg`
	width: 22px;
	height: 22px;
	position: absolute;
	top: 15px;
	right: 0;
	border-radius: 2px;
`;

const Description = styled.p`
	font-size: 14px;
	font-weight: 400;
	margin: 5px 0 10px;
`;

const MetaData = ({ children, value }) => (
	children && value ? (
		<MetaDataContainer>
			{children}
		</MetaDataContainer>
	) : null
);

MetaData.propTypes = {
	children: PropTypes.any, // eslint-disable-line
	value: PropTypes.any, // eslint-disable-line
};

const languageIcons = {
	JavaScript: (
		<LanguageIcon viewBox="0 0 128 128">
			<path
				fill="#F0DB4F"
				d="M1.408 1.408h125.184v125.185h-125.184z"
			/>
			<path
				fill="#323330"
				d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
			/>
		</LanguageIcon>
	),
	HTML: (
		<LanguageIcon viewBox="0 0 128 128">
			<path
				fill="#E44D26"
				d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387 10.015-112.107h-109.936zm89.126 26.539l-.627 7.172-.276 3.289h-52.665000000000006l1.257 14h50.156000000000006l-.336 3.471-3.233 36.119-.238 2.27-28.196 7.749v.002l-.034.018-28.177-7.423-1.913-21.206h13.815000000000001l.979 10.919 15.287 4.081h.043v-.546l15.355-3.875 1.604-17.579h-47.698l-3.383-38.117-.329-3.883h68.939l-.33 3.539z"
			/>
		</LanguageIcon>
	),
	'Vim script': (
		<LanguageIcon viewBox="0 0 128 128">
			<path
				fill="#179A33"
				d="M72.6 80.5c.2.2.6.5.9.5h5.3c.3 0 .7-.3.9-.5l1.4-1.5c.2-.2.3-.4.3-.6l1.5-5.1c.1-.5 0-1-.3-1.3l-1.1-.9c-.2-.2-.6-.1-.9-.1h-4.8l-.2-.2-.1-.1c-.2 0-.4-.1-.6.1l-1.9 1.2c-.2 0-.3.5-.4.7l-1.6 4.9c-.2.5-.1 1.1.3 1.5l1.3 1.4zM73.4 106.9l-.4.1h-1.2l7.2-21.1c.2-.7-.1-1.5-.8-1.7l-.4-.1h-12.1c-.5.1-.9.5-1 1l-.7 2.5c-.2.7.3 1.3 1 1.5l.3-.1h1.8l-7.3 20.9c-.2.7.1 1.6.8 1.9l.4.3h11.2c.6 0 1.1-.5 1.3-1.1l.7-2.4c.3-.7-.1-1.5-.8-1.7zM126.5 87.2l-1.9-2.5v-.1c-.3-.3-.6-.6-1-.6h-7.2c-.4 0-.7.4-1 .6l-2 2.4h-3.1l-2.1-2.4v-.1c-.2-.3-.6-.5-1-.5h-4l20.2-20.2-22.6-22.4 20.2-20.8v-9l-2.8-3.6h-40.9l-3.3 3.5v2.9l-11.3-11.4-7.7 7.5-2.4-2.5h-40.4l-3.2 3.7v9.4l3 2.9h3v26.1l-14 14 14 14v32l5.2 2.9h11.6l9.1-9.5 21.6 21.6 14.5-14.5c.1.4.4.5.9.7l.4-.2h9.4c.6 0 1.1-.1 1.2-.6l.7-2c.2-.7-.1-1.3-.8-1.5l-.4.1h-.4l3.4-10.7 2.3-2.3h5l-5 15.9c-.2.7.2 1.1.9 1.4l.4-.2h9.1c.5 0 1-.1 1.2-.6l.8-1.8c.3-.7-.1-1.3-.7-1.6-.1-.1-.3 0-.5 0h-.4l4.2-13h6.1l-5.1 15.9c-.2.7.2 1.1.9 1.3l.4-.3h10c.5 0 1-.1 1.2-.6l.8-2c.3-.7-.1-1.3-.8-1.5-.1-.1-.3.1-.5.1h-.7l5.6-18.5c.2-.5.1-1.1-.1-1.4zm-63.8-82.3l11.3 11.3v4.7l3.4 4.1h1.6l-29 28v-28h3.3l2.7-4.2v-8.9l-.2-.3 6.9-6.7zm-59.8 59.2l12.1-12.1v24.2l-12.1-12.1zm38.9 38.3l58.4-60 21.4 21.5-20.2 20.2h-.1c-.3.1-.5.3-.7.5l-2.1 2.4h-2.9l-2.2-2.4c-.2-.3-.6-.6-1-.6h-8.8c-.6 0-1.1.4-1.3 1l-.8 2.5c-.2.7.1 1.3.8 1.6h1.5l-6.4 18.9-15.1 15.2-20.5-20.8z"
			/>

		</LanguageIcon>
	),
};
const getIconByLanguage = (language) => languageIcons[language] || null;

const RepoListItem = ({
	title,
	id,
	description,
	url,
	lastUpdateDate,
	homepage,
	stars,
	watchers,
	language,
	openIssues,
}) => (
	<ListItem id={`repo-${id}`}>
		<RepoTitle>
			{getIconByLanguage(language)}
			<RepoTitleLink
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				title={title}
			>
				{title}
			</RepoTitleLink>
			{
				homepage ? (
					<DemoLink
						href={homepage}
						target="_blank"
						rel="noopener noreferrer"
						title={`${title} | Demo`}
					>
						{
							homepage
								.replace(/(^\w+:|^)\/\//, '')
								.replace(/\/$/, '')
						}
					</DemoLink>
				) : null
			}
		</RepoTitle>
		<Description>{description}</Description>
		<MetaData value={lastUpdateDate}>
			Last updated {fromNow(new Date(lastUpdateDate))}
		</MetaData>
		<MetaData value={openIssues}>
			{openIssues} open issues
		</MetaData>
		<MetaData value={watchers}>
			{watchers} watchers
		</MetaData>
		<MetaData value={stars}>
			{stars} stars
		</MetaData>
	</ListItem>
);

export const repoPropTypes = {
	title: PropTypes.string.isRequired,
	// name: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	description: PropTypes.string,
	url: PropTypes.string.isRequired,
	// creationDate: PropTypes.string.isRequired,
	lastUpdateDate: PropTypes.string.isRequired,
	homepage: PropTypes.string,
	// size: PropTypes.number.isRequired,
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
