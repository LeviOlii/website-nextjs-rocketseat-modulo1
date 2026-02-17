import { PaintbrushVertical, HeartHandshake, Store } from "lucide-react";
import { SupportCard } from "@/components/support-section-card";

export const SupportSection = () => {
  return (
    <section className="flex flex-col bg-none md:bg-support bg-cover bg-center bg-no-repeat mt-32 py-12 md:py-28">
      <div className='flex flex-col container justify-center items-center gap-10'>
          <strong className="font-sans text-gray-100 text-center text-heading-md md:text-heading-xl">
            Sua loja de afiliados, simples, do jeito que deveria ser
          </strong>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SupportCard
              title="Personalize suas vendas"
              description="Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara."
              bgCard="bg-blue-400"
              bgIcon="bg-blue-200"
              icon={PaintbrushVertical}
            />
            <SupportCard
              title="Venda de qualquer loja"
              description="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado."
              bgCard="bg-cyan-300"
              bgIcon="bg-cyan-200"
              icon={HeartHandshake}
            />
            <SupportCard
              title="Receba suporte amigável"
              description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
              bgCard="bg-blue-400"
              bgIcon="bg-blue-200"
              icon={Store}
            />
          </div>
      </div>
    </section>
  );
};
