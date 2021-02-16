import React from "react";
import "../style/Body.css";
import Header from "./Header";

const Body = () => {
	return (
		<div className="body">
			<Header />
			<div className="container">
				<img
					className="playlistImg"
					src="https://i.scdn.co/image/ab67616d00001e02f337a21d945f44e802a1eb1d"
					alt=""
				/>
				<div className="bodyItems">
					<h1 className="playlistTitle">Playlist Title</h1>
					<h4 className="songCount">150 songs</h4>
				</div>
			</div>
		</div>
	);
};

export default Body;
