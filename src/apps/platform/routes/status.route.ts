import { Router } from 'express'
import { CustomHandler } from '../types'

export const healthRoutes = (router: Router, handleWith: CustomHandler) => {
  router.get('/status', handleWith('statusGetController'))
}
