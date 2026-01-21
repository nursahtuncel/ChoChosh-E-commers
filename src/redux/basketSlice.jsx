import { createSlice } from '@reduxjs/toolkit'

const getBasketFromStorage=()=>{
  if(localStorage.getItem("basket")){
    return JSON.parse(localStoreage.getItem("baasket"))
  }
  return [];
}

const writeFromBasketToStorage =(basket)=>{
  localStorage.setItem("basket", JSON.stringify(basket))

}
const initialState = {
products:getBasketFromStorage(),


}






export const basketSlice = createSlice({
    name: 'basket',
  initialState,
  reducers: {
    addToBasket :(state,action)=>{

   const findProduct  =products &&  products.find((product)=> product.id==action.payload.id)
   if(findProduct){
    // daha öncceden eklenmiştir
   }else{
// daha önce eklenmemiştir


   }

    }
    

    
  
}   

})

// Action creators are generated for each case reducer function
export const { } = basketSlice.actions

export default basketSlice.reducer 