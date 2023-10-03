import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const container: any = document.querySelector('#root');
const root: any = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
