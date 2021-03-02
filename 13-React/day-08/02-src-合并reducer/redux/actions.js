import axios from 'axios'
import { GET_USER_SUCCESS,SETFLAG } from './constants'

export function getUserData(data){
    return {type:GET_USER_SUCCESS,data}
}

export function getUserDataAsync(username){
    return (dispatch)=>{
        axios({
            url: 'http://localhost:5000/search/users',
            method: 'get',
            params: {
              username,
            },        
        }).then((res)=>{
            console.log(res)
            dispatch(getUserData(res.data.items))
        })
    }
}

export function setFlagCreator(data){
    return {type:SETFLAG,data}
}