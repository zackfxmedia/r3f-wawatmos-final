import { createContext, useContext, useState } from "react";

const PlayContext = createContext();

export const PlayProvider = ({ children }) => {
  // State to manage the play status
  // State to track if the play session has ended
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  return (
    <PlayContext.Provider
      value={{
        play,
        setPlay,
        end,
        setEnd,
        hasScroll,
        setHasScroll,
      }}
    >
    </PlayContext.Provider>
  );
};

export const usePlay = () => {
  const context = useContext(PlayContext);

  if (context === undefined) {
    throw new Error("usePlay must be used within a PlayProvider");
  }

  return context;
};
