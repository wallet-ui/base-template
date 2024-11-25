import { defineCollection, defineConfig } from "@content-collections/core";
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

const processor = remark()
  .use(remarkGfm)
  .use(remarkHtml, { sanitize: false });

const posts = defineCollection({
  name: 'posts',
  directory: 'src/content/blog',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
    content: z.string().transform(async (content) => {
      const result = await processor.process(content);
      return result.toString();
    }),
  }),
});

const docs = defineCollection({
  name: 'docs',
  directory: 'src/content',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string().optional(),
    section: z.string().optional(),
    content: z.string().transform(async (content) => {
      const result = await processor.process(content);
      return result.toString();
    }),
  }),
});

export default defineConfig({
  collections: [posts, docs],
});