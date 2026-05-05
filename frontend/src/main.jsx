import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './features/auth/auth.context.jsx'
import { SongProvider } from './features/home/song.context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SongProvider>
        <App />
      </SongProvider>
    </AuthProvider>
  </StrictMode>
)
