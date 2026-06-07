import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { siteConfig } from "@/config/site";

export default function Layout() {
  const location = useLocation();
  
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return siteConfig.title;
    const title = path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
    return `${title} | ${siteConfig.name}`;
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={siteConfig.description} />
      </Helmet>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 md:px-8 py-12 mt-16">
        <Outlet /> 
      </main>
      <Footer/>
    </div>
  );
}