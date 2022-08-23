import { createContext } from 'react';

const themes = {
	light: {
		color: 'text-zinc-900',
		backgroundColor: 'bg-white',
	},
	dark: {
		color: 'text-gray-50',
		backgroundColor: 'bg-zinc-900',
	},
};

const Theme = createContext();

const ThemeContext = ({ value, children }) => {
	return <Theme.Provider value={value}>{children}</Theme.Provider>;
};

export { ThemeContext, Theme, themes };
