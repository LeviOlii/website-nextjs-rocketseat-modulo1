import { LucideIcon } from "lucide-react";

type SupportCardProps = {
  bgCard: string;
  bgIcon: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SupportCard = ({
    bgCard,
    bgIcon,
    title,
    description,
    icon: Icon
}: SupportCardProps) => {
  return (
    <div className={`flex flex-col rounded-xl p-6 gap-4 ${bgCard}`}>
      <div className={`${bgIcon} max-w-fit p-2 rounded-lg`}>
        <Icon className="text-white " />
      </div>
      <h2 className="font-sans text-heading-sm text-gray-100">{title}</h2>
      <p className="text-body-sm text-gray-200">
        {description}
      </p>
    </div>
  );
};
