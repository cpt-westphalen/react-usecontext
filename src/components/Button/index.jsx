export function Button({ onClick, children }) {
	return (
		<button
			onClick={onClick}
			className={`block my-6 px-6 py-2.5 bg-zinc-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-100 hover:text-zinc-900 hover:shadow-lg transition duration-150 ease-in-out`}
		>
			{children}
		</button>
	);
}
