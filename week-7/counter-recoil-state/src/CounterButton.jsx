import { useRecoilState, useSetRecoilState } from "recoil";
import { countState } from "./store/atoms/count";

export default function CounterButton() {
  // const [count, setCount] = useRecoilState(countState);
  // a more optimal way below.
  const setCount = useSetRecoilState(countState);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button> */}
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}
