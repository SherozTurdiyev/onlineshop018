import React from 'react'
import { Link } from 'react-router-dom'

export default function CardProduct(props) {
    let state = props.state
    return (
        <div style={{ width: "400px", border:"2px solid black" , margin:'5px'}}>
            <img src={state.thumbnail} alt="nomi" style={{width:"200px"}} />
            <h3>Model:{state.title}</h3>
            <p>Brand:{state.brand}</p>
            <div>
                <p>Price: {state.price} $</p>
                <p>rating:{state.rating}</p>
            </div>
           <Link to={`/all-products/${state.id}`}><button>Batafsil {state.id}</button></Link>
        </div>
    )
}
