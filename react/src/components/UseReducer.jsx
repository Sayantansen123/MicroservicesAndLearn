import React, { useReducer } from "react";

const themeReducer = (state,action)=>{
    switch(action.type){
        case "TOGGLE_THEME":
            return state === "light" ? "dark" : "light";
          default:
            return state;
    }
}

const ThemeToggle = () => {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px",
      textAlign: "center"
    }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggle;