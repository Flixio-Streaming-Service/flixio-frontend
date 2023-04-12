export interface ITab {
    title: string
    emoji: string
    id: string
}

export interface IMainBanner {
    id: string
    title: string
    plot: string
    year: string
    genre: string
    duration: string
    poster: string
}

export interface IFlashNews {
    id: number
    rotate: number
    image: string
    text: string
    date: string
}