import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../stylesheets/box.css'
import  SideNav  from './Nav/SideNav'
import { SearchBar } from './Nav/SearchBar'
import { MainContent } from './Content/MainContent'
import {movies} from './Content/Movies'
import {Cart} from './Content/Cart'



export class App extends React.Component {
	constructor () {
		super ()
		this.state = {
			movies: movies,
			cart: [],
			searchfield: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	componentDidMount() {
		this.setState({movies: movies})
	}
	handleChange(movie) {
		const existingMovie = this.state.cart.filter(m => m.id === movie.id);
		if (existingMovie.length > 0){
			const withoutExistingMovie = this.state.cart.filter (m => m.id !== movie.id);
			const updatedUnitsMovie = {...existingMovie[0], Units: existingMovie[0].units + movie.units}
			this.setState({
				cart: [...withoutExistingMovie, updatedUnitsMovie]
			});
		} else {
			this.setState({cart:[...this.state.cart, movie]})
		}
		console.log(movie)
		}

	handleDelete = i => {
		let cartCopy = this.state.cart.slice();
		cartCopy.splice(i, 1);
		this.setState({cart: cartCopy});
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
		 
	}

	render() {
		const filteredMovies = this.state.movies.filter(movies => {
			return movies.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
			<div>
		<SearchBar searchChange={this.onSearchChange} />
		<div className="container-fluid px-lg-5">
		<div className="row mx-lg-n5 d-flex flex-row">
		<div className="col-2 d-flex bg-light text-dark flex-wrap" style={{height: 100 + '%'}}>
		<SideNav cart={this.state.cart}/>
		</div>
		{(this.props.location.pathname === "/") ?
		<div className="col">
		<MainContent movies={filteredMovies} handleChange={this.handleChange}/>
		</div> 	: <Cart cart={this.state.cart} handleDelete={this.handleDelete} total={this.state.cart.reduce((a, c)=>(a+c.price*1), 0)}/> 
			} 
			</div>	
			</div>
			</div>
			
		)
	}
}
