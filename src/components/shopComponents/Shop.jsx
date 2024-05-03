import React, { useCallback, useEffect, useState } from 'react'
import './styles/Shop.scss'
// import iphone from '../../images/iphone.jpg'
//import oading from "../sharedComponents/Loading";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import getAllProducts from "../../redux/actions";
import IsAuthenticated from '../authorization/auth';
import axios from 'axios';

const Shop = () => {

  // const dispatch = useDispatch();
  // const loading = useSelector((state) => state.getAllProducts.loading);

  // const products = useSelector((state) => state.getAllProducts.products);

  // useEffect(() => {
  //   dispatch(getAllItems());
  // }, [dispatch]);

  IsAuthenticated();

  const [rating, setRating] = useState([]);
  const [products, setProducts] = useState([]);
  const [noItem, setNoItem] = useState("");
  const token = localStorage.getItem("token")


  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4000/user/getAllProducts" ,
       {
        headers : {
          token : token
        }
       }
      );
      //console.log(response);

      if (response.data.message === "Products displayed") {
        setProducts(response.data.items);
        setLoading(false);
        if (response.data.items.length === 0) {
          setNoItem("Shop Empty");
        }
      } else {
        toast.error("Something Wrong Happened");
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    
  }, [fetchData]);

  
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