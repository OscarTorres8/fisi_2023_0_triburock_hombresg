import express, { Application } from 'express'
import cors from 'cors'
import indexRouter from './index'
import clienteRouter from './routes/clientes'
import entrenadorRouter from './routes/entrenadores'
import usuarioRouter from './routes/usuarios'

const allowedOrigins = ['http://localhost:3000']
const options: cors.CorsOptions = {
  origin: allowedOrigins
}
export class App {
  private readonly app: Application

  constructor (private readonly port: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings (): void {
    this.app.set('port', this.port)
  }

  middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors(options))
  }

  routes (): void {
    this.app.use(indexRouter)
    this.app.use('/servicio-de-clientes/v1/clientes', clienteRouter)
    this.app.use('/servicio-de-entrenadores/v1/entrenadores', entrenadorRouter)
    this.app.use('/servicio-de-usuarios/v1/usuarios', usuarioRouter)
  }

  async listen (): Promise<void> {
    await this.app.listen(this.port)
    console.log(`┬íServidor conectado al puerto ${this.port}!`)
  }
}
