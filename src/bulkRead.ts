import { z } from 'zod';

export const BulkReadRequestSchema = z.object({
  query: z.string().min(1),
  files: z
    .array(
      z.object({
        path: z.string().min(1),
        content: z.string(),
      }),
    )
    .min(1),
});
export type BulkReadRequest = z.infer<typeof BulkReadRequestSchema>;

export const BulkReadResponseSchema = z.object({
  summary: z.string().min(1),
});
export type BulkReadResponse = z.infer<typeof BulkReadResponseSchema>;
