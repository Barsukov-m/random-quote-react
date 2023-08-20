import './sass/main.scss';

import { useEffect } from 'react';
import { useColorContext } from './hooks/useColorContext';

// Components
import QuoteBox from './components/Quote/QuoteBox';

export default function App() {
	const { color } = useColorContext();

	useEffect(() => {
		// apply randomly generated background color for the body elem
		document.body.style.backgroundColor = color;
	});

	return (
		<div className="App flex justify-center items-center h-screen">
			<QuoteBox />
		</div>
	);
}
