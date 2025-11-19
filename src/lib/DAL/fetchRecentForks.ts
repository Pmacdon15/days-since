import { cacheLife } from 'next/cache'
import type { Fork, RecentForksResult } from '../types/types'

const PER_PAGE = 5

export async function getRecentForks({
	page = 1,
}: {
	page?: number | undefined
}): Promise<RecentForksResult> {
	'use cache'
	cacheLife('hours')
	try {
		const response = await fetch(
			`https://api.github.com/repos/microsoft/vscode/forks?sort=newest&per_page=${
				PER_PAGE + 1
			}&page=${page}`,
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

		const forks: Fork[] = await response.json()
		const hasNextPage = forks.length > PER_PAGE
		const returnedForks = forks.slice(0, PER_PAGE)

		return { forks: returnedForks || [], page, hasNextPage }
	} catch (error) {
		console.error('Error fetching recent forks:', error)
		return { forks: [], page: 1, hasNextPage: false }
	}
}
