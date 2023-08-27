import { Outlet } from "react-router-dom";
import Logo from "../ui/Logo";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <section className="basis-45 py-3 px-4 bg-dark h-screen flex flex-col overflow-auto shrink-0">
      <Logo />
      <AppNav />
      <Outlet />
      <footer className=" mt-auto">
        <p className="text-center text-light text-[11px]">
          &copy; Copyright {new Date().getFullYear()} developed by{" "}
          <a
            href="https://github.com/Faizshaikh6280"
            target="_blank"
            rel="noreferrer"
          >
            Faiz Alam
          </a>
        </p>
      </footer>
    </section>
  );
}

export default Sidebar;
