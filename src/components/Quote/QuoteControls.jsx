import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useColorContext } from '../../hooks/useColorContext';
import Button from '../Button';
import TwitterIcon from '../TwitterIcon';

export default function QuoteControls({ onChange }) {
	const { color } = useColorContext();
	const { quote, author } = useSelector((state) => state.quote);
	const [tweetLink, setTweetLink] = useState('#');

	useEffect(() => {
		const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
			`"${quote}" - ${author}`
		)}`;
		setTweetLink(quote ? twitterUrl : 'https://twitter.com/');
	}, [quote]);

	return (
		<div className="QuoteControls flex justify-between mt-8">
			<div className="QuoteControls__shareButtons">
				<Button
					href={tweetLink}
					id="tweet-quote"
					className="text-slate-100 py-2 px-4 rounded"
					background={color}>
					<TwitterIcon />
				</Button>
			</div>
			<Button
				onClick={onChange}
				id="new-quote"
				className="text-slate-100 py-2 px-4 rounded"
				background={color}>
				New Quote
			</Button>
		</div>
	);
}
