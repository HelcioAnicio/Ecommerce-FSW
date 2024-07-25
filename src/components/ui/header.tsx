"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";

const Header = () => {
  const { status, data: session } = useSession();
  console.log(session);

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          {status === "authenticated" && session?.user && (
            <div className="flex flex-col py-4">
              <div className="my-2 flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {session.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {session.user.image && (
                    <AvatarImage src={session.user.image} />
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{session.user.name}</p>
                  <p className="text-xs opacity-75">Boas Compras!</p>
                </div>
              </div>
              <Separator />
            </div>
          )}
          <div className="flex flex-col gap-3">
            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOutIcon size={16} /> Fazer Logout
              </Button>
            )}

            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogInIcon size={16} /> Fazer Login
              </Button>
            )}
            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={16} /> Inicio
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={16} /> Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={16} /> Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
