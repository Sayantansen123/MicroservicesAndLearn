import { useRef, useState } from "react";
import Props from "./components/Props"
import UseStateEx from "./components/UseStateEx"
import {ThemeContext, UserContext} from "./utils/context"
import Context from "./components/UseContext";
import ExpensiveComponent from "./components/UseMemo";
import { CallBackNotUsed, CallBackUsed } from "./components/UseCallback";
import {Counter, PreviousStateExample} from "./components/UseRef";
import UseImepartiveHandle from "./components/UseImepartiveHandle";
import ThemeToggle from "./components/UseReducer";

function App() {
  const [theme, setTheme] = useState("light");
  const user = {
    id: 1,
    name: "sayanatan",
    age: 16,
  }
  const childRef = useRef(null);

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

      {/* <CallBackNotUsed/>
      <CallBackUsed/> */}

      {/* <Counter/>
      <PreviousStateExample/> */}

      {/* <UseImepartiveHandle ref={childRef}/>
      <button onClick={() => childRef.current.showAlert()}>Call Child Function</button> */}

      <ThemeToggle/>

      </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
