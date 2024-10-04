

interface DetailProps {
   params: {
     details: string;
   };
 }
 async function fetchUserDetail(currentUserId:string) {
   try{
      const apiResponse=await fetch(`https://dummyjson.com/users/${currentUserId}`)
      const res=await apiResponse.json();
      return res;
   }catch(e){
      throw new Error(e)
   }
 }
 
 export default async function Detail({ params }: DetailProps) {
   // Print the params to the console
   const {details}=await params;
   const userDetails=await fetchUserDetail(params.details);
 
   // Extracting the id from params
   
 
   return (
     <div>
       <h1 className="text-white">Hello, you are viewing the detail of user with ID: {details}</h1>
       <p className="text-white">{userDetails?.firstName} {userDetails?.lastName}</p>
       <p className="text-white">{userDetails?.age}</p>
       <p className="text-white">{userDetails?.lastName}</p>
       <p className="text-white">{userDetails?.email}</p>
       <p className="text-white">{userDetails?.phone}</p>
       <p className="text-white">{userDetails?.birthDate}</p>
     </div>
   );
 }
 