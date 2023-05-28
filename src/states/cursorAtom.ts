import { atom } from "jotai";

export type CursorState = {
  color?: string;
  size?: number;
  text?: string;
};

export const cursorAtom = atom<CursorState>({ color: "black", size: 16 });
