import { atom, selector } from "recoil";

export const InputState = atom({
  key: "InputState",
  default: "",
});

export const ResultSelector = selector({
  key: "ResultSelector",
  get: ({ get }) => {
    return get(InputState);
  },
});
