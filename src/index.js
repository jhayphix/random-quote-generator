import reactDom from "react-dom/client";
import App from "./App";
import "./app.css";

const root = reactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
