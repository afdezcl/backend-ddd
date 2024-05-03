import { Response } from 'express'
import { CustomRequest } from '../types'

export interface Controller {
  handle: (req: CustomRequest, res: Response) => Promise<void> | void
}
