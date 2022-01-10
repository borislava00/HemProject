import { Children, createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({children}) {
    const [rooms, setRooms] = useState([]);
    const [properties, setProperties] = useState([]);
    const [devices, setDevices] = useState([]);
    const [scenes, setScenes] = useState([]);
    const [thermostats, setThermostats] = useState([]);

    async function refresh(){
        const rooms = fetch('https://hem-api.herokuapp.com/rooms', {headers: {'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`}})
        .catch((error) => console.log(error))
        const properties = fetch('https://hem-api.herokuapp.com/properties', {headers: {'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`}})
        .catch((error) => console.log(error))
        const devices = fetch('https://hem-api.herokuapp.com/devices', {headers: {'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`}})
        .catch((error) => console.log(error))
        const scenes = fetch('https://hem-api.herokuapp.com/scenes', {headers: {'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`}})
        .catch((error) => console.log(error))
        const thermostats = fetch('https://hem-api.herokuapp.com/thermostats', {headers: {'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`}})
        .catch((error) => console.log(error))
        Promise.all([rooms, properties, devices, scenes, thermostats])
        .then(res => Promise.all(res.map(element => element.json())))
        .then(data => data.forEach((element, index) => {
        switch (index) {
            case 0:
                setRooms(element)
                break;

            case 1:
                setProperties(element)
                break;

            case 2:
                setDevices(element)
                break;
                
            case 3:
                setScenes(element)
                break;
                
            case 4:
                setThermostats(element.thermostats)
                break;
            default:
                break;
        }
        }))
    }

    return(
        <AppContext.Provider value={[refresh]}>
            {children}
        </AppContext.Provider>
    )
    
}