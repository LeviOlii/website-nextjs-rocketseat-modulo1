import { Footer } from "./footer/footer";
import { Header } from "./header";
import { Inter, PT_Sans_Caption } from "next/font/google";

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-sans",
});

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <>
      <div className={className}>
        <div
          className={`${inter.className} ${ptSansCaption.className} min-h-screen flex flex-col bg-gray-700 font-inter`}
        >
          <Header />
          <main className="flex-1 flex flex-col mb-12">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};
