import Image from 'next/image';
import Link from 'next/link';

function Logo() {
	return (
		<Link
			href={'/'}
			className="flex justify-center items-center font-bold text-2xl bg-gradient-to-r from-blue-200 to-blue-700 text-transparent bg-clip-text hover:cursor-pointer"
		>
			<Image
				priority
				className="h-16 w-16 bg-contain rounded-full bg-inherit"
				height={100}
				width={100}
				src={'/logo.png'}
				alt="Formify logo"
			/>
			<p className="-ml-3 text-2xl">ORMIFY</p>
		</Link>
	);
}

export default Logo;
