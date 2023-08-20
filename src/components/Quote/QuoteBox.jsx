import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setQuoteContent, setQuoteAuthor } from '../../state/store';
import { getRandomColor, getRandomQuote } from '../../utils/quoteUtils';
import { useColorContext } from '../../hooks/useColorContext';
import Quote from './Quote';
import QuoteControls from './QuoteControls';

export default function QuoteBox() {
	const dispatch = useDispatch();
	const { setColor } = useColorContext();

	useEffect(() => {
		handleQuoteGeneration();
	}, []);

	const handleQuoteGeneration = async () => {
		const { content: randomQuote, author } = await getRandomQuote();
		dispatch(setQuoteContent(randomQuote));
		dispatch(setQuoteAuthor(author));
		setColor(getRandomColor());
	};

	return (
		<div id="quote-box" className="w-1/2 py-10 px-12 bg-slate-100 rounded">
			<Quote />
			<QuoteControls onChange={handleQuoteGeneration} />
		</div>
	);
}
