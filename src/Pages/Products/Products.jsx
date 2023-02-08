import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardProduct from '../../Components/CardProduct/CardProduct'
import { Link } from 'react-router-dom'
import ProductsApi from '../../utils/products'
import Card from '../../Components/card/Card'
export default function Products() {
    const [data, setData] = useState([])
    useEffect(() => {
        ProductsApi.getProducts()
        .then(res=> {setData(res.data.products)})
        .catch(err=> {console.log(err);})
    }, [])

    function addProductFunc(){
        ProductsApi.addProduct()
          .then(res=> {console.log(res);})
          .catch(err=> {console.log(err);})
    }
    return (
        <div>
            <h1>Prosducts</h1>
            <button onClick={()=>{addProductFunc()}}>Add Products</button>
            {
                (data.length > 0) ?
                    <>
                        {
                            data.map((arr, key) => {
                                return(
                                     <Card state={arr}/>
                                    )
                            })
                        }
                    </>
                    :
                    <>false</>
            }

            <div>
                <Link to='/all-products'><button>all products</button></Link>
            </div>
        </div>
    )
}
