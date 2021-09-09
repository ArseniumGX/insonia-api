process.env.NODE_ENV === 'Development' ? require('dotenv').config({ path: "./.env.dev"}) : require('dotenv').config()

import express from 'express'
import cors from 'cors'
import routes from './routes'
import './database'


const app = express()

app.use(express.json())
app.use(cors({
    origin: "",
    optionsSuccessStatus: 200
}))
app.use(routes)

export default app
