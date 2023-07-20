import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT, // na porta
  })
  .then(() => {
    console.log('Http server running')
  })
