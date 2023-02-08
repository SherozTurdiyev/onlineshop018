import client from "./client";


class user {
    async getUsers(){
        let response = await client({url:"/users" , method:"GET"})
                .then(res=>{return res})
                .catch(err => {return err})
        return response
    }
}

export default new user