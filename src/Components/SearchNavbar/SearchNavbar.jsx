import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SearchNavbar(props) {
    const [categories , setCategories] = useState([])
    useEffect(() => {
        console.log(props);
        axios.get('https://dummyjson.com/products/categories')
            .then(res => {
                setCategories([...res.data])
            })
            .catch(err=>{
                console.log(err);
            })
    }, []);
    return (
        <div>
            <h1>Search Navbar</h1>
            <select name="" id="" onChange={(item)=>{props.event(item.target.value); }}>
                 {
                    (categories.length > 0)&&
                    <>
                      {categories.map((arr , index)=>{
                        return(
                            <option value={arr}>{arr}</option>
                            )
                    })}
                    </>
                 }
            </select>
            <input type="text" placeholder='Search products, articles, faq, ...'/>
        </div>
    )
}
