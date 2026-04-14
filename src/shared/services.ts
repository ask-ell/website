import { getMarkdownResources, type MarkdownResource } from "./astro";

export type Service = {
    name: string;
    description: string;
    previewImageFileName: string;
}

export const servicesMarkdownResources: MarkdownResource<Service>[] = getMarkdownResources(
    import.meta.glob("/src/pages/services/*.md", { eager: true }),
);

export const servicesCount = servicesMarkdownResources.length;