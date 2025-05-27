import type { AppBindings } from '@/lib/types.js'
import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'
import { createPinoLogger } from '@/middlewares/pino-logger.js'

const app = new OpenAPIHono<AppBindings>({
  strict: false,
})

export default function createApp() {
  app.use(createPinoLogger())
  app.use(serveEmojiFavicon('🐶'))

  app.onError(onError)
  app.notFound(notFound)
  return app
}
