import { ChevronLeft, ChevronRight, GitFork } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { RecentForksResult } from '@/lib/types/types'
import { cn } from '@/lib/utils'

function getOrdinalLabel(index: number, page: number): string {
	const labels = [
		'Most Recent',
		'2nd Most Recent',
		'3rd Most Recent',
		'4th Most Recent',
		'5th Most Recent',
	]
	const position = (page - 1) * 5 + index
	return labels[position] || `${position + 1}th Most Recent`
}

export async function RecentForks({
	recentForksPromise,
}: {
	recentForksPromise: Promise<RecentForksResult>
}) {
	const { forks, hasNextPage, page } = await recentForksPromise

	if (forks.length === 0) {
		return null
	}

	return (
		<div className="z-10 w-full max-w-6xl px-4">
			<div className="mb-6 flex items-center justify-center gap-2">
				<GitFork className="h-5 w-5 text-amber-500/80" />
				<h3 className="font-mono text-amber-500/80 text-lg uppercase tracking-wider">
					Recent Forks
				</h3>
			</div>

			<div className="flex items-center gap-4">
				<Link
					className={cn(
						buttonVariants({ variant: 'outline' }),
						'shrink-0 border-amber-900/50 bg-amber-950/30 text-amber-500/90 hover:border-amber-700/70 hover:bg-amber-950/50 hover:text-amber-400',
						page <= 1 && 'pointer-events-none opacity-50',
					)}
					href={`/?page=${page - 1}`}
				>
					<ChevronLeft />
				</Link>

				<div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
					{forks.map((fork, index) => (
						<Link
							className="group block transition-transform duration-200 hover:scale-105"
							href={fork.html_url}
							key={fork.id}
							rel="noopener noreferrer"
							target="_blank"
						>
							<Card className="relative overflow-hidden border-amber-900/50 bg-amber-950/30 backdrop-blur-sm transition-all duration-300 hover:border-amber-700/70 hover:bg-amber-950/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]">
								<CardContent className="p-4">
									<div className="flex flex-col items-center gap-3 text-center">
										<div className="relative">
											<div className="-inset-1 absolute rounded-full bg-amber-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
											<Image
												alt={fork.owner.login}
												className="relative h-12 w-12 rounded-full border-2 border-amber-900/50"
												height={48}
												src={fork.owner.avatar_url}
												width={48}
											/>
										</div>
										<div className="w-full">
											<p className="truncate font-mono text-amber-100/90 text-sm">
												{fork.owner.login}
											</p>
											<p className="mt-1 font-mono text-amber-500/60 text-xs">
												{getOrdinalLabel(index, page)}
											</p>
											<p className="mt-1 font-mono text-amber-500/60 text-xs">
												{new Date(
													fork.created_at,
												).toLocaleDateString()}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</Link>
					))}
				</div>

				<Link
					className={cn(
						buttonVariants({ variant: 'outline' }),
						'shrink-0 border-amber-900/50 bg-amber-950/30 text-amber-500/90 hover:border-amber-700/70 hover:bg-amber-950/50 hover:text-amber-400',
						!hasNextPage && 'pointer-events-none opacity-50',
					)}
					href={`/?page=${page + 1}`}
				>
					<ChevronRight />
				</Link>
			</div>
		</div>
	)
}
