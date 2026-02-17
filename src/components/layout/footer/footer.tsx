import Link from "next/link"
import { Logo } from "@/components/logo"

export const Footer = () => {
    return (
        <div className="w-full border-t border-gray-500 bg-gray-500">
            <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-40 py-6 ">

                <Logo/>
                <nav className="text-blue-100 flex flex-col md:flex-row justify-between gap-6 text-muted-foreground text-sm">
                    <Link href='termos'>Termos de uso</Link>
                    <Link href='politica'>Política de privacidade</Link>
                    <Link href='contato'>Contato</Link>
                </nav>
            </div>
        </div>
    )
}