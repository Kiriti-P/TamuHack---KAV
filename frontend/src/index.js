import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MedicationsContextProvider } from './context/MedicationContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MedicationsContextProvider>
      <App />
    </MedicationsContextProvider>
  </React.StrictMode>
);