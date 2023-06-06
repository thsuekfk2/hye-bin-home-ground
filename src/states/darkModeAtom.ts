import { atom } from "jotai";

export type DarkModeState = {
  isDarkMode: boolean;
};

export const darkModeAtom = atom<DarkModeState>({ isDarkMode: false });
