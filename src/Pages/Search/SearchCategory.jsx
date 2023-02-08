import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../utils/products';

export default function SearchCategory() {
    const params = useParams()
    useEffect(() => {
       products.searchCategoriesProduct(params.category)
       .then(res=> {console.log(res);})
    }, []);
  return (
    <div>
        <h1>Category Search</h1>
    </div>
  )
}
