import React from 'react'

const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block .justify-content-between my-3 mx-3" style={{maxWidth:"345px"}}>
    <img className='p-1' src={src?src:"/customimage.jpeg"} style={{height:"200px", width:"340px"}} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{description?description.slice(0,90):"Stay informed with the latest Tesla news, trends, and updates from reliable sources around the world. Our dynamic newsboard fetches real-time articles to keep you updated on Tesla's innovations, market moves, and more—all in one place. Whether you're a fan, investor, or enthusiast, explore curated news stories that matter most to you."}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
    
  )
}
export default NewsItem
