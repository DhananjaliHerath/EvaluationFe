import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Createuserbtn() {
    
  const [showModal, setShowModal] = React.useState(false);

  const { register, handleSubmit, formState: { errors }, } = useForm({});

  const navigate = useNavigate();

  // const notify = () => toast("sucessfully!");

  const onSubmit = (data) => {


    console.log("data------>", data);

    let submitValues = {

      firstName: data.firstName,
      otherNames:data.otherNames,
      lastName: data.lastName,
      email:data.email,
      password:data.password,
      nicNo:data.nicNo,
      joinDate:data.joinDate,
      primaryContactNo:data.primaryContactNo,
      secondaryContactNo:data.secondaryContactNo,
      gender:data.gender,
      dateOfBirth:data.dateOfBirth,

      address: {
        addressLine1: null,
        addressLine2: null,
        city: null,
        province: null,
      
      },


      designation:{
        designationName: data.designationName,
        designationLevel:data.designationLevel,
      },

      bankDetails: {
        accountNo:data.accountNo,
        bankName: data.bankName,
        bankBranch:data.bankBranch,
        accountType:data.accountType,
    }

    };


    console.log("data------>", submitValues);
    axios.post(`${"http://localhost:8080/users/"}`, submitValues).then((res) => {
      console.log("response", res);
      if (res.status == 200) {

        toast.success('successful', { autoClose: 3000 });

        navigate("/")
      }





    }).catch((err => {

      toast('Invalid ! Please Check Details ');


    }));
  };












  return (

    <div>
            <div>
            <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"  onClick={() => setShowModal(true)}>Add User</button>

            </div>
     
 {showModal ? (
        <>
          <div
            className="justify-center items-center  sm:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none overflow-auto"
          >
            <div className="relative my-32 mx-auto  max-w-screen ">

              <form className="border-0 rounded-lg shadow-lg relative max-w-[700px] px-3  w-full bg-gray-200 outline-none focus:outline-none " onSubmit={handleSubmit(onSubmit)}>


                <div className="flex  flex-col justify-between p-5 mb-3 ">



                  <div className='flex space-x-3 mr-4 mt-2'  >

                    <div className=' w-1/2 '>
                    
                      <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="First name" {...register("firstName", { required: "This is required" })}  />
              
                    </div>

                    <div className=' w-1/2 '>
                 
                      <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="otherNames" {...register("otherNames", { required: "This is required" })} />
             
                    </div>
                  </div>




                  <div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="email" {...register("email", { required: "This is required" })}  />

</div>

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="password" {...register("password", { required: "This is required" })} />

</div>
</div>



<div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="nicNo" {...register("nicNo", { required: "This is required" })}  />

</div>

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="joinDate" {...register("joinDate", { required: "This is required" })} />

</div>
</div>


                  <div className='flex space-x-3 mr-4 mt-2'  >

                    <div className=' w-1/2 '>
              
                      <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="primaryContactNo" {...register("primaryContactNo", { required: "This is required" })} />
                  
                    </div>

                    <div className=' w-1/2 '>
                  
                      <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="secondaryContactNo" {...register("primaryEmail", { required: "This is required" })} />
          
                    </div>
                  </div>

                  <div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="gender" {...register("gender", { required: "This is required" })} />

</div>

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="ateOfBirth" {...register("dateOfBirth", { required: "This is required" })} />

</div>
</div>


                  <div className='flex space-x-3 mr-4 mt-2'  >

                    <div className=' w-1/2 '>
                  
                      <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="addressLine1"{...register("addressLine1", { required: "This is required" })} />
              
                    </div>

                    <div className=' w-1/2 '>
                      <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder=" addressLine2" {...register("addressLine2", { required: "This is required" })} />
                  
                    </div>
                  </div>

                  <div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="city"{...register("city", { required: "This is required" })} />

</div>

<div className=' w-1/2 '>
  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder=" province" {...register("province", { required: "This is required" })} />

</div>
</div>



<div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="designationName"{...register("designationName", { required: "This is required" })} />

</div>

<div className=' w-1/2 '>
  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder=" designationLevel" {...register("designationLevel", { required: "This is required" })} />

</div>
</div>


<div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="accountNo"{...register("accountNo", { required: "This is required" })} />

</div>

<div className=' w-1/2 '>
  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder=" bankName" {...register("bankName", { required: "This is required" })} />

</div>
</div>

<div className='flex space-x-3 mr-4 mt-2'  >

<div className=' w-1/2 '>

  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="bankBranch"{...register("bankBranch", { required: "This is required" })} />

</div>

<div className=' w-1/2 '>
  <input type="text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="accountType" {...register("accountType", { required: "This is required" })} />

</div>
</div>






                  <div className="flex flex-wrap -mx-3 mb-2 mt-7">

                  

                    <div className="w-full lg:w-4/12 px-4">
                    
                    </div>







                  </div>
                </div>

                <div className="relative p-6 flex-auto">


                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gray-800 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"

                  >
                    Save Changes
                  </button>


                </div>
              </form>
            </div>

          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
       ) : null} 


    </div>
  )
}
