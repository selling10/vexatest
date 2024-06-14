import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import icon3 from '../assets/vexa.png';

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
    label: "Vanliga frågor",
  },
  {
    href: "#apply",
    label: "Kontakt", // New "Kontakt" route
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#EFE3E3]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-20 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <a
              href="/"
              className="ml-0 text-xl flex text-black items-center"
            >
              <img src={icon3} alt="Icon" className="h-12  mr-1 ml-6" /> {/* Adjust size as needed */}
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 focus:outline-none">
                <Menu
                  className="flex md:hidden h-5 w-5 text-black"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-[#EFE3E3] text-black focus:outline-none">
                <SheetHeader className="relative">
                  <SheetTitle className="font-bold text-xl text-black">
                    Vexa Industrihus
                  </SheetTitle>
                  <button
                    className="absolute top-4 right-4 focus:outline-none"
                    onClick={() => setIsOpen(false)}
                    style={{ border: 'none', boxShadow: 'none' }}
                  >
                    <span className="sr-only">Close</span>
                  </button>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-4 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        handleNavigation(href);
                      }}
                      className={buttonVariants({ variant: "ghost", className: "text-black" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="#apply"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      handleNavigation("#apply");
                    }}
                    className={`w-[110px] ${buttonVariants({
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
          <nav className="hidden md:flex flex-1 justify-center gap-6" style={{ marginRight: '3%' }}>
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(route.href);
                }}
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
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("#apply");
              }}
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
