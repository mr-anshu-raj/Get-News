import React, { Component } from 'react'
import '../App.css';

export class NewsItems extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let dateString = new Date(date).toUTCString();
    dateString = dateString.split(' ').slice(0, 4).join(' ');
    return (
      <div className='my-3'>
        <div className="card h-100">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
              {source}
            </span>
        <img src={!imageUrl?"https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text mt-auto"><small className="text-muted">By {author?author:"unknown"} on {dateString}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark" style={{width: '85px', height: '32px'}}>Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
