import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [messages, setMessages] = useState<any>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      console.log("Connected");
    };
    socket.onmessage = (message) => {
      console.log("Received msg: ", message.data);
      setMessages((m: any) => [...m, message.data]);
    };
    setSocket(socket);

    return () => socket.close();
  }, []);

  if (!socket) {
    return <div>Connecting to Socket</div>;
  }

  return (
    <div>
      <h2>Messages</h2>
      <div className="flex flex-row items-center gap-[12px]">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
        <button onClick={() => socket.send(text)}>Send</button>
      </div>
      <ul>
        {messages.map((msg: any, index: number) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
