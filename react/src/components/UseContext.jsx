import { useContext } from "react"
import { ThemeContext, UserContext } from "../utils/context"



const Context = () => {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
    <div className="w-[100%] flex justify-center items-center flex-col">
        <h1 >
            theme : {theme}
        </h1>
        <h1>name :{user.name}</h1>
        <h1>id :{user.id}</h1>
        <h1>age :{user.age}</h1>
    </div>)
}

export default Context