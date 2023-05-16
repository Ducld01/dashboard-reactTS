import ReactDOM from "react-dom/client";
import { App } from "./ui";
import './theme/styles/index.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
