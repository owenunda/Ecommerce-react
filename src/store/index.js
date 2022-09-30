import { configureStore } from '@reduxjs/toolkit'
import isloadingSlice from './slices/isloading.slice'
import ProductsSlice from './slices/Products.slice'
export default configureStore({
  reducer: {
    isloading: isloadingSlice,
    products: ProductsSlice
	}
})