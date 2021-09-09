import { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction): Response | void => {
    const { id } = req.params
    const regex = /[0-9a-fA-F]{24}/
    if(regex.test(id))
        next()
    else
        return res.status(400).json({message: "ID isn't valid!"})
}
