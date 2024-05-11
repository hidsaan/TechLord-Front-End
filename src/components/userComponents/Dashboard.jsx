import React, { useState } from 'react'
import iPhonesForHome from '../../images/iPhonesForHome.jpeg'
import samsung from '../../images/samsungGalaxyForHome.jpeg'
import pc from '../../images/pcBuildingFor Home.jpeg'
import headphone from '../../images/headphoneForHome.jpeg'
import './styles/Dashboard.scss'
import Cards from '../../DummyData/cards'
import categories from '../../DummyData/categories'
import blogs from '../../DummyData/blogs'
import { useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import IsAuthenticated from '../authorization/auth'
import Cart from './Cart'
import { toast } from 'react-toastify'


const Dashboard = () => {

    IsAuthenticated();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    };

    const addProductToCart= (card) =>{
        setCart((prevCart) => [...prevCart, card]);
        toast.success("Yay! Product has been added to your cart")
    }

    return (

        <>
            <div className="carousel">
                <button onClick={prevSlide}><FaArrowLeft /></button>
                <div style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    <div className="slide"><img src={iPhonesForHome} alt='iPhones' /></div>
                    <div className="slide"><img src={samsung} alt='samsung' /></div>
                    <div className="slide"><img src={pc} alt='pc' /></div>
                    <div className="slide"><img src={headphone} alt='headphone' /></div>
                </div>

                <button onClick={nextSlide}><FaArrowRight /></button>
                <div className="fade"></div>
            </div>

            <div className="dashboard">

                <div className="headings">
                    <p className='headinggrey'>What's</p> <p className='headingwhite'>New</p>
                </div>
                <div className="whatsnew">

                    {Cards && Cards.map(card => (<div className="card">
                        <img src={card.image} alt='image' />
                        <p className='cardname'>{card.name}</p>
                        <p className='carddes'>{card.description}</p>
                        <button onClick={() => addProductToCart(card)}>Add To Cart</button>
                    </div>))}
                </div>

                <div className="headings">
                    <p className='headinggrey'>Shop By</p> <p className='headingwhite'>Categories</p>
                </div>
                <div className="categories">
                    {categories && categories.map(category => (<div className="categorycard">
                        <img src={category.image} alt='image' />
                        <p className='category'>{category.name}</p>
                        
                    </div>))}

                </div>

                <div className="headings">
                    <p className='headingwhite'>Everything</p> <p className='headinggrey'>You Need To Know</p>
                </div>
                <div className="blogs">
                    {blogs && blogs.map(blog => (<div className="card">
                        <a href={blog.link}>
                            <p className='blogtitle'>{blog.title}</p>
                            <p className='bloginsight'>{blog.insight}</p>
                        </a>
                    </div>))}

                </div>

            </div>
        </>


    )
}

export default Dashboard