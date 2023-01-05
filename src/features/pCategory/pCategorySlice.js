import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productCategoryService from './pCategoryService'

export const getProductCategory = createAsyncThunk(
  'ppductCategory/get-pcategory',
  async thunkAPI => {
    try {
      return await productCategoryService.getProductCategory()
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  pCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  messge: ''
}

export const pCategorySlice = createSlice({
  name: 'pCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProductCategory.pending, state => {
        state.isLoading = true
      })
      .addCase(getProductCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.pCategories = action.payload
      })
      .addCase(getProductCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.messge = action.error
      })
  }
})

export default pCategorySlice.reducer
