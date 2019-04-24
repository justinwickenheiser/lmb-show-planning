import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Nav from './nav.jsx';
import Home from './home.jsx';
import LibraryIndex from './library/index.jsx';
import LibraryEdit from './library/edit.jsx';
import LibraryNew from './library/new.jsx';
import ShowIndex from './shows/index.jsx';
import ShowNew from './shows/new.jsx';
import ShowEdit from './shows/edit.jsx';
import Login from './login.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allSongs: [],
			limitedSongs: [],
			shows: [],
			currentPage: 1,
			maxRecords: 2
		};
		this.loadSongs = this.loadSongs.bind(this);
		this.loadShows = this.loadShows.bind(this);
		this.updatePage = this.updatePage.bind(this);
	}

	loadSongs(limit) {
		axios.get('/songs.json')
			.then(res => {
				this.setState({ allSongs: res.data });
				if (limit) {
					this.updatePage(this.state.currentPage);
				}
			})
			.catch(err => console.log(err));
	}
	loadShows() {
		axios.get('/shows.json')
			.then(res => {
				this.setState({ shows: res.data });
			})
			.catch(err => console.log(err));
	}
	updatePage(pg) {
		var filteredSongs = [];
		var startIndex = (pg-1)*this.state.maxRecords;
		for (var i = startIndex; i<startIndex+this.state.maxRecords; i++) {
			if (this.state.allSongs[i] !== undefined) {
				filteredSongs.push(this.state.allSongs[i]);
			}
		}
		this.setState({
			limitedSongs: filteredSongs,
			currentPage: pg
		});
	}
	componentDidMount() {
		console.log('App Mounted');
		this.loadSongs(true);
		this.loadShows();
	}
	render() {
		return (
			<div className="App">
				<Header />
				<Nav url={urlPath} isAuthenticated={isAuthenticated} />

				<Router>
					<div id="main" role="main">
						<Route exact path="/" component={Home} />
						<Route exact path="/library" render={(props) => <LibraryIndex songs={this.state.limitedSongs} page={this.state.currentPage} maxRecords={this.state.maxRecords} recordCount={this.state.allSongs.length} updatePagination={this.updatePage} />} />
						<Route path="/library/edit/:id" render={(props) => <LibraryEdit {...props} />} />
						<Route path="/library/new" render={(props) => <LibraryNew {...props} />} />
						
						<Route exact path="/shows" render={(props) => <ShowIndex />} />
						<Route path="/shows/new" render={(props) => <ShowNew songs={this.state.allSongs} />} />
						<Route path="/shows/edit/:id" render={(props) => <ShowEdit {...props} />} />

						<Route path="/login" component={Login} />
					</div>
				</Router>

				<Footer />
			</div>
		);
	}
}

export default App;
