import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { SearchContextProvider } from './Context/contextApi.jsx'
import { AuthContextProvider } from './Context/Auth.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <SearchContextProvider>
                <App />
            </SearchContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)
