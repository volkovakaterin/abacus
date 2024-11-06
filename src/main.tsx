import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Abacus from './components/abacus/abacus.tsx'
import Manage from './components/manageContainer/manage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='main_container'>
      <Abacus />
      < Manage />
    </div>
  </StrictMode>
)
