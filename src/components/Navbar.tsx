import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#how",
    label: "Så funkar det",
  },
  {
    href: "#about",
    label: "Om oss",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#EFE3E3]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex text-black"
            >
              Tian Fastigheter
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 focus:outline-none">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-[#EFE3E3] text-black">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-black">
                    Tian Fastigheter
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost", className: "text-black" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="#apply"
                    onClick={() => setIsOpen(false)}
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                      className: "text-white"
                    })}`}
                  >
                    Ansök nu
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-6">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                  className: "text-black"
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4">
            <a
              rel="noreferrer noopener"
              href="#apply"
              className={`border px-4 py-2 rounded-full ${buttonVariants({
                variant: "secondary",
                className: "text-white"
              })}`}
            >
              Ansök nu
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
