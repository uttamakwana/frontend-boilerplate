import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// styles
import "./styles/index.css";
import "./styles/reset.css";
import "./styles/utils.css";
import "./styles/colors.css";
import "./styles/fonts.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
