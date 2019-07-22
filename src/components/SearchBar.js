import React from 'react'
import { FaSearch, FaBell, FaUser, FaTh }  from 'react-icons/fa'
import { FaFilm }  from 'react-icons/fa'



export class SearchBar extends React.Component {
    render () {
        return (
            <div>
            <nav className = "navbar navbar-dark bg-dark">
            <span className='navbar-brand'> <FaFilm style={{width: 30, height: 30}} className="d-inline-block align-top"/> MovieStore </span>
            <form className="form-inline">
            <div className="input-group d-inline-flex">
            <input className = "form-control mr-2" type="text"placeholder="Search" />
            </div>
            <button className ="btn btn-light"> <FaSearch /></button>
            <FaBell style={{width: 30, height: 30, color: 'white'}} className="d-inline-block align-top mr-2 ml-2"/>
            <FaUser style={{width: 30, height: 30, color: 'white'}} className="d-inline-block align-top mr-2"/>
            <FaTh style={{width: 30, height: 30, color: 'white'}} className="d-inline-block align-top "/>
            </form>
            </nav>
            </div>
        )
    }
}