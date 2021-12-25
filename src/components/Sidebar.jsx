import React from 'react'
import {Link,Navigate,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {userLogoutRequest} from '../redux/action.js'
function Sidebar() {

    const {username} = useSelector(state => state.reducer.userDetails)


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(userLogoutRequest())
        navigate("/")
    }

    const cssStyle = {
        marginRight:"15px"
    }

    const divStyle ={
        width:"15%",
        marginTop:"0px",
        // border: "1px solid red",
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        height:"80vh",
        padding: "15px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    }



    return (
        <div style={divStyle}>
           
            <p>Hello <b> {username}</b></p>
            <div style={{display:"flex",flexDirection:"column"}}>
                <button style={{marginBottom:"15px"}}>All</button>
                <button style={{marginBottom:"15px"}}>Personal</button>
                <button style={{marginBottom:"15px"}}>Official</button>
                <button style={{marginBottom:"15px"}}>Others</button>
            </div>
            <div>
                <Link style={cssStyle} to="/"><button>Homepage</button></Link>
                <button style={cssStyle} onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
    )
}

export default Sidebar
