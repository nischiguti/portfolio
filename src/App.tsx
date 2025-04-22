import "./App.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex items-center justify-center h-32">
          <Header />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
