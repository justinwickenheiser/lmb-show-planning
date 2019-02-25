var songLibrary = [
	{
		songId: 1,
		title: "Saturday Night's Alright (for fighting)",
		arranger: "Tom Wallace",
		length: "2:11",
		audio: "https://www.jwpepper.com/sheet-music/media-player.jsp?&type=audio&productID=10359781"
	},
	{
		songId: 2,
		title: "24K Magic",
		arranger: "Tom Wallace",
		length: "1:54",
		audio: "https://www.jwpepper.com/sheet-music/media-player.jsp?&type=audio&productID=10740870"
	},
	{
		songId: 3,
		title: "Abc",
		arranger: "Michael Sweeney",
		length: "1:52",
		audio: "https://www.jwpepper.com/sheet-music/media-player.jsp?&type=audio&productID=2462703"
	}
];


export function getSong(id) {
	var retval = {
		songId: null,
		title: "",
		arranger: "",
		length: "",
		audio: ""
	};
	
	// Search songs
	for (var i=0; i < songLibrary.length; i++) {
		if (songLibrary[i].songId == id) {
			retval = songLibrary[i];
		}
	}

	return retval;
}

export function getSongs() {
	return songLibrary;
}