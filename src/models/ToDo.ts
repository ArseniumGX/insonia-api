import moment from 'moment'
import db from '../database'

const todoSchema = new db.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    priority: { type: String, default: '' },
    status: { type: String, default: '' },
    deadline: { type: Date, default: 0 },
    createdAt: { type: Date, default: moment().format('YYYY-MM-DD')}
})

const ToDo = db.model('todo-lists', todoSchema)

export default ToDo