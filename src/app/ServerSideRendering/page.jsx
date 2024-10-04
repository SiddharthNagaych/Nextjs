import Link from "next/link";
async function fetchListOfUsers() {
    try{
       const apiResponse=await fetch("https://dummyjson.com/users",{cache:"force-cache"});
       const res =await apiResponse.json();
       return res.users;

    }catch(error){
       throw new Error(error);
    }
}
export default async function ServerSideRendering(){
    const ListOfUsers=await fetchListOfUsers();
    console.log(ListOfUsers);
    
    return <div className="p-10"><h1>this is server side rendering and we are listing the users of the company</h1>
       <ul>
        {
            ListOfUsers &&ListOfUsers.length>0?
             ListOfUsers.map(user=><li className="text-white mt-5 cursor-pointer">
               <Link href={`/details/${user.id}`}>{user.firstName}</Link>
             </li>)
            :null
        }
       </ul>
    </div>
     
}