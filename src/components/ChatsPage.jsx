import React from "react";
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(import.meta.env.VITE_REACT_APP_CHAT_ENGINE_PROJECT_ID, props.user.username, props.user.secret)
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId={import.meta.env.VITE_REACT_APP_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default ChatsPage;
