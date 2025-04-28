import "./App.css";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Section } from "@/components/section";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className=" flex-col items-center justify-center h-32">
          <Header />
          <Main>
      <Section title="Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Project cards */}
        </div>
      </Section>

      <Section title="Team">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Team members */}
        </div>
      </Section>
    </Main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
