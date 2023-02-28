import React from "react";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();
  return (
    <div className="flex flex-col h-[90vh] overflow-y-scroll bg-slate-900 ">
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => {
          return <ChatItem item={item} key={key} />;
        })}
      </ScrollableFeed>
    </div>
  );
}

export default ChatList;
