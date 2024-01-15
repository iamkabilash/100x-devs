import { useRecoilValue } from "recoil";
import { countState } from "./store/atoms/count";

export default function CounterCard() {
  const count = useRecoilValue(countState);

  return <h1>Count is: {count}</h1>;
}
