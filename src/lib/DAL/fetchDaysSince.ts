import { cacheLife } from 'next/cache'
import type { ForkData } from '../types/types'

export async function getForkData(): Promise<ForkData> {
	'use cache'
	cacheLife('hours')
	try {
		const response = await fetch(
			'https://api.github.com/repos/microsoft/vscode/forks?sort=newest&per_page=1',
			{
				headers: {
					Accept: 'application/vnd.github.v3+json',
					'User-Agent': 'days-since-vscode-fork',
				},
			},
		)

		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status}`)
		}

		const forks = await response.json()

		if (!forks || forks.length === 0) {
			return { daysSince: 0, lastForkDate: null }
		}

		const latestFork = forks[0]
		const forkDate = new Date(latestFork.created_at)
		const now = new Date()
		const diffTime = Math.abs(now.getTime() - forkDate.getTime())
		const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

		return {
			daysSince: diffDays,
			lastForkDate: latestFork.created_at,
		}
	} catch (error) {
		console.error('Error fetching fork data:', error)
		return { daysSince: 0, lastForkDate: null }
	}
}
