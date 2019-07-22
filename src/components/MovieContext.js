import React, { Component, createContext } from 'react'
import { MainContent } from './MainContent'
import SideNav  from './SideNav'

export default class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {

            movies: [
                {
                    name: "Harry Potter",
                    image:"https://img.itch.zone/aW1hZ2UvMzk4MjYvMTcxODUxLmpwZw==/347x500/Eh0t1Y.jpg",
                    price: '$10',
                    id: 1
                },
                {
                    name: "Game of Thrones",
                    image: "https://cdn3-www.comingsoon.net/assets/uploads/2019/03/got.jpg",
                    price: '$50',
                    id: 2
                },
                {
                    name: "Inception",
                    image: "http://images2.fanpop.com/image/photos/13300000/Inception-Poster-inception-2010-13368478-1029-1500.jpg",
                    price: '$10',
                    id: 3
                },
                {
                    name: "Avengers",
                    image: "https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg",
                    price: '$10',
                    id: 4  
                },
                {
                    name: 'The Big Bang Theory',
                    image: "https://www.awesomepostersonline.com/uploads/2018-11-05/3dc8b0ce/bdf479a283f.jpg",
                    price: '$40',
                    id: 5
                },
                {
                    name: "John Wick III",
                    image: "https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/86/0c/95/860c956f-382b-8a5b-d39e-f90bb2782bd2/pr_source.lsr/268x0w.png",
                    price: '$10',
                    id: 6
                },
                {
                    name: "Harry Potter",
                    image:"https://img.itch.zone/aW1hZ2UvMzk4MjYvMTcxODUxLmpwZw==/347x500/Eh0t1Y.jpg",
                    price: '$10',
                    id: 7
                },
                {
                    name: "Game of Thrones",
                    image: "https://cdn3-www.comingsoon.net/assets/uploads/2019/03/got.jpg",
                    price: '$50',
                    id: 8
                },
                {
                    name: "Inception",
                    image: "http://images2.fanpop.com/image/photos/13300000/Inception-Poster-inception-2010-13368478-1029-1500.jpg",
                    price: '$10',
                    id: 9
                },
                
            ],

            count: 1
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(key) {
        console.log("Changed");
    } 
    render () {
        const { movies, count } = this.state 
        const movieComponent = movies.map(data  => <div 
        className="col"> <MainContent name={data.name} price={data.price} 
        image={data.image} key={data.id} handleChange={this.handleChange}/> </div>)
        return (
            <div>
            <div className="row">
                {movieComponent}  
            </div>        
            </div>
        );
    }
       
}
