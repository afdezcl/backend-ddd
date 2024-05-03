import { Router } from 'express'
import { CustomHandler } from '../types'

export const coursesRoutes = (router: Router, handleWith: CustomHandler) => {
  router.post('/courses', handleWith('coursesPostController'))
  router.get('/courses/:id', handleWith('coursesGetByIdController'))
  router.get('/courses', handleWith('coursesGetController'))
}
