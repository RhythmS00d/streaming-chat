import React from "react";
import { useAppContext } from "../context/appContext";
import { twitchAuth } from "../server/requests";

export const TwitchConnect = () => {
  return (
    <section>
      <button onClick={twitchAuth}>Connect Twitch</button>
    </section>
  );
};
