import React from "react";
import "./rectangle.css";
import { useRecoilValue } from 'recoil'
import { rectAtomFamily } from "../Atoms"; 

function Rectangle({id}) {
	const recAtom = useRecoilValue(rectAtomFamily(id))
	return <div className="rect" style={{backgroundColor: recAtom.color, width: `${recAtom.width}px`, height: `${recAtom.height}px`}}></div>;
}

export default Rectangle;
