import React, { useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Redux/actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Brand New Products</h1>
      {
         loading ? (<h1>loading...</h1>) : error ? (<h3>{error}</h3>) : (
      
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>)}
    </>
  );
};

export default HomeScreen;
