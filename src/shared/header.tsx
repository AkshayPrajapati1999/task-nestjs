"use client";

import Image from "next/image";
import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "About", href: "#about" },
    { name: "List", href: "#dolor" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Lorem</span>
            <Image className="h-8 w-auto" src="logo.svg" alt="" height="20" width="20"/>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Image src="bredcumb.svg" height="20" width="20" alt="avtar" />
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Loream</span>
              <Image className="h-8 w-auto" src="logo.svg" alt=""  height="20" width="20"/>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col justify-center h-80">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="
                    block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-black"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
