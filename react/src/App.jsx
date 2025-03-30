import { useState } from "react";
import Props from "./components/Props"
import UseStateEx from "./components/UseStateEx"
import {ThemeContext, UserContext} from "./utils/context"
import Context from "./components/UseContext";
import ExpensiveComponent from "./components/UseMemo";

function App() {
  const [theme, setTheme] = useState("light");
  const user = {
    id: 1,
    name: "sayanatan",
    age: 16,
  }

  return (
    <>
    <UserContext.Provider value = {user}>
      <ThemeContext.Provider value={theme}>
      {/* <UseStateEx/> */}

      {/* <Props name="sayantan" age="16"/> */}

      {/* <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button> */}

      {/* <Context/> */}

      {/* <ExpensiveComponent/> */}

      </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
