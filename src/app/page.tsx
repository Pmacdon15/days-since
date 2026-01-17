import { Suspense } from 'react'
import DaysSinceComponent from '@/components/days-since'
import { RecentForks } from '@/components/RecentForks'
import { getForkData } from '@/lib/DAL/fetchDaysSince'
import { getRecentForks } from '@/lib/DAL/fetchRecentForks'

export default async function Home(props: PageProps<'/'>) {
	const forkDataPromise = getForkData()
	const recentForksPromise = props.searchParams.then((search) =>
		getRecentForks({
			page: Number(
				Array.isArray(search.page)
					? search.page[0]
					: (search.page ?? '1'),
			),
		}),
	)

	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />

			<DaysSinceComponent forkDataPromise={forkDataPromise} />

			<div className="mt-16">
				<Suspense>
					<RecentForks recentForksPromise={recentForksPromise} />
				</Suspense>
			</div>
		</main>
	)
}
