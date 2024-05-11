import React, { useCallback, useEffect, useState } from 'react'
import './styles/Shop.scss'
// import iphone from '../../images/iphone.jpg'
//import oading from "../sharedComponents/Loading";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import getAllProducts from "../../redux/actions";

const Shop = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getproducts.loading);

  const products = useSelector((state) => state.getproducts.products);

  useEffect(() => {
    dispatch(getAllProducts());
    if (products && products.length === 0) {
      setNoItem("Oops! Nothing To See");
    }
  }, [dispatch]);

  const [rating, setRating] = useState([]);
  const [cartproducts, setCartProducts] = useState([]);
  const [noItem, setNoItem] = useState("");
  const token = localStorage.getItem("token")

  
  return (
    <div className='container'>
      {products && products.map(product=> (<div className="card">
        <img src={product.imageUrl} alt='image'/>
        <div className="content">
          <span><p className='title'>{product.title}</p></span>
        <span><p className='description'></p>{product.description}</span>
        <span><p className='price'></p>{product.price}</span>
        <span> <p className='stars'><FaStar /> <FaStarHalfAlt /> <CiStar /></p> </span>
        </div>        
      </div>))}
      
    </div>
  )
}

export default Shop;