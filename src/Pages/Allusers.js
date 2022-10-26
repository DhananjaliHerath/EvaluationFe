import React from 'react'
import axios from "axios";

import { useState, useEffect } from "react";
import Createuserbtn from './Createuserbtn';


export default function Allusers() {


    var jwt = localStorage.getItem("jwt")
const [showModal, setShowModal] = useState(false);
const [singleuser,setSingleuser]=useState('')
const [showModal3, setShowModal3] = React.useState(false);




  
    axios({
        method: "get",
        url: "http://localhost:8080/users/",
        headers: {
         "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
        "Authorization": `Bearer ` + jwt
        }, data: null,
        
        mode: "cors",
      }).then((res) => {
        console.log("response", res.data.body)
        var users = res.data.body;
        localStorage.setItem("AllusersList", JSON.stringify(users))
    
      }).catch((err => { console.log("error ; " + err.name) }))
      // }
      const usersObj = localStorage.getItem('AllusersList')
      const AllusersList = JSON.parse(usersObj);
      console.log(AllusersList)
    



      const DeleteUser = (userId) => {
        // const UserID = props.userID
        console.log(userId)
        axios({
          method: "delete",
          url: "http://localhost:8080/users/" + userId,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
            Authorization: `Bearer ` + jwt,
          }, data: null,
       
          mode: "cors",
        }).then((res) => {
          console.log("response", res)
          // var users = res.data;
          // localStorage.setItem("UserList", JSON.stringify(users))
        })
      }
      const handleClick = (userID) => {
        setShowModal(true)
        DeleteUser(userID)
      }


  
	  const ViewUser = (userId) => {
        // const UserID = props.userID
        console.log(userId)
        axios({
            method: "get",
            url: "http://localhost:8080/users/" + userId,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                "Authorization": `Bearer ` + jwt
            }, data: null,
          
            mode: "cors",
        }).then((res) => {
            console.log("response", res)
            var users = res.data.body;
            setSingleuser(users)
            localStorage.setItem("Singleuser", JSON.stringify(users))
        })
    }

	const handleClickView = (userId) => {
        ViewUser(userId)
        setShowModal3(true)
    }

	const SingleusersObj = localStorage.getItem('Singleuser')
    const SingleuserList = JSON.parse(SingleusersObj);
    console.log(SingleuserList)










  return (


    <div>
        <section class="py-1 bg-blueGray-50">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24 ">
          <div class="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded ">
            <div class="rounded-t mb-0 px-4 py-3 border-0 ">
              <div class="flex flex-wrap items-center ">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
                  <h3 class="font-semibold text-base text-blueGray-700">All Users</h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">

              <Createuserbtn/>












                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>

                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   User ID
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Email
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      First Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Last Name
                    </th>

                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Status
                    </th>
                
                  
                  </tr>

                </thead>

                <tbody>
                  {AllusersList.map((blog) => (
                    <tr>
                     <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {blog.userId}
                      </td>
                      <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {blog.firstName}
                      </th>
                    
                      <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {blog.lastName}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                 
                        {blog.email}
                      </td>
                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                
                        {blog.userStatus}
                      </td>




                      <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">

                      
                          <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                         

                            <button type="button" onClick={() => handleClick(blog.userId)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>

                            <button type="button"onClick={() => handleClickView(blog.userId)} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-4 bg-white " id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg>
                            </button>
                          
                          
                          </div>
                        </div>
                      </td>

                    </tr>

             ))} 

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Delete account ?
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Are your sure you want to delete the account? The activities and any data will be deleted. You won't be able to retrieve 
                     any of the data you've added or reactivate your account. Click "Delete"if ypu still want your account deleted.
                    </p>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={() =>
                          setShowModal(false)
                        }
                      >
                        Delete
                      </button>
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() =>
                          setShowModal(false)
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}




{showModal3 ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
							
         
<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-600 dark:text-gray-100 ">
	
	<div className="flex flex-col items-center w-full ">
		<h2 className="text-3xl font-semibold text-center">User Details</h2>
		<div className="flex flex-col items-center py-6 space-y-3">
			<span className="text-center">.........................................</span>
			<div className="flex space-x-3">
       
			</div>
		</div>
		<div className="flex flex-col w-full ">
    <div>


	

	<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
      User Id: {singleuser.userId}

      </label>
    
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
        Email: {singleuser.email}
      </label>
   
    </div>
	

    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
        First Name: {singleuser.firstName}
      </label>
    
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">

      Last Name: {singleuser.lastName}
     
      </label>
   
    </div>
  
   <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
      Other Name: {singleuser.otherNames}



      </label>
    
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
      Primary Contact No: {singleuser.primaryContactNo}

      </label>
   
    </div> 
	
   <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
      Secondary Contact No: {singleuser.secondaryContactNo}


      </label>
    
    </div> 
   <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
      User Status: {singleuser.userStatus}

	 
	 
      </label>
   
    </div>

     <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
      Gender: {singleuser.gender}

      </label>
    
    </div>


    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
      NIC No: {singleuser.nicNumber}
  
      </label>
   
    </div>
	  <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
      Date Of Birth: {singleuser.dateOfBirth}

      </label>
   
    </div>

    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
      Join Date: {singleuser.joinDate}
 
      </label>
   
    </div>
   



        </div>
 
                        </div>

		
		</div>
		
		<a rel="noopener noreferrer" href="#" className="text-sm text-black  dark:text-gray-400"    onClick={() => setShowModal3(false)}>Close </a>
	</div>
	</div>
	</div>

	
            </div>
                                            
                </>
            ) : null}
































    </div>
  )
}
