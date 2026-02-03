import { extractFormatter, getMarkdownResources, type MarkdownResource } from "./astro";

export enum TalkLangage {
    FR = 'fr'
}

export type Talk = {
    title: string;
    date: Date;
    lang: TalkLangage;
    url: string;
    speaker: string;
}

export const talksMarkdownResources: MarkdownResource<Talk>[] = getMarkdownResources(
    import.meta.glob("/src/pages/talks/*.md", { eager: true }),
);

export const talks: Talk[] = talksMarkdownResources.map(extractFormatter);