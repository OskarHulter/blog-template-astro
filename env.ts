import { parseEnv } from "znv"
import { z } from "zod"

export const { PUBLIC_GOOGLE_SITE_VERIFICATION } = parseEnv(process.env, {
  PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().min(1),

})
// LLAMA_COUNT: z.number().int().positive(),
//   COLOR: z.enum(["red", "blue"]),
//     SHINY: z.boolean().default(true),
console.log([PUBLIC_GOOGLE_SITE_VERIFICATION].join(", "))
