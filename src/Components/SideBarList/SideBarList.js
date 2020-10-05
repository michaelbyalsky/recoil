import React from "react";
import "./sideList.css";
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
// ---------------------
import { useRecoilValue } from 'recoil'
import { rectangleIdArrayState } from '../Atoms'
import SideBarItem from '../SideBarItem/SideBarItem'

function SideBarList() {
	const rectanglesIdArray = useRecoilValue(rectangleIdArrayState)
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------
	return <ul className="sidebar__list">
		{rectanglesIdArray.map((id) => (<SideBarItem key={id} id={id} />))}
	</ul>;
}

export default SideBarList;
