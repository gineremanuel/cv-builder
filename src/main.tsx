import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css';


const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("No se encontró el elemento con el id 'root'. Verifica tu archivo HTML.");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
