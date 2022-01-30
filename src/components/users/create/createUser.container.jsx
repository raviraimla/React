import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import CreateUser from "./createUser"
import UserService from "../../../services/user.service"
const CreateUserContainer = () => {
    const [user, setuser] = useState({ name: "", email: "", mouse: "", keyboard: "" });
    const [mouseExist, setMouseExist] = useState(false);
    const [keyboardExist, setKeyboardExist] = useState(false);
    const [users, setUsers]=useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        if (id) {
        getUser(parseInt(id));
    }
      }, []);
      
    const getUser = (id) => {
        UserService.getUsers().then(res => {
            setUsers(res.data);
            const userexist = res.data.find(x => x.id == id);
            if (userexist) {
                setuser(userexist);
            }
        }).catch(err => {
            console.log(err)
        })
    }
    const inputChange = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    }
    const submitUser = () => {
        if(!keyboardExist && !mouseExist){
            cancel();

        }
        
    }
    const resetUser = () => {
        setuser({ name: "", email: "", mouse: "", keyboard: "" })
    }
    const cancel = () => {
        resetUser();
        navigate("/");
    }
    const checkMouse = (e) => {
        const { value } = e.target;
        const getExistMouse=users.find(x=>x.mouse==value && x.id!= user.id);
        if(getExistMouse){
            setMouseExist(true)
        }
        else{
            setMouseExist(false);
        }
    }

    const checkkeyboard = (e) => {
        const { value } = e.target;
        const getExistMouse=users.find(x=>x.keyboard==value && x.id!= user.id);
        if(getExistMouse){
            setKeyboardExist(true)
        }
        else{
            setKeyboardExist(false);
        }
    }
    
    return (<CreateUser {...{ inputChange, user, submitUser, checkMouse, mouseExist, cancel,keyboardExist,checkkeyboard }} />)
}

export default CreateUserContainer;