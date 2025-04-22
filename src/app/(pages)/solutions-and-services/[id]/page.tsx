import { PartnerWIthUs } from "@/components/layout/partner-with-us";
import EngineeringSolutions from "@/app/(pages)/home/fragements/ai-engineering-solutions";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const solutionsCount = 9;
  return Array.from({ length: solutionsCount }, (_, i) => ({
    id: i.toString(),
  }));
}

export default async function SolutionsAndServicesPage({ params }: PageProps) {
  const solutionIndex = Number(params.id);

  if (isNaN(solutionIndex) || solutionIndex < 0 || solutionIndex >= 9) {
    notFound();
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <EngineeringSolutions goback={true} solution={solutionIndex} />
      <PartnerWIthUs />
    </div>
  );
}
