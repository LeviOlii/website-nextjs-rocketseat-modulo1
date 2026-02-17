import Link from "next/link";
import { Button } from "../../../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export const FeatureSection = () => {
  return (
    <section className="container mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col rounded-xl bg-gray-500 p-6 gap-2">
          <span className="uppercase text-blue-200 bg-blue-400 w-fit p-2 text-body-tag rounded-sm">
            Simples
          </span>
          <h2 className="text-gray-100 text-heading-lg font-sans">
            Crie um catálogo de produtos online em poucos minutos
          </h2>
        </div>
        <div className="flex flex-col rounded-xl bg-gray-500 p-6 gap-2 ">
          <span className="uppercase text-blue-200 bg-blue-400 w-fit p-[8px] text-body-tag rounded-sm">
            Prático
          </span>
          <h2 className="text-gray-100 text-heading-lg font-sans">
            Venda para seu público através de uma plataforma única
          </h2>
        </div>

        <div className="bg-gray-500 rounded-xl flex flex-col md:flex-row md:col-span-full p-6">
          <div className="flex flex-col rounded-xl gap-2 ">
            <span className="uppercase text-blue-200 bg-blue-400 w-fit p-[8px] text-body-tag rounded-sm">
              Personalizável
            </span>
            <h2 className="text-gray-100 text-heading-lg font-sans">
              Tenha uma loja online personalizada com a cara da sua marca
            </h2>
            <Button
              className=" bg-blue-500 rounded-full hidden md:flex text-white w-fit mt-24"
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

          <div className="object-cover w-full flex flex-col items-center justify-center pt-6 md:pt-0 ">
            <Image
              src="/feature-section.svg"
              alt="Feature"
              width={440}
              height={330}
            />
          </div>

          <div className="flex md:hidden items-center justify-center pt-4 w-full">
            <Button
              className=" bg-blue-500 rounded-full text-white w-7/12 mt-1 mb-6"
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
        </div>
      </div>
    </section>
  );
};
