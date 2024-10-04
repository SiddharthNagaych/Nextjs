"use client"
import {useEffect, useState} from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSideRendering(){
    // const [loading,setLoading]=useState(false);
    // const [users,setUsers]=useState([]);

    // async function fetchUserList() {
    //     try{
    //         setLoading(true); 
    //         const apiResponsse=await fetch("https://dummyjson.com/users");
    //         const result=await apiResponsse.json();

    //          if(result?.users){
    //              setUsers(result.users);
    //              setLoading(false);
    //          }
    //     }catch{
    //        console.log(error);
    //        setUsers([]);
    //        setLoading(false);
    //     }
    // }
    // useEffect(()=>{
    //   fetchUserList()

    // },[])
    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)
    if(error) return <h1>error</h1>
    if(isLoading) return <h3 className="font-extrabold text-white">Loading Users !Please Wait</h3>
    return <div><h1 className="text-white">this is client side rendering</h1>
     <ul>
        {
            data&&data?.users &&data?.users.length>0?
             data?.users.map(user=><li className="text-white mt-5 cursor-pointer">
                {user.firstName}
             </li>)
            :null
        }
       </ul>
    
    </div>
} 