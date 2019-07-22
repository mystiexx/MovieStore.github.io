import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  SideNav  from './SideNav'
import { SearchBar } from './SearchBar'
import { MainContent } from './MainContent'
import movies from './Movies'

export class App extends React.Component {
	constructor () {
		super ()
		this.state = {
			movie: movies,
			count: 0
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(key) {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			}
		})
	}

	render() {
		const movieContent = this.state.movie.map(data  => 
		
			<MainContent key={data.id} 
			name={data.name} price={data.price} 
			image={data.image} handleChange={this.handleChange}/>
			
			 )
		return (
			<div>
				<SearchBar />
				<div className="container-fluid px-lg-5">
					<div className="row mx-lg-n5 d-flex flex-row">
						<div className="col-2 d-flex bg-light text-dark" style={{height: 100 + '%'}}>
							<SideNav count={this.state.count}/>	
						</div>
						<div className="col">
							{movieContent}	
							</div>
					</div>
				</div>
			</div>
		)
	}
}
