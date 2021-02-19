import React from 'react';
import '../style/SidebarItem.css';

const SidebarItem = ({ title, imgSrc, Icon, onClick }) => {
	return (
		<div className="sidebarItem" onClick={onClick}>
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
