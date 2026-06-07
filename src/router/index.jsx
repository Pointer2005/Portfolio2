import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Skills from "@/pages/Skills/Skills";
import Projects from "@/pages/Projects/Projects";
import Contact from "@/pages/Contact/Contact";
import Layout from "@/components/layout/Layout";

const router = createBrowserRouter([
  {
    path: ROUTES.Home,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.ABOUT, element: <About /> },
      { path: ROUTES.SKILLS, element: <Skills /> },
      { path: ROUTES.PROJECTS, element: <Projects /> },
      { path: ROUTES.CONTACT, element: <Contact /> },
    ],
  },
]);

export default router;
