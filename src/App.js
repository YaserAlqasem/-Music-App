import { ThemeProvider } from "@mui/material";
import MainLayout from "./Layout/MainLayout";
import { MainTheme } from "./Themes";

function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
