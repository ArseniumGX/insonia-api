import { Request, Response } from 'express'
import ToDo from '../models/ToDo'

class ToDoController{
    showAll = async(req: Request, res: Response) => {
        const query = await ToDo.find()
        return query.length < 1 ? res.status(204).json()
                                : res.status(200).json({message: "Tarefas encontradas", count: query.length, data: query})
    }

    showOne = async(req: Request, res: Response) => {
        const { id } = req.params
        const query = await ToDo.findById(id)
        return query ? res.status(200).json({message: "ok!", data: query})
                     : res.status(204).json()
    }

    create = async(req: Request, res: Response) => {
        const { ...params } = req.body

        const check = await ToDo.findOne({title: params.title})
        if(check)
            return res.status(409).json({message: "Tarefa já cadastrada!", data: check})

        const novo = new ToDo({...params})
        const query = await novo.save().then(res => res).catch(err => err)
        
        return query.errors ? res.status(406).json({message: "Ocorreu algum erro, é necessário passar title e description", response: query.erros})
                            : res.status(201).json({message: "Tarefa criada!", response: query})
    }

    update = async(req: Request, res: Response) => {
        const { id } = req.params
        const { ...params } = req.body
        
        const query = await ToDo.findByIdAndUpdate(id, { ...params }, { new: true })
        
        return query ? res.status(202).json({message: "Tarefa atualizada!", data: query})
                     : res.status(204).json()
    }

    delete = async(req: Request, res: Response) => {
        const { id } = req.params
        const query = await ToDo.findByIdAndDelete(id)
        
        return query ? res.status(202).json({message: "Tarefa deletada com sucesso!", response: query})
                     : res.status(204).json()
    }
}

export default new ToDoController