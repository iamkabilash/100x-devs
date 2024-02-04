import { atom } from "recoil";

export const sendModalState = atom({
  key: "sendModalState",
  default: { visibility: "hidden" },
});

export const userState = atom({
  key: "userState",
  default: { userId: "", firstname: "", lastName: "" },
});
