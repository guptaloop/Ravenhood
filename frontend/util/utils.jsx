export const formatDate = (str) => {
	const newDate = str.slice(0, 10);
	const today = (new Date().toJSON().slice(0, 10).replace(/-/g, '/'));
	const diff = Math.floor((Date.parse(today) - Date.parse(newDate)) / 86400000);
	return diff;
};

export const formatTitle = (title, lim=50) => (
	title.length > lim ? title.slice(0, lim) + '...' : title.slice(0, lim)
);

export const getViewCount = () => (	Math.floor((Math.random() * 1000)) );