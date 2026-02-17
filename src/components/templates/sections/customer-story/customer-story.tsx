import Image from "next/image";

const costumerStory = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
        name: "Annete Bones",
        role: "CEO da Anne Corp",
        profileImage: "customer_01.svg",
        altImage: 'Mulher sorrindo'
    }
  },

  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
        name: "Jacob Jones",
        role: "CEO da JJ Org",
        profileImage: "customer_02.svg",
        altImage: 'Homem sorrindo'
    } 
  },
];

export const CustomerStory = () => {
  return (
    <section className="container mt-20 md:mt-32 flex flex-col items-center md:gap-12 gap-8">
      <strong className="font-sans text-gray-100 text-heading-md md:text-heading-xl">
        Quem utiliza, aprova!
      </strong>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
        {costumerStory.map((costumerItem) => (
          <div key={costumerItem.author.name} className="bg-gray-600 flex flex-col p-6 md:p-10 gap-8 md:gap-10 rounded-xl border border-gray-400">
            <em className="text-gray-200 text-body-sm">
              &quot;{costumerItem.content}&quot;
            </em>

            <div className="flex gap-3">
              <Image
                src={costumerItem.author.profileImage}
                width={36}
                height={36}
                alt={costumerItem.author.altImage}
              />

              <div className="flex flex-col">
                <p className="text-gray-200 text-sm">{costumerItem.author.name}</p>
                <p className="text-gray-300 text-sm">{costumerItem.author.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
