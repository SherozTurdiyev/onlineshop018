import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardProduct from '../../Components/CardProduct/CardProduct';
import SearchNavbar from '../../Components/SearchNavbar/SearchNavbar';
import Card from '../../Components/card/Card'
// import ProductsAPI from '../../utilits/ProductsAPI';
export default function Allproducts() {
    const [productsCount, setProductsCount] = useState(18)
    const [data, setData] = useState([])
    // useEffect(() => {
    //    ProductsAPI.getAllProducts()
    //      .then(res=>{ setData([...res.data.products])})

    //      console.log("single products");
    //      ProductsAPI.getSingleProduct(10)
    //      .then(res=>{console.log(res);})
    // }, [productsCount]);


    function searchCategories(params) {
        console.log('Search categories ishlayapti', params);
        axios.get(`https://dummyjson.com/products/category/${params}`)
            .then(res => {
              setData([...res.data.products])
            })
            .catch(err => {
                console.log(err);
            })
    }

    function searchTitle(){
    //    axios  url : https://dummyjson.com/products/search?q=${params}
    }


    return (
        <div>
            <SearchNavbar event={searchCategories}  />
            {
                (data.length > 0) ?
                    <React.Fragment>
                        {
                            data.map((arr, index) => {
                                return (
                                    <div key={index}>
                                        {/* <h1>{arr.title}</h1> */}
                                        {/* <CardProduct state={arr} /> */}
                                        <Card state={arr}/>
                                    </div>
                                )
                            })
                        }
                    </React.Fragment>
                    :
                    <React.Fragment>loading...</React.Fragment>
            }

            <button onClick={() => { setProductsCount(productsCount + 3); console.log(productsCount); }}>more {data.length}</button>
        </div>
    )
}
