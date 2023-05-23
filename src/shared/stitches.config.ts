import { createStitches, PropertyValue } from "@stitches/react";
import { breakpoints, darkThemeCfg, lightThemeCfg } from "./theme";

export type ThemeValueType = typeof theme | typeof darkTheme;

export const { styled, css, globalCss, keyframes, theme, createTheme, config } =
  createStitches({
    theme: lightThemeCfg,
    media: Object.entries(breakpoints).reduce(
      (mobileBps, [key, screenWidth]) => ({
        ...mobileBps,
        [key]: `(max-width: ${screenWidth - 1}px)`,
        [`up${key}`]: `(min-width: ${screenWidth}px)`,
      }),
      {} as Record<string, string>
    ),
    utils: {
      mx: (value: PropertyValue<"margin">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: PropertyValue<"margin">) => ({
        marginTop: value,
        marginBottom: value,
      }),
      px: (value: PropertyValue<"margin">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: PropertyValue<"margin">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      centerBlockContent: () => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
      bodyText: () => ({
        fontSize: "14px",
        lineHeight: "24px",
        color: "$gray900",
      }),
      boldBodyText: () => ({
        fontWeight: 600,
        bodyText: "",
      }),
      smallText: () => ({
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
        color: "$gray500",
      }),
    },
  });

export const darkTheme = createTheme(darkThemeCfg);

export const resetGlobalcss = globalCss({
  "@import": [
    'url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap")',
  ],
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",

    "img, picture, video, canvas, svg": {
      display: "block",
      maxWidth: "100%",
    },
    "p, h1, h2, h3, h4, h5, h6": {
      overflowWrap: "break-word",
      margin: "0",
      fontFamily: "Inter, sans-serif",
    },
  },
  "*::before": { boxSizing: "border-box" },
});
