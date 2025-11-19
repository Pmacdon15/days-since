import { cacheLife } from 'next/cache'
import type { Fork } from '../types/types'

export async function getRecentForks({
	page = 1,
}: {
	page?: number | undefined
}): Promise<Fork[]> {
	'use cache'
	cacheLife('hours')
	try {
		const response = await fetch(
			`https://api.github.com/repos/microsoft/vscode/forks?sort=newest&per_page=5&page=${page}`,
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
		return forks || []
	} catch (error) {
		console.error('Error fetching recent forks:', error)
		return []
	}
}
