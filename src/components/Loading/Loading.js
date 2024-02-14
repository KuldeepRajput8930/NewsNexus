import React from 'react'
import loading from './loading.gif'
import './Loading.css'

const Loading = () => {
    return (

        <div className='loading'>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Loading