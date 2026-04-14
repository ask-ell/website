import { getMarkdownResources, type MarkdownResource } from "./astro";
import type { Link } from "./links";

export type Product = {
    name: string;
    description: string;
    previewImageFileName: string;
    portfolioImageFileName: string;
    popularity?: number;
    links?: Link[];
}

export const productsMarkdownResources: MarkdownResource<Product>[] = getMarkdownResources(
    import.meta.glob("/src/pages/products/*.md", { eager: true }),
);

export const productsCount = productsMarkdownResources.length;

export function sortByPopularity(productA:  MarkdownResource<Product>, productB: MarkdownResource<Product>): number {
    const productAPopularity = productA.frontmatter.popularity || 0;
    const productBPopularity = productB.frontmatter.popularity || 0;
    return productBPopularity - productAPopularity;
}