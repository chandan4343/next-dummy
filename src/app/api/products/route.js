import { connetionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET() {
    // // console.log(connetionSrt);

    // await mongoose.connect(connetionSrt);
    // const data = await Product.find();
    // // console.log(data);

    // return NextResponse.json({ data,success:true });
    let data = [];
    let success = true;
    try {
        await mongoose.connect(connetionSrt);
        data = await Product.find();
    } catch (error) {
        data = {result:"error"}
        success = false
    }
    return NextResponse.json({result:data,success})
}
export async function POST(req) {
    const payload = await req.json()
    await mongoose.connect(connetionSrt); 
    const InsertProduct = new Product(payload);
    const result = await InsertProduct.save();
    return NextResponse.json({result, success:true});
}