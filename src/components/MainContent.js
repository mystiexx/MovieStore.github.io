import React, { Component, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/box.css'

export class MainContent extends Component {
 
    render() {
        const { name, price, image, handleChange, id } = this.props
        
        return (
            <div className="card-group mt-2 mr-2 d-flex flex-column flex-wrap float-left" style={{width: 13 + 'rem'}}>
            <div className="card">
                <img src={image}  className="img-fluid" style={{width: 205 + 'px', height: 205 + 'px'}}/>
                <div className="card-body">
                <h5 className="card-title">{name} </h5>
                <p className="card-text">{price}  </p>
                <a href='#' className="btn btn-primary" onClick={() =>
                handleChange(id)}>Add to Cart </a>
                </div>
                </div>
            </div>
            
        )
    }
}