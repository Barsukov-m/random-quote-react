import quoteSlice from './slices/quoteSlice';
const { configureStore } = require('@reduxjs/toolkit');

export default configureStore({
	reducer: {
		quote: quoteSlice.reducer,
	},
});

// export actions
export const { setQuoteContent, setQuoteAuthor } = quoteSlice.actions;
