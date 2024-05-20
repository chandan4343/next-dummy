"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props) {
    const router = useRouter();
    const productID = props.id;
    const productDel = async ()=>{
        let response = await fetch(`http://localhost:3000/api/products/${productID}`,{
            method:"DELETE",
            cache:"no-cache"
        });
        response = await response.json();
        if(response.success){
            alert("Product deleted")
            router.push("/productlist")
        }
    }
    // console.log(props.id);
    return (
        <div>
            <button onClick={productDel}>Delete</button>
        </div>
    );
}