import { ImSpinner8 } from 'react-icons/im';

function Loading() {
	return (
		<div className="flex items-center justify-center w-full h-[calc(100vh-60px)]">
			<ImSpinner8 className="animate-spin h-12 w-12" />
		</div>
	);
}

export default Loading;
