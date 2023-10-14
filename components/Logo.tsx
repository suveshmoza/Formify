import Link from 'next/link';

function Logo() {
	return (
		<Link
			href={'/'}
			className="font-bold text-2xl bg-gradient-to-r from-blue-200 to-blue-700 text-transparent bg-clip-text hover:cursor-pointer"
		>
			Formify
		</Link>
	);
}

export default Logo;
