import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import products from '../../utils/products';
export default function SearchProducts() {
   const params = useParams()
   useEffect(() => {
      products.searchProducts(params.query)
        .then(res=>{console.log(res);})
        .catch(res=> {console.log(res);})
   }, []);
  return (
    <div>
       <h1>Search Result</h1>
    </div>
  )
}
