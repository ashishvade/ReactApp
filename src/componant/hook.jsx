import React,{useState,useRef} from 'react'

function HookState() {
//     var [name,setName]=useState(1);
//     var [age,setAge]=useState("");
// var x1=useRef();
// var x2=useRef();

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
    //   console.log(x1.current.value)
    //   setName(x1.current.value)
    //   console.log(x2.current.value)
    //   setAge(x2.current.value)

    }
  return (
    <div className='container text-center'>


        name:{user.name}<br>
        </br>
        Role:{user.Role} <br></br>
        Age:{user.Age} <br></br>
        <button type="button" onClick={myfun}>DO changes</button>
      {/* <p>Count:{count}</p>
      <button onClick={()=>{
         setCount(Math.random().toFixed(2)*100)
      }}>Enter</button> */}
     {/* Name: <input type="text"  ref={x1}/><br></br>
     age: <input type="text"  ref={x2} /><br></br>
      <button onClick={myfun}>Enter</button>

      <p>..........................................</p>
      name:{name} <br></br>
      age:{age} */}
    </div>
  )
}

export default HookState
