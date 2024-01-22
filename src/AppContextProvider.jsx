import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { App } from 'App';

export const appContext = createContext()

export function AppContextProvider() {
    const [clickCounter, setClickCounter] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        if (clickCounter < 1) {
            return
        }
        console.log(clickCounter)
    }, [clickCounter])


    const updateCounter = () => {
        setClickCounter(clickCounter + 1);
    };
    return (
        <appContext.Provider value={{ updateCounter, isModalOpen, setModalOpen }} >
            <App />
        </appContext.Provider>
    )
}