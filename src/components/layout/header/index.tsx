"use client";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");

    console.log("theme", theme);
  };

  return (
    <header className="py-3 border-b border-gray-300 dark:border-gray-800">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <h1 className="font-primary text-xl lg:text-2xl xl:text-4xl font-bold">
            OneX<span className="italic">Referral</span>
          </h1>
          <Button variant="ghost" onClick={handleTheme}>
            {theme === "dark" ? (
              <Sun className="!h-5 !w-5 transition-all duration-300 ease-in-out" />
            ) : (
              <Moon className="!h-5 !w-5 transition-all duration-300 ease-in-out" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
