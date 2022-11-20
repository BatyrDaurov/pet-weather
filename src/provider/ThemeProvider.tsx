import { ThemeContext } from "../Context/ThemeContext";
import {useState,ReactNode} from "react"
import { changeCssRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<string>(storage.getItem('theme') || 'light')

    changeCssRootVariables(theme)
    function changeTheme(theme: string) {
        storage.setItem('theme', theme)
        setTheme(theme)
        changeCssRootVariables(theme)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme,
        }}
        {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}