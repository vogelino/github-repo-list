const capitalize = (stringToCapitalize) => stringToCapitalize
	.split('')
	.map((character, index) => (index === 0 ? character.toUpperCase() : character))
	.join('');

export const cleanRepoFields = ({
	name,
	id,
	description,
	html_url: url,
	private: isPrivate,
	created_at: creationDate,
	updated_at: lastUpdateDate,
	homepage,
	size,
	stargazers_count: stars,
	watchers_count: watchers,
	language,
	open_issues: openIssues,
}) => ({
	title: capitalize(name.replace(/-/g, ' ')),
	name,
	id,
	description,
	url,
	isPublic: !isPrivate,
	creationDate,
	lastUpdateDate,
	homepage,
	size,
	stars,
	watchers,
	language,
	openIssues,
});

export const sortByStars = (order) => (
	order === 'ASC' ?
		((a, b) => a.stars - b.stars) :
		((a, b) => b.stars - a.stars)
);

export const isRepoPublic = ({ isPublic }) => Boolean(isPublic);

