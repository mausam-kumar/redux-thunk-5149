import axios from 'axios'
import React from 'react'
import {fetchTodoData} from '../redux/action.js'
import {useSelector,useDispatch} from 'react-redux'
import {v4 as uuid} from 'uuid'
import {postTodoData} from '../redux/action.js'

function TodoPage() {

    const dispatch = useDispatch()

    const [show,setShow] = React.useState(false)
    const [subTaskShow,setSubTaskShow] = React.useState(false)

    const [subtaskContainer,setSubtaskContainer] = React.useState([])

    

    const [state,setState] = React.useState({
        title:"",
        description:"",
        subtask:""

    })

    const [checkedStatus,setCheckedStatus] = React.useState({
        official:false,
        personal:false,
        others:false
    })

    const {items} = useSelector(state => state.reducer.todos)
    console.log("items",items);

    function handleChnage(e){
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    function handleAdd(){
        setSubtaskContainer(
            [...subtaskContainer,{
                subtitle:state.subtask,
                id:uuid()
            }]
        )
        setState({
            ...state,
            subtask:""
        })
    }

    function handleCheckbox(e){
        console.log(e.target.name,e.target.checked,e.target.value);
        setCheckedStatus({
            ...checkedStatus,
            [e.target.name]:!checkedStatus[e.target.name]
        })
    }

    function handleAddSubtask(){
        setSubTaskShow(!subTaskShow)
    }

    function handleSubtaskClose(){
        setSubTaskShow(!subTaskShow)
    }

    function handleShow(){
        setShow(!show)
    }

    function handleClose(){
        setShow(false)
    }

    React.useEffect(() =>{
        dispatch(fetchTodoData())
    },[])

    function handleSumbit(){
        let tags = []
        
            if (checkedStatus.official===true) {
                tags.push("official")
            }
            if(checkedStatus.personal===true){
                tags.push("personal")
            }
            if(checkedStatus.others===true){
                tags.push("others")
            }
        

        const payload = {
            id:uuid(),
            title:state.title,
            description:state.description,
            tags:tags,
            subtaskContainer:subtaskContainer
        }
        dispatch(postTodoData(payload))
        
        console.log(payload);
        setState({
            title:"",
            description:"",
            subtask:""
    
        })

        setSubtaskContainer([])
        setCheckedStatus({
            official:false,
            personal:false,
            others:false
        })
    }
    return (
        <div>
            <button style={{margin:"15px"}} onClick={handleShow}>ADD TODO</button>
            {
                
                show && <div style={{margin:"15px",boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',padding:"20px"}}>
                    <button onClick={handleClose}>Close</button>
                    <br />
                    <br />
                    <span>Title :</span>
                    <input type="text" name="title" value={state.title} onChange={(e) => handleChnage(e)} placeholder="Enter Title" />
                    <br />
                    <br />
                    <span>Description :</span>
                    <input type="text" name="description" value={state.description} onChange={(e) => handleChnage(e)} placeholder="Enter Description" />
                    <br />
                    <br />
                    <input type="checkbox" name="official" checked={checkedStatus.official} onChange={(e) => handleCheckbox(e)}/>
                    <span>Official</span>
                    <br />
                    <br />
                    <input type="checkbox" name="personal" checked={checkedStatus.personal} onChange={(e) => handleCheckbox(e)}/>
                    <span>Personal</span>
                    <br />
                    <br />
                    <input type="checkbox" name="others" checked={checkedStatus.others} onChange={(e) => handleCheckbox(e)}/>
                    <span>Others</span>
                    <br />
                    <br />
                    <button onClick={handleAddSubtask}>Add Subtask</button>
                    {
                        subTaskShow && <div style={{boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',padding:"10px"}}>
                            <br />
                            <input type="text" name="subtask" value={state.subtask} onChange={(e) =>handleChnage(e)} placeholder="Enter Subtask" />
                            <br />
                            <br />
                            <button onClick={handleAdd}>ADD</button>
                            <br />
                            <br />
                            <button onClick={handleSubtaskClose}>Close</button>
                        </div>
                    }
                    <p>Subtask List :</p>
                    {   
                        
                        subtaskContainer.map((ele) => {
                            return(
                                <p key={ele.id}>{ele.subtitle}</p>
                            )
                        })
                    }
                    
                    <br />
                    <br />
                    <button onClick={handleSumbit}>Sumbit</button>
                </div>
                
            }
            
                {
                    items.map((ele) => {
                        return(
                            <div key={ele.id} style={{padding:"10px"}}>
                                <h4>Title :{ele.title}</h4>
                                <p>Description :{ele.description}</p>
                                

                                <h3>Relevent Tags</h3>
                                {
                                    ele.tags.map((i) => {
                                        return(
                                            <span style={{marginRight:"10px"}}>{i}</span>
                                        )
                                    })
                                }
                                <h3>SubTask</h3>
                                <ul>
                                {ele.subtaskContainer.map((ele) => {
                                    return(
                                        <li>{ele.subtitle}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        )
                    })
                }


        </div>
    )
}

export default TodoPage
