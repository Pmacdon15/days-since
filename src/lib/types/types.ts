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

export interface RecentForksResult {
	forks: Fork[]
	page: number
	hasNextPage: boolean
}

export interface ForkData {
	daysSince: number
	lastForkDate: string | null
}
