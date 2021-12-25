import React from 'react'
import {userRegisterRequest} from '../redux/action.js'
import {useDispatch} from 'react-redux'
import { Link,useNavigate } from "react-router-dom";


function Register() {

    const [state,setState] = React.useState({
        name:"",
        email:"",
        password:'',
        username:'',
        mobile:'',
        description:''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    async function handleSumbit(e){
        e.preventDefault()
        
        const value = await dispatch(userRegisterRequest(state))
        if (value===false) {
            navigate("/login")
        }
    }
    return (
        <div>
            <h2>Register Page</h2>
            <form onSubmit={(e) => handleSumbit(e)}>
                <span>Name : </span>
                <input type="text" 
                    value={state.name} 
                    name="name" 
                    placeholder='Enter Name' 
                    onChange={(e) => handleChange((e))} 
                />
                <br />
                <br />
                <span>Email : </span>
                <input type="email" 
                    value={state.email} 
                    name="email" 
                    placeholder="Enter Email" 
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Username : </span>
                <input type="text" 
                    name="username" 
                    value={state.username} 
                    placeholder="Enter Username"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Password : </span>
                <input type="password" 
                    name="password" 
                    value={state.password} 
                    placeholder="Enter Password"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Contact : </span>
                <input type="text" 
                    name="mobile" 
                    value={state.mobile} 
                    placeholder="Enter Contact"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <span>Description : </span>
                <input type="text" 
                    name="description" 
                    value={state.description} 
                    placeholder="Enter description"
                    onChange={(e) => handleChange((e))}
                />
                <br />
                <br />
                <input type="submit" value="Sumbit" />
            </form>
            <span>Already Registered ?</span>
            <Link to="/login"><button>Login</button></Link>
        </div>
    )
}

export default Register
