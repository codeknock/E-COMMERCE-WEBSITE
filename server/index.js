import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
import connectDB from './config/db.js'
dotenv.config()
connectDB()
app.use(cors())


app.use(express.json())

import productRoute from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

app.get('/',(req, res) => {
    res.send('API is running....')
})

app.use('/api/products', productRoute)

app.use(notFound)
app.use(errorHandler)




const port = process.env.PORT
app.listen(port,
    console.log(`server is up and running in port ${port}`)
)