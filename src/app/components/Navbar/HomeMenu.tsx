import { lato } from "@/fonts/lato"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
  const homeItems = [
    {
      title: "Pages",
      href: "/pages",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Shop",
      href: "/shop",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

export default function HomeMenu(){
    return(

        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger           className={`${lato.className} flex items-center justify-around bg-white hover:bg-slate-400`}
      >Home</NavigationMenuTrigger>
      <NavigationMenuContent>
        {homeItems.map((item, index:number) => (
          <NavigationMenuLink key={index} href={item.href} 
          className={`${lato.className} flex items-center justify-around bg-[#FB2E86] hover:bg-slate-400`}>
            {item.title}
          </NavigationMenuLink>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


    )
}