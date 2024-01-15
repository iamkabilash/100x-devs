import { useRecoilState } from "recoil";
import { countState } from "./store/atoms/count";

export default function CounterButton() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
