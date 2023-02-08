import React, { useEffect } from 'react'
import User from '../../utils/user'
export default function Users() {
    useEffect(() => {
        User.getUsers().then(res=>{console.log(res);})
    }, []);
  return (
    <div>
       <h1>Users Info</h1>
    </div>
  )
}
