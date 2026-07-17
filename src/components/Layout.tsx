import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div>
        <Toaster />
      </div>
      <main className="flex-1 content-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
