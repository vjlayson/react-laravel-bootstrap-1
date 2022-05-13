import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(
        ()=>{
            axios.get("/products").then((res)=>{
                if(res.status===200){
                    setProducts(res.data.products)
                }
            })
        },
        []
    )

    let product_table = "";
    product_table = products.map((product,index)=>{
        return(
            <tr key={index}>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td><Link to={`/updateproduct/${product.id}`} className="btn-primary">Update</Link></td>
            </tr>
        )
    })
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-header'>
                <h4>List of Products</h4>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-responsive'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>product name</th>
                            <th>product description</th>
                            <th>product price</th>
                            <th>product stock</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product_table}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewProducts