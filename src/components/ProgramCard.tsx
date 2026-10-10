import type { IconType } from "react-icons";
import Card from "./Card";

interface ProgramCardProps {
  icon?: IconType;
  title: string;
  description: string;
}

export default function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <Card className="flex flex-col h-full text-center items-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
        {Icon && <Icon className="text-3xl" />}
      </div>
      <h3 className="mb-3 font-heading text-xl font-bold text-text">
        {title}
      </h3>
      <p className="text-textLight leading-relaxed">
        {description}
      </p>
    </Card>
  );
}
