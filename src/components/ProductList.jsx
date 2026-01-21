import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../redux/productSlice.jsx'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem.jsx'

const ProductList = () => {
  const dispatch = useDispatch()
  // aşşağıda product'ı parantez içine aldık çünkü store'dan çektiğim products'ı object distructure ettik
  const { products } = useSelector((store) => store.products)


useEffect(() => {
  dispatch(getAllUsers())
}, [])

  return (

    <div className='flex-row' style={{flexWrap:"wrap", gap:"30px"}}>
      {
        products && products.map((product) => (
          <ProductItem key={product.id} product={product} />
        )) 
      }
      
    </div>
  )
}

export default ProductList
