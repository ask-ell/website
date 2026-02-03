export type MarkdownResource<T> = {
    url: string;
    file: string;
    frontmatter: T;
}

export const getMarkdownResources = <T>(data: Record<string, MarkdownResource<T>>): MarkdownResource<T>[] => Object.values<MarkdownResource<T>>(data);

export const extractFormatter = <T>({ frontmatter }: MarkdownResource<T>): T => frontmatter;

export const getResourceIdentifier = <T>(resource: MarkdownResource<T>): string => resource.file.split("/").reverse()[0].replace(".md", "");