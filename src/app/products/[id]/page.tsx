
interface ProductProps{
    params:{
        id:string;
    };
}
export default function productsId({params}:ProductProps){
    const {id}=params;
    console.log(id);
    return <div>
        <h1 className="text-white">Hello this is siddharth visiting products with id-{id}</h1>
    </div>
}