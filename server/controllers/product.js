
import asyncHandler from 'express-async-Handler'
import Product from '../models/productModel.js'


const createProduct = asyncHandler(async(req, res) => {
    const product = await new Product(req.body)
    await product.save()
   
   res.json(product)
 })

const getProduct = asyncHandler(async(req, res) => {
    const product = await Product.find({})
    
   res.json(product)
})

const getProductById = asyncHandler(async(req, res) => {
   const product = await Product.findById(req.params.id)
   if (!product) {throw new Error('product not found')}
   
  res.json(product)
})



export { getProduct, getProductById, createProduct }
