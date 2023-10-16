import { GetFormStats } from '@/actions/form';
import { FaWpforms } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { LuView } from 'react-icons/lu';
import { TbArrowBounce } from 'react-icons/tb';
import { StatsCard } from './StatsCard';

type StatsCardProps = {
	data?: Awaited<ReturnType<typeof GetFormStats>>;
	loading: boolean;
};

export function StatsCards(props: StatsCardProps) {
	const { data, loading } = props;
	return (
		<div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<StatsCard
				title="Total Visits"
				icon={<LuView className="text-2xl text-blue-400" />}
				helperText="All time form visits"
				value={data?.visits.toLocaleString() || ''}
				loading={loading}
				className="shadow-md shadow-blue-400"
			/>
			<StatsCard
				title="Total Submissions"
				icon={<FaWpforms className="text-2xl text-yellow-400" />}
				helperText="All time form submissions"
				value={data?.submissions.toLocaleString() || ''}
				loading={loading}
				className="shadow-md shadow-yellow-400"
			/>
			<StatsCard
				title="Submission Rate"
				icon={<HiCursorClick className="text-2xl text-green-400" />}
				helperText="Visits that resulted in form submission"
				value={data?.submissionsRate.toLocaleString() + '%' || ''}
				loading={loading}
				className="shadow-md shadow-green-400"
			/>
			<StatsCard
				title="Bounce Rate"
				icon={<TbArrowBounce className="text-2xl text-red-500" />}
				helperText="Visits without interacting"
				value={data?.bounceRate.toLocaleString() + '%' || ''}
				loading={loading}
				className="shadow-md shadow-red-500"
			/>
		</div>
	);
}

export async function CardStatsWrapper() {
	const stats = await GetFormStats();
	return <StatsCards loading={false} data={stats} />;
}
