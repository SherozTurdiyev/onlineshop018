import {configureStore} from '@reduxjs/toolkit'
import Auth from './Reducer/Auth'
import shopCard from './Reducer/ShopCard'

const store = configureStore({
      reducer:{
       Auth : Auth,
       ShopCard : shopCard
    }
})


export default store