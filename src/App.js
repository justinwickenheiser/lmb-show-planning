import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Library from './components/library.jsx';
import Shows from './components/shows.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Styles
import './App.css';
import './css/styles.css';

class App extends Component {
  render() {
	return (
	<div className="App">
		<Header />
		<Nav />

		<Router>
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/library" component={Library} />
				<Route path="/shows" component={Shows} />
			</div>
		</Router>

		<Footer />
	</div>
	);
  }
}

export default App;
