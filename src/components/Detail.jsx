import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/productSlice.jsx';
import { useEffect } from 'react';

const Detail = () => {
  const { id } = useParams();
const dispatch = useDispatch();
const {products ,selectedProduct}= useSelector((store) => store.products);
const { title, description, category, image } = selectedProduct || {};
 const getProductById = (id) => {
      products && products.map((item)=>{
        if(item.id === parseInt(id)){
          console.log("item", item);  
         dispatch(setSelectedProduct(item) );

        }
      })

    }
 useEffect(() => {
getProductById(id);

}, []);
  return (
    <div>
    
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Category: {category}</p>
          <img src={image} alt={title} />
        </div>
      
    </div>
  )




}
export default Detail;