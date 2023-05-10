import React from "react";
import "../style/SidebarItem.css";
import { GetUserContext } from "../context/AppContext";

const SidebarItem = ({ playlistId, title, imgSrc, Icon, onClick }) => {
	const { currPlaylist } = GetUserContext();

	function getSelectedClass() {
		if (currPlaylist && currPlaylist.id === playlistId)
			return "sidebarItemSelected";
		if (currPlaylist == null && playlistId == null)
			return "sidebarItemSelected";

		return null;
	}

	return (
		<div className={`sidebarItem ${getSelectedClass()}`} onClick={onClick}>
			{Icon && <Icon className="icon" />}
			{imgSrc ? (
				<div className="sidebarItemImg">
					<img className="img" src={imgSrc} alt="" />
					<p className="itemTxt">{title}</p>
				</div>
			) : (
				<p className="itemTxt">{title}</p>
			)}
		</div>
	);
};

export default SidebarItem;
