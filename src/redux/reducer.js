import {actionTypes} from './actionType.js'

const initState = {
    auth:{
        isLoading:false,
        isError:false,
        isAuth:false
    },
    registerUser:{
        isLoading:false,
        isError:false
    },
    userDetails:{
        isLoading:false,
        isError:false,
        username:""
    },
    todos:{
        isLoading:false,
        isError:false,
        items:[]
    }

}

export const reducer = (state=initState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    isLoading:true
                }
            }
        case actionTypes.USER_LOGIN_ERROR:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    isLoading:false,
                    isAuth:false
                }
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    isLoading:false,
                    isAuth:true,
                    isError:false
                },
                userDetails:{
                    ...state,
                    username:action.payload.username
                }
            }
    
        case actionTypes.USER_REGISTER_REQUEST:
            return{
                ...state,
                registerUser:{
                    ...state.registerUser,
                    isLoading:true
                }
            }
        case actionTypes.USER_REGISTER_ERROR:
            return{
                ...state,
                registerUser:{
                    ...state.registerUser,
                    isLoading:false,
                    isError:true
                }
            }
        case actionTypes.USER_REGISTER_SUCCESS:
            return{
                ...state,
                registerUser:{
                    ...state.registerUser,
                    isLoading:false,
                    isError:false
                }
            }
        case actionTypes.USER_LOGOUT_REQUEST:
            return{
                ...state,
                auth:{
                    ...state,
                    isAuth:false
                },
                userDetails:{
                    ...state,
                    username:""
                }
            }
        case actionTypes.GET_TODO_REQUEST:
            return{
                ...state,
                todos:{
                    ...state.todos,
                    isLoading:true,
                    isError:false
                }
            }
        case actionTypes.GET_TODO_SUCCESS:
            return{
                ...state,
                todos:{
                    ...state.todos,
                    isLoading:false,
                    isError:false,
                    items:action.payload
                }
            }
        case actionTypes.GET_TODO_ERROR:
            return{
                ...state,
                todos:{
                    ...state.todos,
                    isLoading:false,
                    isError:true
                }
            }
        case actionTypes.POST_TODO_REQUEST:
            return state
            
        case actionTypes.USER_DETAIL_REQUEST:
            return{
                ...state,
                userDetails: {
                    ...state,
                    isLoading:true,
                    isError:false
                }
            }
        case actionTypes.USER_DETAIL_SUCCESS:
            return{
                ...state,
                userDetails: {
                    ...state,
                    isLoading:false,
                    isError:false,
                    username:action.payload
                }
            }
        case actionTypes.USER_DETAIL_ERROR:
            return{
                ...state,
                userDetails:{
                    ...state,
                    isLoading:false,
                    isError:true
                }
            }

        case actionTypes.MANIPULATE_TODO_LIST:
            return{
                ...state,
                todos:{
                    ...state,
                    items:action.payload
                }
            }
        default:
            return state;
    }
}