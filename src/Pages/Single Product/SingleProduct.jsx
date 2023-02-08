import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import products from '../../utils/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Rating } from '@mui/material';
// import ProductsAPI from '../../utilits/ProductsAPI';

const SingleProduct = () => {
    let params = useParams()
    console.log(params.id);
    const [data, setData] = useState([])
    const [info, setInfo] = useState({})

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    // useEffect(() => {
    //     ProductsAPI.getSingleProduct(8)
    //     .then(res=>{console.log(res);})
    //     // products.getSingleProduct(params.id)
    //     //     .then(res => { setData([...res.data.images]); setInfo({ ...res.data }) })
    //     //     .catch(err => { console.log(err); })
    //     // axios.get(`https://dummyjson.com/products/${params.id}`)


    //     console.log(data);
    // }, []);

    return (
        <div>
            <h1>Single Product</h1>
            <h1>Name:{info.title}</h1>
            <h2>descrition: {info.description}</h2>
            <p>price : {info.price} $</p>
            <Rating
                name="simple-controlled"
                value={info.rating}
            /> <b>{info.rating}</b>
            <br />
            <img src={info.thumbnail} alt="" />
            <div>
                <div style={{ width: "50%" }}>
                    {
                        data.length > 0 ?
                            <Slider {...settings}>
                                {data.map((arr, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={arr} alt=" carusel" width={200} />
                                        </div>
                                    )
                                })}
                            </Slider>
                            :
                            <h1>Loading...</h1>
                    }

                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
