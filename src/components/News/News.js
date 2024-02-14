import React, { useEffect, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import Spinner from '../Spinner/Spinner';
import Banner from '../Banner/Banner';
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import './News.css'

const News = (props) => {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)

  const newsUpdate = async () => {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page}`
    props.setProgress(50)
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(75)
    let parseData = await data.json();
    setLoading(false)
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    props.setProgress(100)
    document.title = `NewsNexus-${toTitleCase(props.category)}`
  }
  useEffect(() => {
    newsUpdate();
  }, []);

  const toTitleCase = (str) => {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${page + 1}`
    let data = await fetch(url);
    let parseData = await data.json();
    setLoading(false)
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  }


  return (
    <>
      {loading === true && <Loading />}
      <Banner />
      <div className='news-container my-1'>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<h4 className='d-flex w-100 justify-content-center'><Spinner /></h4>}
          style={{ height: 'auto', overflow: 'hidden' }}
          endMessage={
            <p style={{ textAlign: 'center', marginTop: '50px' }}>
              <b>Yay! You have seen it all</b>
            </p>}
        >
          <h2 className='d-flex justify-content-center my-5'>Top {toTitleCase(props.category)}-Headlines</h2>
          <div className="newsItemContainer">
            {articles.map((element) => {
              return <div className="grid-item" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 40) : "AfD loses run-off in first vote since mass-deportation story - DW (English)"} description={element.description ? element.description.slice(0, 88) : "Evergrande Group, the world’s most indebted property developer, was ordered to be liquidated"} ImageUrl={element.urlToImage ? element.urlToImage : "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"} NewsUrl={element.url} author={element.author ? element.author.slice(0, 30) : "Unknown"} source={element.source.name} publishedAt={new Date(element.publishedAt).toGMTString()} />
              </div>
            })}
          </div>
        </InfiniteScroll>
      </div >
    </>
  )
}
export default News

News.efaultProps = {
  country: "in",
  category: "general"
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
};
