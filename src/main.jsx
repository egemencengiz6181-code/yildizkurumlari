import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Build'de prerender edilen sayfalar hydrate edilir; geliştirme ortamında boş kök sıfırdan çizilir.
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
