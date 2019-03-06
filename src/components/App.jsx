import React, { Component } from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Nav from './nav.jsx';
import Home from './home.jsx';
import LibraryIndex from './library/index.jsx';
import LibraryEdit from './library/edit.jsx';
import LibraryNew from './library/new.jsx';
import Shows from './shows.jsx';
import Login from './login.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
	return (
	<div className="App">
		<Header />
		<Nav url={urlPath} isAuthenticated={isAuthenticated} />

		<Router>
			<div id="main" role="main">
				<Route exact path="/" component={Home} />
				<Route exact path="/library" render={(props) => <LibraryIndex songs={lib} />} />
				<Route path="/library/edit/:id" render={(props) => <LibraryEdit {...props} />} />
				<Route path="/library/new" render={(props) => <LibraryNew {...props} />} />
				
				<Route path="/shows" component={Shows} />
				<Route path="/login" component={Login} />
			</div>
		</Router>

		<Footer />
	</div>
	);
  }
}

export default App;
