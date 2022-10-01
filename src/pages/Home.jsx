import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/Products.slice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Home = () => {    

  const dispatch = useDispatch()
  const productsList = useSelector(state => state.products)
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  
  
  const [productsFilter, setProductsFilert] = useState([])
  
  
  
  const [searchProduct, setSearchProduct] = useState("")
  const [searchFrom, setSearcFrom] = useState("")
  const [searchTo, setSearcTo] = useState("")

  //console.log(productsList);


  
  useEffect(() => {
    axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
      .then(res => setCategories(res.data.data.categories))
  }, [])

  useEffect(() =>{
    setProductsFilert(productsList)
  },[productsList])



  const filterCategory = (categoryId) => {
    let filter = productsList.filter( products => products.category.id === categoryId )
    setProductsFilert(filter)
  }

  
  const seacrhProdcuts = () => {
      let filter = productsList.filter(products => products.title.includes(searchProduct))
      setProductsFilert(filter)
  }

  const priceFilter = () => {
    let filter = productsList.filter(products => {
      return products.price >= searchFrom && products.price <= searchTo
    })
    setProductsFilert(filter)
  }







  return (
    <div>
      <h1>HOME</h1>
      <div >
      <div className='Filtercategory' >
      {
        categories.map(category => (
          <Button onClick={() => filterCategory(category.id)} variant="dark" key={category.id} > {category.name}  </Button>
        ))
      }
      </div>
      <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="From"
          value={searchFrom}
          type="number"
          onChange={(e) => setSearcFrom(e.target.value)}
        />
        <Form.Control
          placeholder="to"
          value={searchTo}
          type="number" 
          onChange={(e) => setSearcTo(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={priceFilter}>
          filter Price
        </Button>
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search products"
          value={searchProduct} 
          onChange={(e) => setSearchProduct(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={seacrhProdcuts}>
          Button
        </Button>
      </InputGroup>
      </div>


        {
          productsFilter?.map(product => (
            <Card key={product.id}  className="w-25 mb-5" onClick={() => navigate(`/product/${product.id}`)} >
            <Card.Img variant="top w-50" src={product.productImgs[0]} />
            <Card.Body>
              <Card.Title> {product.title} </Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <h3> {product.price} </h3>
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