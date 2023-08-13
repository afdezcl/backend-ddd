import { Server } from './server'

export class CoursesApp {
  server?: Server

  async start() {
    const port = process.env.PORT ?? '5001'
    this.server = new Server(port)

    await this.server.listen()
  }

  get httpServer() {
    return this.server?.getHTTPServer()
  }

  async stop() {
    return await this.server?.stop()
  }
}
