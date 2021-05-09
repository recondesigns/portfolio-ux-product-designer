import React, { useState } from 'react'

export const AppStateContext = React.createContext()

export default function AppState({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <AppStateContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
            { children }
        </AppStateContext.Provider>
    )
}