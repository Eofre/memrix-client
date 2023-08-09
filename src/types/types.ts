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
    namePath: string,
    description: string,
}

export interface IAnswerSprint {
    word: IWord;
    answer: string,
    isRight: boolean
}
