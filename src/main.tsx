
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Failed to find the root element");
} else {
  const root = createRoot(rootElement);
  
  try {
    root.render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render the app:", error);
    
    // Fallback content in case of render failure
    rootElement.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
        <h1>Something went wrong</h1>
        <p>Please try refreshing the page.</p>
        <a href="/">Return to Home</a>
      </div>
    `;
  }
}
