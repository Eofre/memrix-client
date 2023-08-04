export interface IEducationalModule {
    id: number | string,
    name: string,
    description: string,
    words: IWord[]
}

export interface IWord {
    term: string,
    definition: string,
    transcription: string
}

export interface IGameModeItem {
    name: string,
    href: string
}