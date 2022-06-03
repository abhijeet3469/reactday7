import React, { useState } from 'react'

export default function Usestate() {
    const [val, setVal] = useState(0)
    const [name, setName] = useState('')
     
    const func1 =  () => {
        console.log(val);
        setVal(val+1)
    }

    const func2 = (e) => {
        console.log(e.target.value);
        setName(e.target.value)

    }
 
 
 
    return (
        <>
            <h1>{val}</h1>
            <button className='btn btn-warning' onClick={func1}>Increament</button>
            <button className='btn btn-primary'>Decrement</button>
            <br></br>
            <h3>{name}</h3>
            <input type='text' onChange={func2}></input>
        </>


    
  )
}




