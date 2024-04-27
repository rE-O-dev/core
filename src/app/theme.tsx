"use client";

import { GlobalStyles } from "@/global/styles";
import { darkTheme, lightTheme } from "@/global/styles/theme";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

const Temp = styled.p`
  color: var(--red-10);
`;

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = React.useState("light");
  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={switchTheme}>Switch Theme</button>
      <Temp>Font Theme</Temp>
      {children}
    </ThemeProvider>
  );
}
