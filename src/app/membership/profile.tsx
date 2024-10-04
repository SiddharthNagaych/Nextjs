import { Redirect } from "next";
import { redirect } from "next/dist/server/api-utils";
const security=null;
export default function member(){
     if(security===null){
        redirect('products?search=product1')
     }
}