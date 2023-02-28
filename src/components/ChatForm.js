import React, { useState } from "react";

import { sendMessage } from "../SocketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
  const [message, setMessage] = useState("");

  const { messages, setMessages } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message) {
      setMessages([...messages, { message }]);
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="w-full flex flex-row fixed bottom-0">
      <form onSubmit={handleSubmit} className="w-full justify-center flex  ">
        <input
          className="flex-1 w-72 bg-slate-700 text-slate-100 h-14 rounded-md  p-4"
          name=""
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type something..."
          autoFocus
        />
        <button
          type="submit"
          className="flex-none w-16 ml-2 p-4  rounded-xl text-slate-200  bg-fuchsia-900 "
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatForm;
