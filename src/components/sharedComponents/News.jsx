import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles/News.scss'
const News = () => {

    const [newsdata, setNewsData] = useState([])

    const fetchNews = async () => {

            const options = {
                method: 'GET',
                url: 'https://google-news-api1.p.rapidapi.com/search',
                params: {
                  language: '<REQUIRED>'
                },
                headers: {
                  'X-RapidAPI-Key': '12a3e495d9msh49a2cf4f16f4eb5p1eb099jsn7bc7b74061fa',
                  'X-RapidAPI-Host': 'google-news-api1.p.rapidapi.com'
                }
              };
          

            try {
                const response = await axios.request(options);
                console.log(response.data);

                setNewsData(response.data);
            }
            catch (error) {
                console.log(error)
            }


    }

    useEffect(() => {

        fetchNews()

    }, [])

    return (
        <div className='news'>
            {newsdata.map((news) => (
                <div className="card">
                    <img src={news.Image} alt="not available" />

                    <h5>{news.Title}</h5>
                    <p>{news.Summary}</p>
                </div>
            ))}

        </div>
    )
}

export default News

