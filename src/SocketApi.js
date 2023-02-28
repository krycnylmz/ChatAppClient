import { io } from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting...");
  socket = io("http://192.168.1.100:3001", { transports: ["websocket"] });

  socket.on("connect", () => {
    console.log("Connected");
  });
};

export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
  console.log("Şu mesaj gönderildi: ", message);
};

export const subscribeChat = (cb) => {
  if (!socket) return;
  socket.on("receive-message", (message) => {
    console.log("yeni bir mesaj var", message);
    cb(message);
  });
};

export const subscribeInitMessages = (cb) => {
  if (!socket) return;
  socket.on("message-list", (messages) => {
    console.log("initial", messages);
    cb(messages);
  });
};
