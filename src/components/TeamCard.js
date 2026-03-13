import Card from "./Card";
import Image from "next/image";

export default function TeamCard({ name, position, bio, imageUrl }) {
  return (
    <Card className="flex flex-col h-full items-center text-center p-8">
      <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-surface shadow-sm">
        <Image
          src={imageUrl || "/api/placeholder/150/150"}
          alt={name}
          fill
          className="object-cover"
          sizes="128px"
        />
      </div>
      <h3 className="mb-1 font-heading text-xl font-bold text-text">
        {name}
      </h3>
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
        {position}
      </p>
      <p className="text-textLight text-sm leading-relaxed">
        {bio}
      </p>
    </Card>
  );
}
