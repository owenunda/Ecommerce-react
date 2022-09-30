import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/Products.slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {    

  const dispatch = useDispatch()
  const productsList = useSelector(state => state.products)
  const navigate = useNavigate()
  console.log(productsList);



  return (
    <div>
      <h1>HOME</h1>
      <div >
        {
          productsList?.map(product => (
            <Card key={product.id}  className="w-25 mb-5" onClick={() => navigate(`/product/${product.id}`)} >
            <Card.Img variant="top" src={product.productImgs[0]} />
            <Card.Body>
              <Card.Title> {product.title} </Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
          ))
        }

      </div>
    </div>
  );
};

export default Home;