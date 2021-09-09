import { Router, Request, Response } from 'express'
import todoRouter from './routes/todo.routes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    (res.json({
        message: "Olá"
    }))
})

router.get('/api', () => {})
router.use('/api/todo', todoRouter)

export default router