"use client";

import { Popover } from "@headlessui/react";
import Link from "next/link";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import {
  HeroiconsBars3Solid,
  HeroiconsMagnifyingGlass16Solid,
  HeroiconsXMark16Solid,
} from "@/assets/icons";
import Logo from "@/assets/icons/NavLogo";
import { classNames } from "@/lib/helpers";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];

export default function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "sticky top-0 z-50 bg-white shadow-sm lg:overflow-y-visible",
          // "sticky top-0 bg-white shadow-sm lg:static lg:overflow-y-visible",
        )
      }
    >
      {({ open }) => (
        <>
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
              <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Logo className="hidden md:block" />
                  </Link>
                </div>
              </div>
              <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                  <div className="w-full">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <HeroiconsMagnifyingGlass16Solid
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-indigo-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <HeroiconsXMark16Solid
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <HeroiconsBars3Solid
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Popover.Button>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  {/* Signed out users get sign in button */}
                  <SignInButton
                    mode="modal"
                    afterSignInUrl="/"
                    redirectUrl="/"
                  />
                </SignedOut>
              </div>
            </div>
          </nav>

          <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "hover:bg-gray-50",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                <div className="ml-3 flex items-center gap-x-2">
                  <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton afterSignOutUrl="/" />
                  </SignedIn>
                  <SignedOut>
                    {/* Signed out users get sign in button */}
                    <SignInButton
                      mode="modal"
                      afterSignInUrl="/"
                      redirectUrl="/"
                    />
                  </SignedOut>
                  {isSignedIn && (
                    <div className="text-base font-medium text-gray-800">
                      <span className="inline-flex items-center rounded bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800">
                        <svg
                          className="mr-1.5 h-2 w-2 text-indigo-400"
                          fill="currentColor"
                          viewBox="0 0 8 8"
                        >
                          <circle cx={4} cy={4} r={3} />
                        </svg>
                        {user?.firstName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
