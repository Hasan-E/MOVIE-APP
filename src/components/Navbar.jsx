import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png";
import { useContext } from "react";
import { AuthContextt } from "../context/AuthContext";

export default function Navbar() {
  const { cikis,currentUser } = useContext(AuthContextt);

  //tailwindui.com/components/preview adresinden navbar aldık ve navigation, mobile menu button, open, Disclosure.Panel sildik
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-neutral-100 dark:bg-gray-900 dark:text-white fixed top-0 w-full z-20 "
      >
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <Link className="pr-2 text-2xl font-semibold" to="/">
              Movie App
            </Link>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* kullanıcı giriş yaptıysa displayName ekranda görünsün */}
              <h5 className="mr-2 capitalize ">{currentUser?.displayName}</h5>

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src={currentUser?.photoURL||avatar}
                      className="h-8 w-8 rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </MenuButton>
                </div>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <>
                    <MenuItem>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Register
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Login
                      </Link>
                    </MenuItem>
                  </>

                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer" onClick={cikis} >  
                      Log out
                    </span>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </Disclosure>
      <div className="h-16"></div>
    </>
  );
}
