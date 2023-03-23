import React, { Component } from 'react'
import Loading from './Loading';
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'


export class News extends Component {

  static  defaultProps = {
    country:'in',
    pageSize: 8,
    category: 'generals'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  
  constructor(props) {
    super(props);
    //console.log("hello i m a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - GetNews`;
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47604a151be846a188a27044630b7ec2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles,
       totalResults: parsedData.totalResults,
       loading : false
      })
  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47604a151be846a188a27044630b7ec2&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles : parsedData.articles,
    //    totalResults: parsedData.totalResults,
    //    loading : false
    //   })
    this.updateNews();
  }

  handleNextClick = async ()=>{
    //console.log("Next"); 
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47604a151be846a188a27044630b7ec2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json() 
    //   this.setState({
    //       page: this.state.page + 1,
    //       articles: parsedData.articles,
    //       loading: false
    //   })
    // }
    this.setState({page: this.state.page+1});
    this.updateNews();
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47604a151be846a188a27044630b7ec2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page : this.state.page - 1,
    //   articles : parsedData.articles,
    //   loading: false
    // })
    this.setState({page: this.state.page-1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center' style={{margin: '25px 0px'}}>Top headlines</h2>
        {this.state.loading && <Loading/>}      
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title?element.title:""} description={element.description?element.description.slice(0, 86)+"....":""} imageUrl={element.urlToImage} newsUrl={element.url}
              author={element.author} date={element.publishedAt} source={element.source.name}/> 
          </div>
        })}
            
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
