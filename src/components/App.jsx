import React, { Component } from 'react';
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
				
				<Route exact path="/shows" render={(props) => <ShowIndex shows={shows} />} />
				<Route path="/shows/new" render={(props) => <ShowNew songs={lib} {...props} />} />
				<Route path="/shows/edit/:id" render={(props) => <ShowEdit songs={lib} selectedSongs={selectedSongs} {...props} />} />

				<Route path="/login" component={Login} />
			</div>
		</Router>

		<Footer />
	</div>
	);
  }
}

export default App;
