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
import {useSelector} from "react-redux"

function App() {

  const isloading = useSelector(state => state.isloading)
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
