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