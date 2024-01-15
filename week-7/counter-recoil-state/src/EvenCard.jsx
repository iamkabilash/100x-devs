import { useRecoilValue } from "recoil";
import { countState, evenSelector } from "./store/atoms/count";

export default function EvenCard() {
  //   const count = useRecoilValue(countState);
  //   return count % 2 === 0 ? <h4>It is even!</h4> : null;

  // using recoil selector.
  const isEven = useRecoilValue(evenSelector);
  return !isEven ? <h4>It is even!</h4> : null;
}
