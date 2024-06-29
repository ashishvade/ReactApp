import React,{useState,useRef} from 'react'

function HookState() {


var [user,setUser]=useState({
    name:"Ashish",
    Role:"Devloper",
    Age:"25"
})

    let myfun=()=>{

        setUser(
            { ...user,
                name:"Rahul"
                
            }
        )
 

    }
  return (
    <div className='container text-center'>


        name:{user.name}<br>
        </br>
        Role:{user.Role} <br></br>
        Age:{user.Age} <br></br>
        <button type="button" onClick={myfun}>DO changes</button>
   
    </div>
  )
}

export default HookState
