import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { App } from 'App';

export const appContext = createContext()

export function AppContextProvider() {
    const [clickCounter, setClickCounter] = useState(0)
    const [isSideMenuOpen, setSideMenuOpen] = useState(false)

    const handleToggleSideMenu = () => {
        setSideMenuOpen(!isSideMenuOpen);
        document.body.classList.toggle('bodyScrollLock');
    };

    useEffect(() => {
        if (clickCounter < 1) {
            return
        }
        console.log(`Click ${clickCounter}`)
    }, [clickCounter])


    const updateCounter = () => {
        setClickCounter(clickCounter + 1);
    };
    return (
        <appContext.Provider value={{ updateCounter, isSideMenuOpen, handleToggleSideMenu }} >
            <App />
        </appContext.Provider>
    )
}