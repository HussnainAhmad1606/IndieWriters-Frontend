"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { SearchModal } from "./SearchModal";
import { AvatarDropDown } from "./Dropdown";
import { toast } from "react-hot-toast";
import { ThemeToggle } from "./ThemeToggle";
import { useUserStore } from "@/store/store";
import axios from "axios";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Navbar() {
  const {SetIsLogin, SetUsername, SetEmail, SetUserId, SetRole, UserId} = useUserStore();

  const {IsLogin, Username, Role} = useUserStore();
  const logout = async () => {
    SetIsLogin(false);
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
  };

  
  const verifyToken = async() => {
    const token = localStorage.getItem("token");
    const req = await axios.post("/api/auth/verify", {
      token: token
    })
    console.log(req)

    if (req.data.type == "success") {
      SetIsLogin(true);
      SetUsername(req.data.user.username);
      SetEmail(req.data.user.email);
      SetUserId(req.data.user._id);
      SetRole(req.data.user.role)
    }
    else {
      toast.error("token expired. Please log in")
    }

  }

  React.useEffect(() => {
    verifyToken();
  }, [])
  
  return (
    <div className="m-5 flex flex-col lg:flex-row justify-between items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/explore" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Explore
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex justify-center items-center">
        <ThemeToggle />
        <SearchModal />
        <Button className="mx-5" asChild>
          <Link href="/find-publishers">Find Publisher</Link>
        </Button>
        {
          !IsLogin?(
<Button variant={"outline"} asChild>
          <Link href="/login">Login</Link>
        </Button>
          ):null
        }
        
        {
          IsLogin?(
            <div className="ml-5">
            <AvatarDropDown role={Role} userId={UserId} userName={Username} logout={logout} />
          </div>
          ):null
        }
       
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
