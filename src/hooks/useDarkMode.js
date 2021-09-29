import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {


    const [darkMode, setDarkMode] = useLocalStorage(false);
    
    return [darkMode, setDarkMode];
}

