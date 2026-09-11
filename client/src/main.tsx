import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/* Analytics (Umami). Se inyecta solo si las variables están configuradas: antes
   estaba fijo en index.html con placeholders %VITE_ANALYTICS_*% que, al no estar
   definidos, Vite dejaba literales y el navegador pedía una URL inválida (404). */
const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
if (endpoint && websiteId) {
  const s = document.createElement("script");
  s.defer = true;
  s.src = `${endpoint.replace(/\/$/, "")}/umami`;
  s.dataset.websiteId = websiteId;
  document.head.appendChild(s);
}

createRoot(document.getElementById("root")!).render(<App />);
