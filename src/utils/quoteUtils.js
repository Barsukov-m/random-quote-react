import axios from 'axios';

export const getRandomColor = () => {
	const materialColors = [
		'#F44336', // Red 500
		'#E91E63', // Pink 500
		'#9C27B0', // Purple 500
		'#673AB7', // Deep Purple 500
		'#3F51B5', // Indigo 500
		'#2196F3', // Blue 500
		'#03A9F4', // Light Blue 500
		'#00BCD4', // Cyan 500
		'#009688', // Teal 500
		'#4CAF50', // Green 500
		'#8BC34A', // Light Green 500
		'#CDDC39', // Lime 500
		'#FFEB3B', // Yellow 500
		'#FFC107', // Amber 500
		'#FF9800', // Orange 500
		'#FF5722', // Deep Orange 500
		'#795548', // Brown 500
		'#9E9E9E', // Grey 500
		'#607D8B', // Blue Grey 500
		'#000000', // Black
	];

	return materialColors[Math.floor(Math.random() * materialColors.length)];
};

export const getRandomQuote = () => {
	return axios
		.get('https://api.quotable.io/random')
		.then((res) => res.data)
		.catch((err) => console.error(err));
};
