import React from 'react'
import {userLoginRequest} from '../redux/action.js'
import {useDispatch,useSelector} from 'react-redux'
import {Link,Navigate} from 'react-router-dom'


function Login() {
    const [state,setState] = React.useState({
        username:"",
        password:""
    })

    const dispatch = useDispatch()
    
    const {isAuth,isLoading} = useSelector(state => state.reducer.auth)

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    
    function handleSumbit(e){
        e.preventDefault()
        const payload = state
        dispatch(userLoginRequest(payload))
    }


    return (
        isAuth===false?<div>
            <Link to="/"><button>Homepage</button></Link>
            <h2>Login Page</h2>
            <form onSubmit={(e) => handleSumbit(e)}>
                <span>Username : </span>
                <input type="text" name="username" value={state.username} onChange={handleChange} />
                <br />
                <br />
                <span>Password :</span>
                <input type="password" name="password" value={state.password} onChange={handleChange} />
                <br />
                <br />
                <input type="submit" value="Login" />
                <br />
                <br />
                <span>No Account ?</span>
                <Link to="/register"><button>Register</button></Link>

            </form>
        </div>:isLoading===true?<h2>Loading...</h2>:<Navigate to="/dashboard" />
    )
}

export default Login
