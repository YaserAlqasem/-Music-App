import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import Routes from "./Routes";
import { MainTheme } from "./Themes";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Suspense>
        <Routes />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
