import { Router } from 'express'
import ToDoController from '../controllers/ToDoController'
import validateId from '../middlewares/validateId'

const router = Router()

router.get('/', ToDoController.showAll)
router.post('/', ToDoController.create)
router.use('/:id', validateId)
router.get('/:id', ToDoController.showOne)
router.put('/:id', ToDoController.update)
router.delete('/:id', ToDoController.delete)

export default router