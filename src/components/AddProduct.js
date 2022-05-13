import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const AddProduct = () => {
    const history = useNavigate()
    const [productInput,setProductInput] = useState({
        product_name:"",
        description:"",
        price:0.00,
        stock:0,
    })
    const handleInput = (e) => {
        e.preventDefault()
        setProductInput({...productInput,[e.target.name]:e.target.value})
    }
    const saveProduct = (e) => {
        e.preventDefault()
        const data = {
            product_name:productInput.product_name,
            description:productInput.description,
            price:parseFloat(productInput.price),
            stock:parseInt(productInput.stock),
        }
        axios.post("/addproduct",data).then((res)=>{
            if(res.data.Status===200){
                swal("New product added",res.data.message,"success")
                setProductInput({
                    product_name:"",
                    description:"",
                    price:0.00,
                    stock:0,
                })
                history("/products")
            }
            else{
                setProductInput({
                    ...productInput
                })
            }
        })
    }
  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Add Product</h4>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={saveProduct}>
                            <div className='form-group mb-3'>
                                <label>Product Name</label>
                                <input type='text' className='form-control' name='product_name' value={productInput.product_name} onChange={handleInput}/>
                                <label>Description</label>
                                <input type='text' className='form-control' name='description' value={productInput.description} onChange={handleInput}/>
                                <label>Price</label>
                                <input type='text' className='form-control' name='price' value={productInput.price} onChange={handleInput}/>
                                <label>Stock</label>
                                <input type='text' className='form-control' name='stock' value={productInput.stock} onChange={handleInput}/>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddProduct