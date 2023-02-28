import React, { useEffect } from "react";
import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { init, subscribeChat, subscribeInitMessages } from "../SocketApi";
import { useChat } from "../context/ChatContext";

function Container() {
  const { messages, setMessages } = useChat();

  useEffect(() => {
    init();
    subscribeInitMessages((initMessages) => setMessages(initMessages));
    subscribeChat((message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { message, fromOther: true },
      ]);
    });
  }, []);

  return (
    <div className=" bg-slate-800 h-screen  ">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
