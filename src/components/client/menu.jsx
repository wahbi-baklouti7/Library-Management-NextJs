"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PrintIcon from "@mui/icons-material/Print";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";

import CartModal from "./shoppingCart/cartModal";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSession, signIn, signOut } from "next-auth/react";

const Menu = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { handleCartClick, cartCount } = useShoppingCart();

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Image src="/logo.svg" alt="logo" width={40} height={50} />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  {" "}
                  <HomeIcon className="mb-2"/>&nbsp;Home{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/admin/livres"
                >
                  {" "}
                  <MenuBookIcon className="mb-2"/>&nbsp;Livres{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/admin/auteurs"
                >
                  {" "}
                  <AccountCircleIcon className="mb-2"/>&nbsp;Auteurs{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/admin/editeurs"
                >
                  {" "}
                  <PrintIcon className="mb-2" />&nbsp;Editeurs{" "}
                </Link>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/admin/specialites"
                >
                  {" "}
                  <LibraryBooksIcon className="mb-2"/>&nbsp;Spécialités{" "}
                </a>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/shoppingClient/cartLivres"
                >
                  <ShoppingBasketIcon  className="mb-2"/>&nbsp;Shopping Cart{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative" onClick={() => handleCartClick()}>
              <ShoppingCartIcon color="warning" />
              <div className="rounded-full flex justify-center items-center bg-red-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                {cartCount}
              </div>
            </button>
            <CartModal />
            <div className="sm:flex sm:gap-4">
            {session ? (
                <Link
                  onClick={() => signOut()}
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                  href="#"
                >
                  Se déconnecter
                </Link>
              ) : (
                <Link
                  onClick={() => signIn()}
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/api/auth/signin"
                >
                  Se connecter
                </Link>
              )}

              <a
                className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                href="/api/auth/signin"
              >
                S'inscrire
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
