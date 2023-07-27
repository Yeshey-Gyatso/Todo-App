import { useState } from "react";
import { BASE_URL } from "../config";
import axios from "axios";
function AddTodo(){
    const [title,setTitle]=useState();
    const [description,setDescription]=useState();

    return(
            <div className="p-4 border bg-green-300 bg-opacity-40">
            <div  style={{
                display:"flex",
                justifyContent:"flex-start",
                padding:20,
                border:2,
                marginLeft:10,
                }}>      
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">   
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">TODO =</span> */}
                  <input
                    type="text"
                    name="title"
                    // id="username"
                    autoComplete="todo"
                    className="block flex-1 bg-white border-0  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    // placeholder="janesmith"
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Details
              </label>
              <div className="mt-2">
                <textarea
                //   id="about"
                  name="details"
                  rows={3}
                  onChange={(e)=>{
                    setDescription(e.target.value)
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your todo.</p>
            </div>

            <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={async() => {
                    const response = await axios.post(`${BASE_URL}/todo/add`, {
                        title: title,
                        description: description
                    })
                    let data = response.data;
                    console.log(data)
                    alert("added")
                    window.location.reload()

                   
                }}
                >
                ADD
                </button>
    </div>
    </div> 
    </div> 
)}
export default AddTodo;