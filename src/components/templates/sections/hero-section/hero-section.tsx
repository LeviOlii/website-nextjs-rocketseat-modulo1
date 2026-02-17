import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full min-h-[20rem] md:h-[36rem]">
        <div className="flex flex-col items-center justify-center md:items-start gap-4">
          <h1 className="font-sans text-center md:text-start text-heading-lg md:text-heading-hg text-gray-100 w-[640px]">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col gap-2 items-center justify-center md:items-start">
            <div className="text-body-md text-gray-200 flex gap-2">
              <Clock className="text-cyan-100" />
              <span className="">Crie o seu site em menos de 5 minutos</span>
            </div>
            <div className="text-body-md text-gray-200 flex gap-2">
              <Store className="text-cyan-100" />
              <span>Acompanhe e otimize seu negócio online</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <Button className="w-fit bg-blue-500 rounded-full font-sans text-white">
              Criar loja grátis{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>

            <p className="text-gray-300 text-body-xs">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="relative hidden md:flex items-center justify-center">
          <Image
            src="background-hero.svg"
            alt="Imagem com ícone de bolsa, pin e loja"
            width={471}
            height={491}
            className="h-full object-contain"
          ></Image>
        </div>
      </div>
    </section>
  );
};
