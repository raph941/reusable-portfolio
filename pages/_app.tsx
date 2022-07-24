import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";

import { useThemeMode } from "../hooks/useThemeMode";
import MainThemeProvider from "../styles/MainThemeProvider";
import { NavBar } from "../components/NavBar";
import { userData } from "../utils/data";
import { GlobalStyle } from "../styles/GlobalStyle";
import { StyledPageContentWrapper } from "../components/StyledElements";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useThemeMode();

  return (
    <MainThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar userData={userData} />

      <StyledPageContentWrapper>
      <Component {...pageProps} userData={userData} />
      </StyledPageContentWrapper>
    </MainThemeProvider>
  );
}

export default MyApp;
