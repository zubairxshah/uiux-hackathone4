import Link from "next/link";
import { lato } from "@/fonts/lato";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const homeItems = [
  {
    title: "Pages",
    href: "/pages",
  },
  {
    title: "FAQs",
    href: "/pages/faq",
  },
  {
    title: "About",
    href: "/pages/aboutus",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function HomeMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${lato.className} flex items-center justify-around bg-white hover:bg-slate-400`}
          >
           <Link href="/">Home</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {homeItems.map((item, index: number) => (
              <NavigationMenuLink
                key={index}
                href={item.href}
                className={`${lato.className} flex items-center justify-around text-white bg-[#7E33E0] px-3 hover:bg-hexxd`}
              >
                {item.title}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
