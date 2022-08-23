import { useContext } from 'react';
import { Theme } from '../../context/ThemeContext';

export const Details = ({ className = '' }) => {
	const theme = useContext(Theme);
	return (
		<div className={className + ` ${theme.color}`}>
			<details>
				<summary>Create a context</summary>
				<p className={`${theme.color}`}>
					Use React.createContext() to start a new context state for your app at
					some component: <br />
					<code>{'const ContextName = createContext()'}</code>
					<br />
					The ContextName will be used on child components, inside a
					useContext() hook.
				</p>
			</details>
			<details>
				<summary>Pass props to many layers of child components</summary>
				<p className={`${theme.color}`}>
					Every child of a context provider component can retrieve the context
					value.
					<code className="block whitespace-pre">
						{`<ContextName.Provider value={AnyValueYouWantToPassDown}>`}
						<br />
						{`\t{ children }`}
						<br />
						{`</ContextName.Provider>`}
					</code>
					<br />
					You just have to use the hook to catch the value on the child, or the
					child's child, or the child child's child. Etc.
					<code className="block whitespace-pre">
						{`const YourChildComponent = () => {`}
						<br />
						{`\tconst contextName = useContext(ContextName); [...]`}
						<br />
						{`}`}
					</code>
					<br />
					But remember: you need to import the context object. <br />
					<code>import ContextName from './whereEverItIs'</code>
				</p>
			</details>
		</div>
	);
};
