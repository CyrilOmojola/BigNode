import React, {useState} from 'react'
import axios from 'axios'

const Signup = () => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const signup = ()=>{
        console.log(firstname, lastname, email, password);
        axios.post("http://localhost:5003/user/register, {firstname, lastname, email, password}")
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <div className='w-50 mx-auto shadow px-3 py-2'>
            <h1 className='text-center text-muted'>Signup</h1>
            <div className='form-group mt-3'>
                <label htmlFor="">Firstname</label>
                <input className='form-control' onChange={(e)=>setfirstname(e.target.value)} type="text" />
            </div>

            <div className='form-group mt-3'>
                <label htmlFor="">Lastname</label>
                <input className='form-control' onChange={(e)=>setlastname(e.target.value)} type="text" />
            </div>

            <div className='form-group mt-3'>
                <label htmlFor="">Email</label>
                <input className='form-control' onChange={(e)=>setemail(e.target.value)} type="text" />
            </div>

            <div className='form-group mt-3'>
                <label htmlFor="">Password</label>
                <input className='form-control' onChange={(e)=>setpassword(e.target.value)} type="text" />
            </div>

            <button onClick={signup} className='btn btn-primary mx-auto mt-3'>Register</button>
        </div>
    </div>
  )
}

export  default Signup