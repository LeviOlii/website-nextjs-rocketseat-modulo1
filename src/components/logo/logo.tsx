import { ImageProps } from "next/image";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
    return (
        <>
            <Link href='/' >
                <Image
                    src='/Brand-Logo.svg'
                    alt='Logo'
                    width={100}
                    height={100}
                    />
            </Link>
        </>    
    )
}