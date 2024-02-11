import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import Loading from './Loading';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general"
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
  };

  async componentDidMount() {
    this.props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}`
    this.props.setProgress(50)
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(75)
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    this.props.setProgress(100)
  }

  toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page + 1}`
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, loading: false })
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title = `NewsNexus-${this.toTitleCase(this.props.category)}`
  }
  render() {
    return (
      <>
        {this.state.loading === true && <Loading />}
        <div className='news-container my-1'>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<h4 className='d-flex w-100 justify-content-center'><Spinner /></h4>}
            style={{ height: 'auto', overflow: 'hidden' }}
          >
            <h2 className='d-flex justify-content-center my-5'>Top {this.toTitleCase(this.props.category)}-Headlines</h2>
            <div className="newsItemContainer">
              {this.state.articles.map((element) => {
                return <div className="" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 40) : "AfD loses run-off in first vote since mass-deportation story - DW (English)"} description={element.description ? element.description.slice(0, 88) : "Evergrande Group, the world’s most indebted property developer, was ordered to be liquidated"} ImageUrl={element.urlToImage ? element.urlToImage : "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg"} NewsUrl={element.url} author={element.author ? element.author.slice(0, 30) : "Unknown"} source={element.source.name} publishedAt={new Date(element.publishedAt).toGMTString()} />
                </div>
              })}
            </div>
          </InfiniteScroll>
        </div >
      </>
    )
  }
}
