import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'


export const getBlogs = createAsyncThunk(
  'blog/get-blogs',
  async thunkAPI => {
    try {
      return await blogService.getBlog()
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  messge: ''
}

export const brandSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBlogs.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.blogs = action.payload
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.messge = action.error
      })
  }
})

export default brandSlice.reducer
