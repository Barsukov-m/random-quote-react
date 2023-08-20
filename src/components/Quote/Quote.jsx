import { useSelector } from 'react-redux';
import { useColorContext } from '../../hooks/useColorContext';

export default function Quote() {
	const { color } = useColorContext();
	const { quote, author } = useSelector((state) => state.quote);

	return (
		<div className="Quote">
			<div id="text" style={{ color: color }} className="text-2xl text-center">
				{quote}
			</div>
			<div id="author" style={{ color: color }} className="text-right mt-5">
				{author}
			</div>
		</div>
	);
}
