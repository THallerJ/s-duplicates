import React from 'react';
import '../style/SidebarItem.css';
import { GetUserContext } from '../context/UserContext';

const SidebarItem = ({ playlistId, title, imgSrc, Icon, onClick }) => {
	const { currPlaylist } = GetUserContext();

	return (
		<div
			className={
				currPlaylist
					? currPlaylist.id === playlistId
						? 'sidebarItemSelected'
						: 'sidebarItem'
					: currPlaylist == null && playlistId == null
					? 'sidebarItemSelected'
					: 'sidebarItem'
			}
			onClick={onClick}
		>
			{Icon && <Icon className="material-icons md-18" />}
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
