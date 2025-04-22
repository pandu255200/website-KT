import { PartnerWIthUs } from "@/components/layout/partner-with-us";
import { OurVerticals } from "@/app/(pages)/home/fragements/our-verticals";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const verticalsCount = 15;
  return Array.from({ length: verticalsCount }, (_, i) => ({
    id: i.toString(),
  }));
}

export default async function OurVerticalsPage({ params }: PageProps) {
  const verticalIndex = Number(params.id);

  if (isNaN(verticalIndex) || verticalIndex < 0 || verticalIndex >= 15) {
    notFound();
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <OurVerticals goback={true} vertical={verticalIndex} />
      <PartnerWIthUs />
    </div>
  );
}
