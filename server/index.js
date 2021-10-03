import express from 'express'
import dotenv from 'dotenv'
const app = express()
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB('')




app.get('/',(req, res) => {
    res.send('API is running....')
})

app.get('/api/products', (req, res) => {
    res.send(products)
})


app.get('/api/products/:id', (req, res) => {
   const product = products.find(p => p._id === req.params.id)
   res.json(product)
})



const port = process.env.PORT
app.listen(port,
    console.log(`server is up and running in port ${port}`)
)