import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import Navbar from './Navbar.jsx';
import Quote from './Quote.jsx';
import QuoteTwo from './quoteTwo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
   <Quote />
   <QuoteTwo />
  </StrictMode>,
)
