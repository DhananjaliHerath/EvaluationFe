import React from 'react'
import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }

    });
    const notify = () => toast('Login Successfully');

    const navigate = useNavigate();

    const authhandle = (e) => {
        console.log("axios cal")
      console.log("login data", email)
      const url = 'http://localhost:8080/authenticate'
      axios.post(url, {
        username: email,
        password: password
      }).then((res) => {
        console.log("axios response received")
        console.log("response", res.data.body.jwt)
        console.log("user", res.data.body.user.uId)
  
        

        localStorage.setItem('jwt', res.data.body.jwt)
        localStorage.setItem('user', JSON.stringify(res.data.body.user))
        console.log(res.data.body.user)
        console.log(localStorage.getItem('user'))
  


        if (res.data.body.user.email === 'admin@ccms.com') {
            console.log("type:Admin")
            console.log(res.data.body)
            console.log(res.data.body.user.firstName)
            
            navigate("/admindash")
            toast('Login Successfull');

       
          
        } else {
         
           navigate("/userdash")
            toast('Login Successfull');
        }if (res.status == 200) {
        
               
        }
  
  
  
      }).catch((err => {
     
     toast('Invalid ! Please Check Your Email or Password ' );
  
        
      }));
    }
  


  return (
    <div className='relative w-full h-screen bg-black'>
  
  
  <div className='flex justify-center items-center h-full'>
    <form className='max-w-[420px] w-full max-auto bg-gray-300 p-8 rounded-xl ' onSubmit={handleSubmit((data) => {
                // data.preventDefault();
                console.log(data);
                if(errors !== '')
                {
                    authhandle();
                    console.log(true);
                }
                else(

                    alert('please fill the fields')
             
                )
             
            })}>

<h2 className="text-3xl font-semibold text-center">Hello...... !</h2>
<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">What are you up to do ?</span>
		
             ......................................................
           </div>
       
        <div className='flex flex-col mb-8 mt-12'>
         
            <input className='border-solid border-2 border-black-600 relative rounded-xl bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100 ' type="text " placeholder='User Name' {...register("username", { required: 'This is required', pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/  })}  onChange={(e) => setEmail(e.target.value)} />
            <p className='text-red-400'> {errors.username?.message}</p>
        </div>
        <div className='flex flex-col mb-8'>
      
            <input className='border-solid border-2 border-black-600 relative rounded-xl bg-gray-100 p-2 placeholder-gray-500 placeholder-opacity-100' type="Password" placeholder='Password' {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })}  onChange={(e) => setPassword(e.target.value)} />
            <p className='text-red-400'> {errors.password?.message}</p>
        </div>

       
        
        <button type='submit' className='w-full py-3 mt-7 relative text-black hover:text-white'onClick={notify} >Sign In</button>
        <ToastContainer />
        <button type='close' className='w-full py-3 mt-7 relative text-black hover:text-white'>May Be Later</button>


       



    </form>
  </div>
  
</div>
    
  )
}
