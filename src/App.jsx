import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Purchases from "./pages/Purchases"
import ProductsDetail from "./pages/ProductsDetail"
import NavBar from './components/NavBar'
import LoadingScreen from './components/LoadingScreen'
import {useDispatch, useSelector} from "react-redux"
import { getProductsThunk } from './store/slices/Products.slice'
import { useEffect } from 'react'

function App() {

  const isloading = useSelector(state => state.isloading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [])



  return (
    <HashRouter>
      <NavBar />
      { isloading && <LoadingScreen /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product/:id" element={<ProductsDetail />} />
      </Routes>

    </HashRouter>
  )
}

export default App
