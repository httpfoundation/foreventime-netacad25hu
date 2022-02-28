export type DatoSpeaker = {
	id: number
	name: string
	bio: string
	title: string
	company: string
	slug: string
	image?: {
		url: string
	}
	talk: DatoTalk[]
}

export type DatoTalk = {
	id: number
	title: string
	start: Date
	description: string
	//speaker?: DatoSpeaker[]
	speaker: {
		id: number
	}[]
}

export type DatoLanguage = {
	id: number
	name: string
	slug: string
	image?: {
	url: string
	}
}

export type DatoStream = {
	id: number
	name: string
	youtubeVideoId: string
	language: DatoLanguage
}

export type DatoStage = {
	id: number
	name: string
	slug: string
	schedule?: DatoTalk[]
	streams?: DatoStream[]
}