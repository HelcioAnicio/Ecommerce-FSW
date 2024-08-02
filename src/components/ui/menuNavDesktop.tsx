"use client";

import {
  Heart,
  HomeIcon,
  ListOrderedIcon,
  PackageSearchIcon,
  PercentIcon,
} from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const MenuNavDesktop = () => {
  return (
    <div className="hidden xl:block">
      <NavigationMenu className="m-auto">
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <Link
              className="relative flex w-full items-center gap-2 text-lg hover:underline hover:decoration-solid"
              href="/"
            >
              <HomeIcon size={18} />
              Início
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="px-0">
            <Link
              className="relative flex w-full items-center gap-2 text-lg hover:underline hover:decoration-solid"
              href="/orders"
            >
              <PackageSearchIcon size={18} />
              Meus Pedidos
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              className="relative flex w-full items-center gap-2 text-lg hover:underline hover:decoration-solid"
              href="/wish-list"
            >
              <Heart size={18} />
              Favoritos
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              className="relative flex w-full items-center gap-2 text-lg hover:underline hover:decoration-solid"
              href="/deals"
            >
              <PercentIcon size={18} />
              Ofertas
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              className="relative flex w-full items-center gap-2 text-lg hover:underline hover:decoration-solid"
              href="/catalog"
            >
              <ListOrderedIcon size={18} />
              Catálogo
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default MenuNavDesktop;
