import * as z from "zod";

export const contactSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().max(1000),
});

export interface ContactSchema extends z.infer<typeof contactSchema> {}
