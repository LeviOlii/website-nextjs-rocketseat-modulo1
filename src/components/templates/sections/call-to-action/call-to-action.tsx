import Link from "next/link";
import { Button } from "../../../ui/button";
import { ArrowRight, Store } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="relative mt-32 md:pt-20 md:pb-16 pt-16 pb-14">
      <div className="absolute inset-0 bg-call-to-action opacity-90 bg-cover bg-no-repeat bg-center" />
      <div className="relative container flex flex-col items-center gap-10">
        <div className=" bg-cyan-300 p-4 rounded-full text-cyan-100 ">
          <Store />
        </div>

        <h2 className="font-sans text-gray-100 text-center text-heading-md md:text-heading-xl">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>

        <Button
          className=" bg-blue-500 rounded-full text-white w-fit mt-1 mb-6"
          asChild
        >
          <Link href="/comecar">
            Criar loja grátis
            <span>
              <ArrowRight />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
};
