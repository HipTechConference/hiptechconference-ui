import React, { Component } from 'react';

export default class IndexCard extends Component {

  render(){
    const {imgUrl, name} = this.props
    return (
      <div className="carousel-item">
        <img src={imgUrl} className="d-block w-50" alt={name} />
        <h3 className="card-title text-center align-middle">{name}</h3>
      </div>
    )
  }
}
