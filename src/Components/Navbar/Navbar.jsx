import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import products from '../../utils/products';
import {useSelector , useDispatch} from 'react-redux'
export default function Navbar() {
  const [query, setQuery] = useState(null)
  const [select, setSelect] = useState([])
  
  const selectAuth = useSelector(state => state.Auth)
  const selectShopCard = useSelector(state => state.ShopCard)
  const dispatch = useDispatch()

  function changeAuth(){
      dispatch({type:"change"})
      console.log(selectAuth);
  }

  const navigate = useNavigate()
  useEffect(() => {
    products.getCategoriesProduct()
      .then(res => { setSelect([...res.data])})
  }, []);
  function searchCategories(params){
        navigate(`/searchCategories/${params.target.value}`)
  }
  const style = {
     border: "1px solid red"
  }
  return (
    <div>
      <h1>cardda bor: {selectShopCard.length}</h1>
      <p>Name: {selectAuth.username} , LastName : {selectAuth.lastName}</p>
      <img src={selectAuth.image} alt={selectAuth.username} />
      <button onClick={changeAuth}>change selectAuth</button>
      <div>
        <select style={style} name="" id=""  onChange={(item)=>{searchCategories(item)}}>
          {
            select.length > 0 ?
              <>
                {select.map((arr, index) => {
                     return <option  value={arr}>{arr}</option>
                 })}
              </>
              :
              <></>
          }
        </select>
        <input type="text" placeholder='search' onInput={(item) => { setQuery(item.target.value); console.log(item.target.value); }} />
        <Link to={`/search/${query}`}> <button>Search</button></Link>
      </div>
    </div>
  )
}
