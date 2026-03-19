import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const contentSchema = z.object({
	// title: z.string(),
	// description: z.string(),
	// t_start: z.number().optional(),
	// t_end: z.number().optional(),
	// date: z.coerce.date().optional(),
});

export const collections = {
	content: defineCollection({
		loader: glob({ base: './content/', pattern: '**/*.{md,mdx}' }),
		schema: contentSchema,
	}),
};
