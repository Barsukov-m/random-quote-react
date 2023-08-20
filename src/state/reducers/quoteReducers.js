export const setQuoteContent = (state, action) => {
	return {
		...state,
		quote: action.payload,
	};
};

export const setQuoteAuthor = (state, action) => {
	return {
		...state,
		author: action.payload,
	};
};
