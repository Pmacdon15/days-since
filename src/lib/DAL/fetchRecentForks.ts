import { cacheLife } from 'next/cache'

export interface Fork {
	id: number
	owner: {
		login: string
		avatar_url: string
		html_url: string
	}
	html_url: string
	created_at: string
	description: string
}

export async function getRecentForks(): Promise<Fork[]> {
	'use cache'
	cacheLife('hours')
	try {
		const response = await fetch(
			'https://api.github.com/repos/microsoft/vscode/forks?sort=newest&per_page=5',
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
