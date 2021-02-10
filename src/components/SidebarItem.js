import React from 'react';
import '../style/SidebarItem.css';

const SidebarItem = ({ title, imgSrc, Icon, onClick }) => {
	return (
		<div className="sidebarItem" onClick={onClick}>
			{Icon && <Icon className="sidebarItemIcon" />}
			{imgSrc ? (
				<div className="sidebarItemImg">
					<img className="sidebarImg" src={imgSrc} alt="" />
					<h3 className="sidebarItemImgTxt">{title}</h3>
				</div>
			) : (
				<h3>{title}</h3>
			)}
		</div>
	);
};

export default SidebarItem;
