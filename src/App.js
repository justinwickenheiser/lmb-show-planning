import React, { Component } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import LibraryIndex from './components/library/index.jsx';
import LibraryEdit from './components/library/edit.jsx';
import LibraryNew from './components/library/new.jsx';
import Shows from './components/shows.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getSongs } from './js/data.js';

// Styles
import './App.css';
import './css/styles.css';
import './css/bootstrap_fixes.css';
import './css/tables.css';

var lib = getSongs();

class App extends Component {
  render() {
	return (
	<div className="App">
		<Header />
		<Nav />

		<Router>
			<div id="main" role="main">
				<Route exact path="/" component={Home} />
				<Route exact path="/library" render={(props) => <LibraryIndex songs={lib} />} />
				<Route path="/library/edit/:id" render={(props) => <LibraryEdit {...props} />} />
				<Route path="/library/new" render={(props) => <LibraryNew {...props} />} />
				<Route path="/shows" component={Shows} />
			</div>
		</Router>

		<Footer />
	</div>
	);
  }
}

export default App;
