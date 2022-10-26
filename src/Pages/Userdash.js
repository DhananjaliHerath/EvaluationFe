import React from 'react'
import { useState } from "react";
import Userprofile from './Userprofile';
import { Link } from 'react-router-dom';
export default function Userdash() {

    const professions = [ "Profile"];
    const [myProfession, setMyProfession] = useState("")



  return (
    <div>

<div>
      <div className='relative w-full h-screen bg-gray-900'>
      <div class="flex w-screen h-screen text-gray-200">


        
        <div class="flex flex-col w-56 border-r border-gray-800">
     
            <div class="flex flex-col flex-grow p-4 overflow-auto">
            <h1 class="text-lg font-medium item-center mt-8">Dashboard</h1>



            
             
                {professions.map(profession => (
                            <button
                                type="button"
                                key={profession}
                                className="flex items-center flex-shrink-0 h-10 mt-12 px-2 text-sm font-medium rounded hover:bg-gray-300"
                                onClick={() => setMyProfession(profession)}
                            >
                                {profession.toLocaleUpperCase()}
                            </button>
                        ))}





        
                
                <a class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
                    href="#">
                  
                   <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-5 ' id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M3.017,13.5H14.455l-2.689,2.689,2.121,2.122,4.189-4.19a3,3,0,0,0,0-4.242l-4.2-4.2L11.753,7.8l2.7,2.7H3.017Z"/><path d="M20.5,0H3.5A3.528,3.528,0,0,0,0,3.552V7.9H3V3.552A.526.526,0,0,1,3.5,3h17a.526.526,0,0,1,.5.548v16.9a.526.526,0,0,1-.5.548H3.5a.526.526,0,0,1-.5-.548V16.1H0v4.352A3.528,3.528,0,0,0,3.5,24h17A3.528,3.528,0,0,0,24,20.448V3.552A3.528,3.528,0,0,0,20.5,0Z"/></svg>
                    
                   <Link to='/'>
                    <span class="ml-2 leading-none text-black">Log Out</span>
                    </Link>
                </a>
            </div>
        </div>
        <div class="flex flex-col flex-grow">
            <div class="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
                <h1 class="text-lg font-medium item-center justify-center container">Employee Dashboard HRIS</h1>
               
               
            </div>
            <div class="flex-grow p-6 overflow-auto bg-gray-200">
                <div class="grid grid-cols-3 gap-6 ">
                <div class="col-span-3 w-full ">
       
                {myProfession === "Profile" && (
                       <Userprofile/>
                        )}
                </div>
                  
                </div>
            </div>
        </div>
  

</div>



      </div>
    </div>







    </div>
  )
}
