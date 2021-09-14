import { Router, Request, Response } from 'express'
import todoRouter from './routes/todo.routes'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        author: "José Pereira Macedo",
        alias: "ArseniumGX",
        website: "https://arseniumgx.herokuapp.com/",
        occupation: "Developer Web Fullstack Javascript Jr",
        message: "ArseniumGX's API developed from Blue EdTech Module III (Fullstack)"
    })
})

router.get('/api', (req: Request, res: Response) => {
    return res.status(200).json(
        {
            version: "1.0.0",
            API: 
            {
                path: "/todo",
                methodsAccept: ["GET", "POST", "PUT", "DELETE"],
                model: 
                {
                    title: "*required",
                    description: "*required",
                    priority: 'baixa' || 'media' || 'alta',
                    status: 'fazer' || 'fazendo' || 'feito',
                    deadline: 'YYYY-MM-DD'
                },
                state: "Completed!"
            }
        }
    )
})

router.use('/api/todo', todoRouter)

export default router