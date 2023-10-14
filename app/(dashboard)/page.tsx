import CreateFormBtn from '@/components/CreateFormBtn';
import { Separator } from '@/components/ui/separator';
import { Suspense } from 'react';

import { FormCards } from '@/components/formCards/FormCards';

import { FormCardSkeleton } from '@/components/skeletons/FormCardSkeleton';
import {
	CardStatsWrapper,
	StatsCards,
} from '@/components/statsCard/StatsCards';

export default function Home() {
	return (
		<div className="container py-4 ">
			<Suspense fallback={<StatsCards loading={true} />}>
				<CardStatsWrapper />
			</Suspense>
			<Separator className="my-6" />
			<h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
			<Separator className="my-6" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<CreateFormBtn />
				<Suspense
					fallback={[1, 2].map((el) => (
						<FormCardSkeleton key={el} />
					))}
				>
					<FormCards />
				</Suspense>
			</div>
		</div>
	);
}
