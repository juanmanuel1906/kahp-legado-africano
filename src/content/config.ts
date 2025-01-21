import { defineCollection, z } from "astro:content";

/*
const showcase = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      url: z.string().url(),
      featured: z.number().min(1).optional(),
    }),
});*/

const albums = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

export const collections = {
  /*showcase,*/ albums
};
