import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { ReactLenis } from 'lenis/react'


import router from "./router";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <HelmetProvider>
        <ReactLenis root>
          <RouterProvider router={router} />
        </ReactLenis>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
