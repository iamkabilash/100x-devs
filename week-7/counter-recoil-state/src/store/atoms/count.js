import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

// selector => derived state from a state.
// the below is to find countState is even or not.
export const evenSelector = selector({
  key: "evenSelector",
  get: ({ get }) => {
    const count = get(countState);
    return count % 2;
  },
});
