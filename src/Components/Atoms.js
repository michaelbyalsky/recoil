import { atom, atomFamily } from "recoil";

export const canvasBackgroundColorState = atom({
    key: 'canvasBackgroundColorState',
    default: 'white'
})

export const rectangleIdArrayState = atom({
    key: 'rectangleIdArrayState',
    default: []
})

export const rectAtomFamily = atomFamily({
	key: "rectAtom",
	default: id => ({
		name: `Rect ${id}`
	})
});

