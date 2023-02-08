import React, { useState } from 'react' //hook
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import ebay_logo from '../../assets/png/Ebay_logo.png'
import { useDispatch, useSelector } from 'react-redux'
export default function Login() {
    const navigate = useNavigate()
    const [username, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const dispatch = useDispatch()
    const Auth = useSelector(state => state.Auth)
    function getToken() {
        axios({
            url: 'https://dummyjson.com/auth/login',
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
                username: 'atuny0',
                password: '9uQFF1Lh',
            })
        })
            .then((res) => {
                dispatch({type:"change" , payload : res.data})
                console.log(Auth);
                localStorage.setItem('token', res.data.token)
                navigate('/products')
            })
            .catch((err) => {
                console.log(err);
                alert("Xato kiriting!")
            })
    }
    return (
        <div>
            <img src={ebay_logo} alt="ebay logo" />
            <br />
            <input type="text" placeholder='username' onInput={(item) => { setUserName(item.target.value) }} />
            <br />
            <input type="password" placeholder='************' onInput={(item) => { setPassword(item.target.value) }} />
            <br />
            <button onClick={getToken}>Sign IN</button>
        </div>
    )
}
