import { useContext } from 'react';
import { Theme } from '../../context/ThemeContext';

export const Header = ({ className }) => {
	const theme = useContext(Theme);

	return (
		<div className={className + ` ${theme.color}`}>
			<h1>How does context work?</h1>
			<p>
				First, you need a React application. With it, you can do the following:
			</p>
		</div>
	);
};
