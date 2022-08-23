import { useState } from 'react';
import './App.css';
import { ThemeContext, themes } from './context/ThemeContext';
import { Header } from './components/Header';
import { Details } from './components/Details';
import { Button } from './components/Button';

function App() {
	const [theme, setTheme] = useState(themes.light);

	function toggleTheme() {
		theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
	}

	return (
		<div className={`w-screen min-h-screen ${theme.backgroundColor}`}>
			<div className={`mx-auto w-full md:w-8/12 lg:w-5/12 py-10`}>
				<ThemeContext value={theme}>
					<Header className="" />
					<Details />
					<Button onClick={toggleTheme}>Toggle Theme</Button>
				</ThemeContext>
			</div>
		</div>
	);
}

export default App;
