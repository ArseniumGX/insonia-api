import { Request, Response, NextFunction } from 'express'
import { Types } from 'mongoose'

export default (req: Request, res: Response, next: NextFunction): Response | void => {
    const { id } = req.params
    const isValid = Types.ObjectId.isValid(id)
    if(isValid)
        next()
    else
        return res.status(400).json({message: "ID invalid!"})
}
