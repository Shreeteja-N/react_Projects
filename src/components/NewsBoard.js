import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const API_KEY='ad55f061f3c244718a61fdfb95cb1c8f'

export default function NewsBoard() {

    const [articles,setArticle]=useState([])

    useEffect(()=>{
        const fetchdata= async()=>{
try{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);

    const result=await response.json()
    setArticle(result.articles)
}catch(error){
    console.log("Error fetching data:",error);
}


        }

        fetchdata()

    },[])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'> News</span></h2>
      {
      articles.length>0 ?(
        articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage}></NewsItem>
      })):(<p>Loading news</p>)}
    </div>
  )
}
