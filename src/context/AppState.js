import React, { useState } from 'react'

export const AppContext = React.createContext()

export default function AppState({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <AppContext.Provider value={[isMenuOpen, setIsMenuOpen]}>
            { children }
        </AppContext.Provider>
    )
}