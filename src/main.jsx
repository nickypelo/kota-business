import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css';
import { AuthProvider } from './context.jsx/AuthContext.jsx';
import { CartProvider } from './context.jsx/CartContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
    
  </React.StrictMode>,
)
