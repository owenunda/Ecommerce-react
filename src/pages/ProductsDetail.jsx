import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const ProductsDetail = () => {

  const { id } = useParams()
  const productsList = useSelector(state => state.products)

  const productDetail = productsList.find(product => product.id === +id)

  console.log(productDetail)


  return (
    <div className='mt-5' >
      <h1>ProductsDetail</h1>
      <Carousel fade  variant="dark" className="mt-5 w-50">

        <Carousel.Item className="w-25 m-auto">
          <img
            className="d-block   w-100"
            src={productDetail?.productImgs[0]}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="w-25">
          <img
            className="d-block   w-100"
            src={productDetail?.productImgs[1]}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="w-25" >
          <img
            className="d-block   w-100"
            src={productDetail?.productImgs[2]}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    </div>
  );
};

export default ProductsDetail;