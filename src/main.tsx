import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";

const subdirectory='/Group_Task_4';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={subdirectory}>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
