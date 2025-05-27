import process from 'node:process'
import { config } from 'dotenv'
import { expand } from 'dotenv-expand'
import { z } from 'zod'

expand(config())

const EnvSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),
})

export type Env = z.infer<typeof EnvSchema>

const env: Env = (() => {
  try {
    return EnvSchema.parse(process.env)
  } catch (e) {
    const error = e as z.ZodError
    console.error('Environment variables validation error:', error.errors)
    console.error(error.flatten().fieldErrors)
    process.exit(1)
  }
})() as Env

export default env
