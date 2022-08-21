import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import MainLayout from "./Layout/MainLayout";
import Routes from "./Routes";
import { MainTheme } from "./Themes";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Suspense>
        <Routes />
      </Suspense>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
