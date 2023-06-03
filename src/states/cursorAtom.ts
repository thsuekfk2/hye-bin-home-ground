import { atom } from "jotai";

export type CursorState = {
  color?: string;
  textColor?: string;
  size?: number;
  text?: any;
};

export const cursorAtom = atom<CursorState>({ color: "black", size: 16 });
