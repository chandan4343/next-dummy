import '@/app/style.css'
import DeleteProduct from '@/lib/component/deleteproduct';
import Link from 'next/link';
const GetProducts = async () => {
    let productdata = await fetch("http://localhost:3000/api/products",{cache:"no-cache"})
    productdata = await productdata.json();
    return productdata;
}
export default async function Page() {
    let products = await GetProducts();
    let productlist =  await products.result;
    // console.log(products.data);
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <br />
            <br />
            <h1>
                Products
            </h1>
            <Link href="/addproduct">
                Add Product
            </Link>
            <br />
            <br />
            <table border="1">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Type</td>
                        <td>Color</td>
                    </tr>
                </thead>
                    {
                        productlist.map((item) => (
                            <tbody>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.type}</td>
                                    <td>{item.color}</td>
                                    <td>
                                        <Link href={`/productlist/${item._id}`}>Edit</Link>
                                        <DeleteProduct id={item._id}/>
                                    </td>

                                </tr>
                            </tbody>
                        ))
                    }
            </table>
        </div>
    );
}