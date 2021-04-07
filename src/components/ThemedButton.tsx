import React, { useContext } from "react";
import { ThemeContext } from "../context";

const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={toggleTheme}
        style={{ background: theme.background, color: theme.foreground }}
      >
        Я стилизован темой из контекста!
      </button>
    </div>
  );
};

export default ThemedButton;
