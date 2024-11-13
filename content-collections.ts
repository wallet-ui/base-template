import { defineCollection, defineConfig } from "@content-collections/core";
 
const posts = defineCollection({
  name: 'posts',
  directory: '/src/content/blog',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    image: z.string(),
    authors: z.array(z.string()),
    tags: z.array(z.string()),
  }),
});
 
export default defineConfig({
  collections: [posts],
});