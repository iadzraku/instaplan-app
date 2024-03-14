// components/SideNav.js

import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="bg-gray-800 w-64 flex flex-col h-full fixed top-0 left-0">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
        <span><Link href={"http://localhost:3000/"}>INSTAPLAN</Link></span>
      </div>

      {/* Menu items */}
      <ul className="py-4">
        <li>
          <Link href={"/dashboard"} legacyBehavior>
            <a className="block py-2 px-4 text-white hover:bg-gray-700">
              Dashboard 
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/exams"} legacyBehavior>
            <a className="block py-2 px-4 text-white hover:bg-gray-700">
              Exams
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/timetable"} legacyBehavior>
            <a className="block py-2 px-4 text-white hover:bg-gray-700">
              Timetable
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/halls"} legacyBehavior>
            <a className="block py-2 px-4 text-white hover:bg-gray-700">
              Halls
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/lecturers"} legacyBehavior>
            <a className="block py-2 px-4 text-white hover:bg-gray-700">
              Lecturers
            </a>
          </Link>
        </li>
        <li>
          <Link href={"/courses"} legacyBehavior>
            <a className="block py-2 px-4 text-white hover:bg-gray-700">
              Courses
            </a>
          </Link>
        </li>
      </ul>

      {/* Logout */}
      <div className="mt-auto">
        <Link href="/logout" legacyBehavior>
          <a className="block py-2 px-4 text-white hover:bg-gray-700">Logout</a>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
