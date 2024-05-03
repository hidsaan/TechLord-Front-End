import React, { useContext, useState } from 'react'
import './styles/addProducts.scss'
import addProduct from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import {toast ,ToastContainer} from "react-toastify"

const AddProducts = () => {

    const dispatch = useDispatch();

    const loading =useSelector((state) => state.addproducts.loading )
    const message =  useSelector((state) => state.addproducts.message);

    

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleImage = (e) => {
        const file = e.target.files[0];
        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = () => {
            if (Reader.readyState === 2) {
                setImage(Reader.result);
            }
        };
    };

    const formData = new FormData();

    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);

    const handleSubmit = (e) => {
        e.preventDefault();


       
        dispatch(addProduct(formData));

        if (message === "Product Added!") {

            toast.success("Product Added Sucessfully!")
        } else {
            toast.error(message);
        }
    };

    return (

        <div className='addproduct'>

            <ToastContainer/>
            <div className="productform">
                <form>
                    <label>
                        <input type='file' placeholder='img' name="image" accept="image/*" onChange={handleImage}>
                        </input>
                    </label>
                    <label>
                        <input type='text' placeholder='title' name="title" value={title} onChange={(e) => {
                            setTitle(e.target.value);
                        }}>
                        </input>
                    </label>
                    <label>
                        <input type='text' placeholder='description' name="description" value={description} onChange={(e) => {
                            setDescription(e.target.value);
                        }}>
                        </input>
                    </label>
                    <label>
                        <input type='text' placeholder='price' name="price" value={price} onChange={(e) => {
                            setPrice(e.target.value);
                        }}>
                        </input>
                    </label>
                    <button type='submit' onClick={handleSubmit} > submit</button>
                </form>
            </div>

        </div>
    )
}

export default AddProducts