export enum TalkLangage {
    FR = 'fr'
}

export type Talk = {
    title: string;
    date: Date;
    lang: TalkLangage;
    url: string;
}