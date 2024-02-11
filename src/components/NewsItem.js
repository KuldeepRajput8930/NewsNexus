import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, NewsUrl, source, author, publishedAt } = this.props;
    return (
      <div className="card my-4" style={{ width: '18rem' }}>

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
}