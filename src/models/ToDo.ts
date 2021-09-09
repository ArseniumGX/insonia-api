import db from '../database'

const todoSchema = new db.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true},
    priority: { 
        low: { type: Boolean, default: false},
        mid: { type: Boolean, default: false },
        high: { type: Boolean, default: false }
    },
    status: {
        pending: { type: Boolean, default: false},
        making: { type: Boolean, default: false},
        done: { type: Boolean, default: false}
    },
    deadline: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now}
})

const ToDo = db.model('todo-list', todoSchema)

export default ToDo