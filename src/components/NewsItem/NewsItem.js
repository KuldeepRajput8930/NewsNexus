import React  from 'react'
import './NewsItem.css'

const NewsItem =(props)=> {

    let { title, description, ImageUrl, NewsUrl, source, author, publishedAt } = props;
    return (
      <div className="card my-4">

        <span className="badge">{source}</span>
        <img src={ImageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <p className="card-text">{description} ...</p>
          <div className="dateAndAuthor">
            <p className='paragraph'><small className="text-body-secondary">By <strong>{author}</strong></small></p>
            <p className='paragraph'><small className="text-body-secondary"><strong>{publishedAt}</strong></small></p>
          </div>
          <a href={NewsUrl} className="btn btn-sm btn-secondary">Read More</a>
        </div>
      </div >
    )
  }

  export default NewsItem