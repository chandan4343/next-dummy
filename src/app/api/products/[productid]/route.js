import { connetionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";

const { NextResponse } = require("next/server");

export async function PUT(request, content) {
    const productID = content.params.productid
    const filter = { _id: productID }
    const payload = await request.json();
    console.log(payload);

    await mongoose.connect(connetionSrt);
    const result = await Product.findOneAndUpdate(filter, payload);

    return NextResponse.json({ result, success: true })
}


export async function GET(request, content) {
    const productID = content.params.productid
    const update = { _id: productID }

    await mongoose.connect(connetionSrt);
    const result = await Product.findById(update);

    return NextResponse.json({ result, success: true })
}

export async function DELETE(request, content) {
    const productID = content.params.productid;
    const Del = { _id: productID };
    // console.log(Del);

    await mongoose.connect(connetionSrt);
    const result = await Product.deleteOne(Del);
    return NextResponse.json({ result, success: true })

}