import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
 const Newsboard = ({category}) => {
  const [articles,setarticles]=useState([])
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=72c87bcdc2614d60949f269b39fd8510`)
    .then((res)=>res.json())
    .then((data)=>{setarticles(data.articles)})
  },[category])
  return (
    <div>
    <h2 className='text-center bg-secondary bg-opacity-50 '>Latest<span className="badge text-danger bg-opacity-100 px-1" >News</span></h2>
    {articles.map((news, index) => (
      <NewsItem  key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    ))}
    </div>
  )
}
export default Newsboard