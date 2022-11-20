import { createContext, FC } from "react";

interface Props {
    theme: string,
    changeTheme: (theme: string) => void
}

export const ThemeContext = createContext<Props>({
    theme: '',
    changeTheme: () => {}
})