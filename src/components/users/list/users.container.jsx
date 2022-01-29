import React, { useState,useEffect} from 'react';
import Users from "./users"
import UserService from "../../../services/user.service"
const UsersContainers = () => {
    const [users, setusers] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);
    const getUsers=()=>{
        UserService.getUsers().then(res=>{
            setusers(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    

    return (<Users {...{users}} />)
}

export default UsersContainers;