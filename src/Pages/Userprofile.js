import React from 'react'



export default function Userprofile() {

    const userobj = localStorage.getItem('user');
    const user = JSON.parse(userobj);
    console.log("user" + userobj)


  return (
    <div>
      

      <div>
      <div className="p-2">
        <div className="p-14 bg-gray-600 shadow mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

              <div>
              </div>
            </div>
            <div className="relative">

   

              <img alt="..." src="https://img.freepik.com/free-vector/little-girl-smiles-lifts-up-his-eyes-hands-prayer_71593-911.jpg?w=2000" className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500" />

            </div>
          </div>
        </div>

        <div className="mt-16 text-center border-b pb-12 ">
          <h1 className="text-4xl font-medium text-gray-700">{user.firstName}</h1>
          
          <p className='font-bold text-gray-600 mt-3'>Email :  <span class=" text-blue-700"> {user.email}</span></p>
         <p className="font-bold text-gray-600 mt-1">User ID  :  <span class=" text-blue-700">{user.userId}</span>  </p> 

         <p className="font-bold text-gray-600 mt-1">First Name :  <span className=" text-blue-700">{user.lastName}</span>  </p>

          <p className="font-bold text-gray-600 mt-1">Prymary Conatct No :  <span className=" text-blue-700">{user.userStatus}</span>  </p>

        

          


        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center">
  
      </div>
      <div className='flex mt-5 justify-center'>
        

      </div>

      <div>
     
      </div>
    </div>

  
    </div>
  )
}
