'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect } from 'react';

function Error({ err }: { err: Error }) {
	useEffect(() => {
		console.log(err);
	}, [err]);

	return (
		<div className="flex w-full h-[calc(100vh-60px)] flex-col justify-center items-center gap-4">
			<h2 className="text-red-600 text-4xl">Something went wrong!</h2>
			<Button variant={'outline'} asChild>
				<Link href={'/'}>Go back to home</Link>
			</Button>
		</div>
	);
}

export default Error;
