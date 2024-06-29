import React, { useState,useEffect } from 'react'

function Signup() {
    const [userRegister, setuserRegister] = useState({
      
        username: "",
        age: "",
        phone: "",
        password: "",
        gender: ""

    })
    const [getAllUser,setgetAllUser]=useState([])

    
    const handelInput = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setuserRegister({ ...userRegister, [name]: value })
       
    }

const handelGetAllUser=async()=>{
    const res =await fetch("http://localhost:8000/getAllUser")
    const data=await res.json();
console.log(data)
    if(data.status===400 ||!data){
        window.alert("invalid Registration");
        console.log("data not found")
    }else if(data.status===500){
        window.alert("invalid server");
        console.log("server")
    }else if(data && data.responses && data.responses.data)
    {
        window.alert("Registration Success");
        console.log("suucsess")
        setgetAllUser(data.responses.data)
    }

}

useEffect(()=>{
handelGetAllUser();
},[])
    const handelSubmit =async (e) => {
         e.preventDefault();

        // const newRecord = { ...userRegister, id: new Date().getTime().toString }

        const {username,age,password,gender,phone}=userRegister;
        const res= await fetch("http://localhost:8000/createUser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({username,age,password,gender,phone})
        })
       
        const data=await res.json();
        if(data.status===400 ||!data){
            window.alert("invalid Registration");
            console.log("data not found")
        }else if(data.status===500){
            window.alert("invalid server");
            console.log("server")
        }else{
            window.alert("Registration Success");
            console.log("suucsess")
        }

        // setRecord([...record, newRecord]);
        
        setuserRegister({ username: "", age: "", phone: "", password: "", gender: "" })
        handelGetAllUser()
        
    }

    return (
        <>
            <form action=""  onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="username">FullName</label>
                    <input type="text" autoComplete='off' value={userRegister.username} onChange={handelInput} name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input type="text" autoComplete='off' value={userRegister.age} onChange={handelInput} name="age" id="age" />
                </div>
                <div>
                    <label htmlFor="phone">Phone No</label>
                    <input type="text" autoComplete='off' value={userRegister.phone} onChange={handelInput} name="phone" id="phone" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" autoComplete='off' value={userRegister.password} onChange={handelInput} name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="gender">gender</label>
                    <input type="text" autoComplete='off' value={userRegister.gender} onChange={handelInput} name="gender" id="gender" />
                </div>
                <div>

                    <input type="submit" value="Submit" />
                </div>


            </form>

        

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">age</th>
                        <th scope="col">phone</th>
                        {/* <th scope="col">password</th> */}
                        <th scope="col">gender</th>
                        
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                
                {getAllUser.map((item,index)=>{

               return(
               

                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.phone}</td>
                      
                        <td>{item.gender}</td>
                    </tr>
               
               )
             })    
            }
             </tbody>
            </table>


          

        </>
    )
}

export default Signup;
