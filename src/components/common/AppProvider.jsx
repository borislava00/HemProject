import { createContext } from "react";

export const AppContext = createContext();

export default function AppProvider({refresh = () => {},
rooms = [],
devices = [],
thermostats = [],
properties = [],
scenes = []}) {
    return(
        <AppContext.Provider value={{
        refresh : () => {},
        rooms : [],
        devices : [],
        thermostats : [],
        properties : [],
        scenes : []}}>

        </AppContext.Provider>
    )
    
}