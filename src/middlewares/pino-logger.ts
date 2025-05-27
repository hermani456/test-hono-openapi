import { pinoLogger } from 'hono-pino'
import { pino } from 'pino'
import env from '@/env.js'

export function createPinoLogger() {
  return pinoLogger({
    pino: pino(
      env.NODE_ENV === 'production'
        ? {}
        : {
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
              },
            },
            level: env.LOG_LEVEL || 'info',
          },
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  })
}
