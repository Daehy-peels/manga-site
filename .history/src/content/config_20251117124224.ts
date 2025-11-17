// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const mangaCollection = defineCollection({
  // 1. We are using 'content' (MDX) for content files
  type: 'content', 
  schema: z.object({
    // 2. These fields will be at the top of the chapter file (the 'frontmatter')
    title: z.string(),
    series: z.string(),
    chapter_number: z.number(),
    release_date: z.date(),
    // 3. This array will hold the file paths for the chapter's manga pages
    pages: z.array(z.string()).optional(), 
  }),
});

// 4. Register the collection with the name 'chapters'
export const collections = {
  'chapters': mangaCollection,
};