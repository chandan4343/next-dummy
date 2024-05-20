"use client"
import '@/app/style.css'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Page() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");

    const addProduct = async ()=>{
        
        let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,color,type})
        });
        result = await result.json();
        
        if(result.success){
            alert("The product has been added")
            router.push("/productlist")
        }else{
            alert("Error")
        }
        // console.log(name,price,type,color);
    }
    return (
        <div className="pro_i_container">
            <Link href="/">
                Home
            </Link>
            <br />
            <br />
            <h1>
                Add Product
            </h1>
            
            <input
                className="input"
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => (setName(e.target.value))}
                
                
            />
            <input
                className="input"
                type="text"
                placeholder="Enter Product Price"
                value={price}
                onChange={(e) => (setPrice(e.target.value))}
            />
            <input
                className="input"
                type="text"
                placeholder="Enter Product Type"
                value={type}
                onChange={(e) => (setType(e.target.value))}
            />
            <input
                className="input"
                type="text"
                placeholder="Enter Product Color"
                value={color}
                onChange={(e) => (setColor(e.target.value))}
            />
            <button 
                className="btn"
                onClick={addProduct}
            >
                    Add Product
            </button>
        </div>
    );
}