import type { Request, Response } from 'express'
import { ControllerName } from './dependency-injection/dependency-injection'

interface CustomRequestProps {
  Body: unknown
  Query: unknown
  Params: unknown
}
type CustomRequest<T extends Partial<CustomRequestProps> = any> = Request<T['Params'], never, T['Body'], T['Query']>
type CustomHandler = (name: ControllerName) => (req: CustomRequest, res: Response) => void

export type { CustomHandler, CustomRequest }
