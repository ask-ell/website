import { getMarkdownResources, type MarkdownResource } from "./astro";

export type Member = {
    name: string;
    position: string;
}

export const membersMarkdownResources: MarkdownResource<Member>[] = getMarkdownResources(
    import.meta.glob("/src/pages/about/*.md", { eager: true }),
);