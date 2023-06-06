import { atom } from "jotai";

export type CursorState = {
  color?: string;
  textColor?: string;
  size?: number;
  text?: any;
};

export const cursorAtom = atom<CursorState>({ color: "#0c180258", size: 16 });
