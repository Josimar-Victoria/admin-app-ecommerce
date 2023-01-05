import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogCategoryService from './bCategoryService'

export const getBlogCategory = createAsyncThunk(
  'blogCategories/get-blogcategory',
  async thunkAPI => {
    try {
      return await blogCategoryService.getBlogCategory()
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  bCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  messge: ''
}

export const blogCategorySlice = createSlice({
  name: 'bCategories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBlogCategory.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.bCategories = action.payload
      })
      .addCase(getBlogCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.messge = action.error
      })
  }
})

export default blogCategorySlice.reducer
