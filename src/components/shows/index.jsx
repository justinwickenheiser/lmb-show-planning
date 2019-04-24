import React from 'react';
import axios from 'axios';
import Card from './card.jsx';

// Return a list of songs that is filter-able
export default class ShowIndex extends React.Component {

	constructor(props) {
		super(props);
		this.loadShows = this.loadShows.bind(this);
		this.loadSelectedSongs = this.loadSelectedSongs.bind(this);

		this.state = {
			songs: [],
			shows: [],
			selectedSongs: {}
		};
	}
	loadShows() {
		axios.get('/shows.json')
			.then(res => {
				this.setState({ shows: res.data });
				// now loop over shows and get their selected songs for each show
				
				for (var i = 0; i < res.data.length; i++) {
					this.loadSelectedSongs(res.data[i].show_id);
				}
			})
			.catch(err => console.log(err));
	}
	loadSelectedSongs(showId) {
		axios.get(`/shows/${showId}/selected_songs.json`)
			.then(res => {
				var obj = {
					[showId]: res.data
				}
				var merged = {...obj, ...this.state.selectedSongs}
				this.setState({ selectedSongs: merged });
			})
			.catch(err => console.log(err));
	}
	loadSongs() {
		axios.get('/songs.json')
			.then(res => {
				this.setState({ songs: res.data });
			})
			.catch(err => console.log(err));
	}

	componentDidMount() {
		this.loadSongs();
		this.loadShows();
	}
	
	render () {
		var cards = this.state.shows.map((item, key) => 
			<Card show={item} selectedSongs={this.state.selectedSongs[item.show_id]} songs={this.state.songs} key={"show-"+key} />
		);

		return (
			<div className="container">
				<h1>Shows</h1>
				<p>
					<a href={"/shows/new"} className="btn btn-success">
						New Show
					</a>
				</p>
				<div className="row">
					{cards}
				</div>
			</div>
		);

	}
}