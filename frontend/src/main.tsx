import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/index.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
