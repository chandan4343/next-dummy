"use client"
import '@/app/style.css'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
export default function Page({ params }) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [color, setColor] = useState("");


    useEffect(() => {
        getSinglePro();
    }, []);

    const getSinglePro = async () => {
        let productID = params.productedit
        let singlePro = await fetch(`http://localhost:3000/api/products/${productID}`);
        singlePro = await singlePro.json();
        console.log(singlePro);
        if (singlePro.success) {
            let result = singlePro.result
            setName(result.name)
            setPrice(result.price)
            setType(result.type)
            setColor(result.color)
        }
    }

    const updatePro = async () => {
        
        let productID = params.productedit
        let data = await fetch(`http://localhost:3000/api/products/${productID}`, {
            method: "PUT",
            body: JSON.stringify({ name, price, color, type }),
            cache:"no-cache"
        });
        data = await data.json();
        if (data.result) {
           alert("The product Updated");
           router.push("/productlist")
        }
    }

    return (
        <div className="pro_i_container">
            <h1>
                Update Product
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
                onClick={updatePro}
            >
                Update Product
            </button>
        </div>
    );
}