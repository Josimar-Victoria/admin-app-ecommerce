import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/product/producSlice'
import brandReducer from '../features/brand/brandSlice'
import pCategoryReducer from '../features/pCategory/pCategorySlice'
import blogReducer from '../features/blog/blogSlice'
import blogCategoryReducer from '../features/blogCategory/bCategorySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    pCategorie: pCategoryReducer,
    blog: blogReducer,
    blogCategorie: blogCategoryReducer
  }
})
