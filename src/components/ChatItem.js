import React from "react";

function ChatItem({ item }) {
  return (
    <div
      className={`grid w-screen py-1.2 px-2  rounded-lg text-orange-100 my-2 align-middle will-change-scroll ${
        item.fromOther
          ? "text-left"
          : "text-right object-right place-content-end"
      }`}
    >
      <div
        className={`bg-gradient-to-r from-purple-900 to-fuchsia-900 w-fit rounded-lg p-2.5`}
      >
        {item.message}
      </div>
    </div>
  );
}

export default ChatItem;
