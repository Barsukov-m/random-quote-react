import { createSlice } from '@reduxjs/toolkit';
import { setQuoteContent, setQuoteAuthor } from '../reducers/quoteReducers';

export default createSlice({
	name: 'quote',
	initialState: {
		quote: '',
		author: '',
	},
	reducers: {
		setQuoteContent,
		setQuoteAuthor,
	},
});
