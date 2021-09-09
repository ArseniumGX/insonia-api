import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const uri = process.env.NODE_ENV === 'Development' ? 
            `${process.env.DB_HOST}/` : `${process.env.DB_HOST}/`

mongoose.connect(uri, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
    authSource: 'admin',
    autoCreate: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(res => console.info(`Database is connected!`))
  .catch(err => console.error(`Connection fail!`))

export default mongoose

