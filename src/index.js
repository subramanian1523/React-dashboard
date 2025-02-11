import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
      <BrowserRouter> 
        <App />
        <ToastContainer />
      </BrowserRouter>
      </AuthProvider>
  </StrictMode>,
)
