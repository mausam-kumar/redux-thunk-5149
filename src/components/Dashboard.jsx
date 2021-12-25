import React from 'react'
import {Link,Navigate,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Sidebar from './Sidebar.jsx'
import TodoPage from './TodoPage.jsx'
function Dashboard() {

    
    const {isAuth} = useSelector(state => state.reducer.auth)

    const sideBarStyle = {
        width: '25%',
        border: '1px solid red'
    }
    const todoStyle = {
        width: "75%"
    }

    const cssStyle = {
        display: 'flex',
        justifyContent: 'space-center'
    }

    return (
        isAuth===true?<div>
            <br />
            <br />
            <div style={cssStyle}>
                <Sidebar  style={sideBarStyle}/>
                <TodoPage style={todoStyle} />
            </div>
        </div>:<Navigate to="/login" />
    )
}

export default Dashboard
