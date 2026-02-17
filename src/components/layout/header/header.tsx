import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ActiveLink } from "../../active-link/active-link";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className="flex text-white fixed w-full bg-gray-800/95 border-b border-white/10 top-0 z-50 backdrop-blur py-4 px-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-40 w-full">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex gap-6 items-center">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button
              variant="secondary"
              className="rounded-full text-gray-800 bg-white"
            >
              Começar
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
