import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterCard from "./CounterCard";
import CounterButton from "./CounterButton";
import { RecoilRoot } from "recoil";
import EvenCard from "./EvenCard";

function App() {
  return (
    <>
      <RecoilRoot>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <CounterCard />
        <CounterButton />
        <EvenCard />
      </RecoilRoot>
    </>
  );
}

export default App;
