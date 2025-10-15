import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SeriesProvider } from './contexts/SeriesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SeriesProvider>
          <App /> 
    </SeriesProvider>
  </StrictMode>,
)
/**nå er app children av provider og alt under er children  */