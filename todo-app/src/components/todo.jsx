import { useState,useEffect } from "react";
import { BASE_URL } from "../config.js";
import axios from "axios";


function Todo(){
    const [todoss,setTodos]=useState([]);
    

    useEffect(()=>{
            fetch(`${BASE_URL}/todo`,{
            }).then((res)=>{
                res.json().then((data)=>{
                    console.log(data)
                    setTodos(data.todos)
                })
            })           
    },[]);
    return <div>
        { todoss.map(todo=>{
            return<div key={todo._id}>
                <Card todo={todo}/>                
                </div>
        }) }
            
    </div>

function Card(props){
    const { todo } = props;
    return (
        <div class="p-4 border bg-blue-300 bg-opacity-30 hover:bg-yellow-300 transition-color duration-200 delay-200" >
       
        <div  style={{
        display:"flex",
        justifyContent:"flex-start",
        padding:20,
        border:2,
        
        }}> 
            <ul role="list" class="divide-y divide-gray-100" >
         <li class="flex justify-between gap-x-6 py-5">
     <div class="flex gap-x-4">
      <img class="h-20 w-20 flex-none rounded-full bg-gray-50" src="https://cdn-icons-png.flaticon.com/512/235/235252.png?w=740&t=st=1690287866~exp=1690288466~hmac=de3570dfa89144595ea82f678eb1312ba44bae2c1fae731aaaaf824201f2a58c" alt=""/>
      <div class="min-w-0 flex-auto">
        <p class="text-mm font-semibold leading-6 text-gray-900">{todo.title}</p>
        <p class="mt-1 truncate text-sm leading-5 text-gray-500">{todo.description}</p>
      </div>
    </div>
    <div class="hidden sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">Task</p>

    <button
        type="button"
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
        onClick={()=>{
            axios.delete(`${BASE_URL}/todo/todos/`+todo._id)
            alert("deleted")
            window.location.reload()
        }}
        >
         Delete
        </button>
    
    </div>
    
  </li>
    </ul>
    </div> 
    </div>
    )
}

}

export default Todo;