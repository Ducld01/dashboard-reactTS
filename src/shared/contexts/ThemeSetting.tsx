import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import {
  ThemeValueType,
  darkTheme,
  theme as lightTheme,
  resetGlobalcss,
  styled,
} from "@/shared/styles";

type ThemeMode = "light" | "dark";
const themes = {
  light: lightTheme,
  dark: darkTheme,
};

type ThemeSettingsValue = {
  theme: ThemeValueType;
  themeMode: ThemeMode;
};

type ThemeSettingsCtxProps = ThemeSettingsValue & {
  changeTheme: (themeMode: ThemeMode) => void;
};

const initialCtxValue: ThemeSettingsCtxProps = {
  themeMode: "light",
  theme: lightTheme,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeTheme: () => {},
};

type ThemeSettingsProviderProps = {
  children: ReactNode;
  defaultSettings: Omit<ThemeSettingsValue, "theme">;
};

const ThemeSettingsCtx = createContext(initialCtxValue);

const ThemeWrapper = styled("div", {
  maxWidth: "100vw",
  maxHeight: "100vh",
  backgroundColor: "$bge5e",
});

function ThemeSettingsProvider({
  children,
  defaultSettings,
}: ThemeSettingsProviderProps) {
  const [settings, setSettings] = useState({
    ...defaultSettings,
    theme: themes[defaultSettings.themeMode],
  });

  const changeTheme: ThemeSettingsCtxProps["changeTheme"] = useCallback(
    (newThemeMode) => {
      setSettings((oldSettings) => ({
        ...oldSettings,
        themeMode: newThemeMode,
        theme: themes[newThemeMode],
      }));
    },
    []
  );
  resetGlobalcss();
  return (
    <ThemeSettingsCtx.Provider value={{ ...settings, changeTheme }}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ThemeSettingsCtx.Provider>
  );
}

function useThemeSettings() {
  const themeSettings = useContext(ThemeSettingsCtx);

  if (typeof themeSettings === "undefined") {
    throw new Error(
      "useThemeSettings must be used within ThemeSettingsProvider."
    );
  }

  return themeSettings;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useThemeSettings, ThemeSettingsProvider };
