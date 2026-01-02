import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
products: [], 
selectedProduct:{} ,
    isLoading: true,  
  
}
const API_URL = 'https://fakestoreapi.com'
 export const getAllUsers = createAsyncThunk(
  'products/getallUsers',
  async () => {
    try {   
      const response = await axios.get(`${API_URL}/products`)
      return response.data
    
    } catch (error) {
      return console.log('Something went wrong')
    } 
  }

)
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    }

  
} ,extraReducers: (builder) => {
    builder
  .addCase(getAllUsers.pending, (state) => {
    state.isLoading = true
  })
  .addCase(getAllUsers.fulfilled, (state, action) => {
    state.isLoading = false
    state.products = action.payload
  })
  .addCase(getAllUsers.rejected, (state) => {
    state.isLoading = false
  })  
    
    },

})
// Action creators are generated for each case reducer function
export const { setSelectedProduct } = productSlice.actions

export default productSlice.reducer 