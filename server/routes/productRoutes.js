import express from 'express'

import { getProduct, getProductById, createProduct } from '../controllers/product.js'

const router = express.Router()

router.post('/', createProduct)
 router.get('/', getProduct)
 router.get('/:id', getProductById)
 
 



export default router