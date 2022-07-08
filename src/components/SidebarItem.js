import React from "react";
import "../style/SidebarItem.css";
import { GetUserContext } from "../context/AppContext";

const SidebarItem = ({ playlistId, title, imgSrc, Icon, onClick }) => {
	const { currPlaylist } = GetUserContext();

	function getClass() {
		if (currPlaylist) {
			if (currPlaylist.id === playlistId) {
				return "sidebarItemSelected";
			} else {
				return "sidebarItem";
			}
		} else if (currPlaylist == null && playlistId == null) {
			return "sidebarItemSelected sidebarItemSelectedIcon";
		} else {
			return "sidebarItem";
		}
	}

	return (
		<div className={getClass()} onClick={onClick}>
			{Icon && <Icon className="material-icons md-18 icon" />}
			{imgSrc ? (
				<div className="sidebarItemImg">
					<img className="sidebarImg" src={imgSrc} alt="" />
					<p className="sidebarItemImgTxt">{title}</p>
				</div>
			) : (
				<p className="sidebarItemTxt">{title}</p>
			)}
		</div>
	);
};

export default SidebarItem;
