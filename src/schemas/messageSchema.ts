import { z } from 'zod'

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content must be atleast 10 character" })
    .max(300, { message: 'Content can be at max 300 characters' })
})