import { useState } from "react";
import "../style/Track.css";
import DeleteDialog from "./DeleteDialog";
import { getTrackArtists } from "../spotify/spotifyApi.js";
import { ReactComponent as RemoveIcon } from "../icons/remove.svg";
import useIsSmallScreen from "../hooks/useIsSmallScreen";

const Track = ({ track }) => {
	const [open, setOpen] = useState(false);
	const isSmallScreen = useIsSmallScreen();

	const getTrackLength = (ms) => {
		let minutes = Math.floor(ms / 60000);
		let seconds = ((ms % 60000) / 1000).toFixed(0);

		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}

		return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
	};

	const renderDesktop = () => {
		return (
			<div className="track">
				<h1 className="trackInfo">{track.track.name}</h1>
				<h1 className="trackInfo">{getTrackArtists(track)}</h1>
				<h1 className="trackInfo">{track.track.album.name}</h1>
				<h1 className="trackInfo">{getTrackLength(track.track.duration_ms)}</h1>
				<button className="deleteBtn" onClick={() => setOpen(true)}>
					<RemoveIcon className="deleteIcon" />
				</button>
			</div>
		);
	};

	const renderMobile = () => {
		return (
			<div className="mobileTrack">
				<div>
					<h1 className="trackInfo albumName">{track.track.album.name}</h1>
					<h1 className="trackInfo titleName">{track.track.name}</h1>
					<h1 className="trackInfo artistName">{getTrackArtists(track)}</h1>
				</div>
				<button className="deleteBtn" onClick={() => setOpen(true)}>
					<RemoveIcon className="deleteIcon" />
				</button>
			</div>
		);
	};

	return (
		<>
			<DeleteDialog open={open} setOpen={setOpen} track={track} />
			{isSmallScreen ? renderMobile() : renderDesktop()}
		</>
	);
};

export default Track;
