"use client"
import { useRouter } from "next/navigation";

export default function Home(){
    const router=useRouter();
    const handleNavigation =() =>{
       router.push("/about");
    }
    return (
    <div>

      <h1>hello this is siddharth!</h1>
         <div>
          <button className ="text-white" onClick={handleNavigation}></button>
        
        </div>;
    
    </div>


);

}