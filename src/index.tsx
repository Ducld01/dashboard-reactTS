import ReactDOM from "react-dom/client";
import { App } from "./ui";
import { BrowserRouter } from "react-router-dom";
import { ThemeSettingsProvider } from "./shared/contexts/ThemeSetting";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeSettingsProvider
    defaultSettings={{
      themeMode: "light",
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeSettingsProvider>
);
