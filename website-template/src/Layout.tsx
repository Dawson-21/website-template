import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ToTop from "./components/ToTop";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>
        <Nav />

        <main >
            <Outlet />
        </main>

      <div>
        <ToTop />
        <Footer />
      </div>
    </>
  );
}