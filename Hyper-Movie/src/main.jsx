import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "swiper/css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// const container = document.getElementById('root');
// const root = ReactDOM. ???? (container);
// root.render(myElement);
