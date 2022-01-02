import { Children, createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({refresh = () => {},
rooms = [],
devices = [],
thermostats = [],
properties = [],
scenes = [], children}) {
    return(
        <AppContext.Provider value={{
        refresh : () => {},
        rooms : [],
        devices : [],
        thermostats : [],
        properties : [],
        scenes : []}}>
            {children}
        </AppContext.Provider>
    )
    
}