import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: {
        include: 'blog/*.md',
      },
      schema: z.object({
        tags: z.string().array().optional(),
        publishedOn: z.string().date(),
        updatedOn: z.string().date().optional(),
      }),
    }),
  },
})
