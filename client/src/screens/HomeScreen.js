import React, { useState, useEffect } from 'react'

import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from "axios"

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      console.log(data)

      setProducts(data)
    }

    fetchProducts()

  }, [])
  
    return (
        <>
          <h1>Brand New Products</h1><br></br>
          <Row>
            {products.map((product => (
            <Col sm={12} md={6} lg={4} xl={3}  key={product._id}>
             <Product product={product} />
            </Col>
          )))}
          </Row>
        </>
    )
}

export default HomeScreen