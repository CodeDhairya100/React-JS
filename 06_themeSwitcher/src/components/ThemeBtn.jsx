import React from 'react'
import useTheme from '../context/theme';

export default function ThemeBtn() {
    
    // 1. Destructure the current theme state and setter functions
    const {themeMode, lightTheme, darkTheme} = useTheme()

    // 2. Define the handler function for the checkbox change event
    const onChangeBtn = (e) => {
        // e.currentTarget.checked is a standard way to get the boolean state of the checkbox
        const darkModeStatus = e.currentTarget.checked 
        
        // If the checkbox is checked (true), switch to dark theme
        if (darkModeStatus) {
            darkTheme()
        } 
        // If the checkbox is unchecked (false), switch to light theme
        else {
            lightTheme()
        }
    }
    
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                
                // 3. CRITICAL FIX/CHECK: The checkbox state MUST be controlled 
                // by the context state (themeMode). This ensures synchronization.
                checked={themeMode === "dark"} 
            />
            <div className="w-11 h-6 bg-gray-200 
            peer-focus:outline-none peer-focus:ring-4 
            peer-focus:ring-red-300 dark:peer-focus:ring-red-800 
            rounded-full peer dark:bg-gray-700 
            peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] 
            after:absolute after:top-[2px] after:left-[2px] 
            after:bg-white after:border-gray-300 after:border 
            after:rounded-full after:h-5 after:w-5 after:transition-all 
            dark:border-gray-600 peer-checked:bg-red-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}