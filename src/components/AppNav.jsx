import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className=" my-5">
      <ul className="flex  justify-center ">
        <li>
          <NavLink
            to="questions"
            className="px-4 py-2 font-medium rounded-sm transition-all border-[#42484d] border text-white uppercase"
          >
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="bookmark"
            className="px-4 py-2 font-medium rounded-sm transition-all border-[#42484d] border text-white uppercase"
          >
            BookMarks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
