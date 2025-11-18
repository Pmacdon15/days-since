import { AlertTriangle } from 'lucide-react'
import { getForkData } from '@/lib/DAL/fetchDaysSince'

export default async function Home() {
	const { daysSince, lastForkDate } = await getForkData()

	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 text-center">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />

			<div className="fade-in zoom-in z-10 flex animate-in flex-col items-center gap-8 duration-1000">
				<div className="relative">
					<div className="-inset-4 absolute animate-pulse-slow rounded-full bg-red-500/20 blur-3xl" />
					<h1 className="select-none bg-gradient-to-b from-zinc-100 to-zinc-600 bg-clip-text pr-[0.2em] pb-[0.1em] font-black text-[12rem] text-transparent leading-none drop-shadow-2xl">
						{daysSince}
					</h1>
				</div>

				<div className="space-y-4">
					<h2 className="letter-spacing-widest font-bold text-2xl text-zinc-400 uppercase tracking-tight md:text-4xl">
						Days Since Last VS Code Fork
					</h2>

					<div className="mx-auto flex w-fit items-center justify-center gap-2 rounded-full border border-amber-900/50 bg-amber-950/30 px-4 py-2 font-mono text-amber-500/80 text-sm md:text-base">
						<AlertTriangle className="h-4 w-4" />
						<span>It happened again.</span>
					</div>

					{lastForkDate && (
						<div className="font-mono text-xs text-zinc-600">
							Last fork: {new Date(lastForkDate).toLocaleString()}
						</div>
					)}
				</div>
			</div>
		</main>
	)
}
