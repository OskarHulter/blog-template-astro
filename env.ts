import { parseEnv } from "znv"
import { z } from "zod"

export const { CLOUDINARY_URL } = parseEnv(process.env, {
  CLOUDINARY_URL: z.string().min(1),
})
// LLAMA_COUNT: z.number().int().positive(),
//   COLOR: z.enum(["red", "blue"]),
//     SHINY: z.boolean().default(true), 
console.log([CLOUDINARY_URL].join(", "))


/*
robots.txt

User-agent: Googlebot
Disallow: /nogooglebot/

User-agent: *
Allow: /
*/
