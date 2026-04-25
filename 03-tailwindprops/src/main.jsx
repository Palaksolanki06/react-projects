import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card
      imagee="https://images.unsplash.com/photo-1776715139302-281f91c0c9ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
      feature="Modern Design Solutions"
      para="Discover cutting-edge design patterns and UI components that elevate your digital experiences." />

{/* <App/> */}
  </StrictMode>,
)
