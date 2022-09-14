import { atom } from "recoil";

// Takes index of current album in focus
export const currentPageState = atom({
  key: "currentPageState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});