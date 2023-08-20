import { createContext, useEffect, useState } from 'react';
import { getRandomColor } from '../utils/quoteUtils';

export const ColorContext = createContext();

export function ColorProvider({ children }) {
	const [color, setColor] = useState([]);

	useEffect(() => {
		const randomColor = getRandomColor();
		setColor(randomColor);
	}, []);

	const sharedValue = {
		color,
		setColor,
	};

	return (
		<ColorContext.Provider value={sharedValue}>
			{children}
		</ColorContext.Provider>
	);
}
