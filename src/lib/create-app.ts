import type { AppBindings } from '@/lib/types.js'
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
import { defaultHook } from 'stoker/openapi'
import { createPinoLogger } from '@/middlewares/pino-logger.js'

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  })
}

export default function createApp() {
  const app = createRouter()
  app.use(createPinoLogger())
  app.use(serveEmojiFavicon('🐶'))

  app.onError(onError)
  app.notFound(notFound)
  return app
}
