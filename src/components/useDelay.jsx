import React from 'react'
import {useSelector} from 'react-redux'

function useDelay() {
    const {isAuth} = useSelector(state => state.reducer.auth) 
    return {isAuth}
}

export default useDelay
