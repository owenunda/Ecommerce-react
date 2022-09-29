import { configureStore } from '@reduxjs/toolkit'
import isloadingSlice from './slices/isloading.slice'
export default configureStore({
  reducer: {
    isloading: isloadingSlice
	}
})