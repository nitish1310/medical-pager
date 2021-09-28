import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import ChanellListContainer from "./components/ChanellListContainer";
import ChannelContainer from "./components/ChannelContainer";

const apiLey = "6dkr9kbfdy2y";

const client = StreamChat.getInstance(apiLey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanellListContainer />
        <ChannelContainer />
      </Chat>
      <h1> Medical Pager Chat Application </h1>
    </div>
  );
};

export default App;
