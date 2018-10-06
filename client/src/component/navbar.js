import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			keyword : ''
		}
}
	render() { 
		return ( 
			<div>
				<nav className="navbar navbar-light bg-light justify-content-between">
					<img src="http://dayspamillburn.com/1/wp-content/guestbook-icon.png" alt="icon" style={{width:'15%', cursor:'pointer'}} onClick={ this.props.getList }></img>
					<div className="form-inline">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=> this.setState({ keyword : e.target.value})}></input>
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => { this.props.search(this.state.keyword) } }>Search</button>
					</div>
				</nav>
			</div> 
		);
	}
}
 
export default Navbar;