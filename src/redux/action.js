import {actionTypes} from './actionType.js'
import axios from 'axios'

export const userLoginRequest = (data) => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.USER_LOGIN_REQUEST
    })
    try {
        const payload = {
            url:`http://localhost:3001/auth/login`,
            method: 'POST',
            data:data
        }
    
        const res = await axios(payload)

        res.data.error===false?dispatch({
            type:actionTypes.USER_LOGIN_SUCCESS,
            payload:data
        }):dispatch({
            type:actionTypes.USER_LOGIN_ERROR
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type:actionTypes.USER_LOGIN_ERROR
        })
        alert("Invalid username or password")
    }
}


export const userRegisterRequest = (data) => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.USER_REGISTER_REQUEST
    })

    const payload = {
        url:`http://localhost:3001/auth/register`,
        method: 'POST',
        data:data
    }

    const res = await axios(payload)

    try {
        if (res.data.error===false) {
            dispatch({
                type:actionTypes.USER_REGISTER_SUCCESS
            })
            
            return res.data.error
        }else{
            dispatch({
                type:actionTypes.USER_REGISTER_ERROR
            })
            alert(res.data.message)
            return res.data.error
        }

    } catch (error) {
        console.log("error",error);
        alert('Registration Unsuccessfull')
    }
}

export const userLogoutRequest = () => {
    return{
        type:actionTypes.USER_LOGOUT_REQUEST
    }
}

export const fetchUserDetails = (username) => async (dispatch,getState) => {
    dispatch({
        type:actionTypes.USER_DETAIL_REQUEST
    })

    const payload = {
        url:''
    }
}

export const fetchTodoData = () => async (dispatch,getState) => {
    dispatch({type:actionTypes.GET_TODO_REQUEST})

    const payload = {
        url:`http://localhost:3002/todos`,
        method:'get'
    }
    const res = await axios(payload)

    try {
        dispatch({
            type:actionTypes.GET_TODO_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:actionTypes.GET_TODO_ERROR
        })
    }


}

export const postTodoData = (data) => async (dispatch,getState) => {
    try {
        const payload = {
            url:'http://localhost:3002/todos',
            method:'POST',
            data:data
        }
    
        const res = await axios(payload)
        
        alert('Success')
    } catch (error) {
        console.log(error);
        alert(error.message)
    }
}

export const manipulateData = (payload) => {
    return{
        type:actionTypes.MANIPULATE_TODO_LIST,
        payload:payload
    }
}