import { PartnerWIthUs } from "@/components/layout/partner-with-us";
import EngineeringSolutions from "@/app/(pages)/home/fragements/ai-engineering-solutions";
import { notFound } from "next/navigation";

interface PageProps {
  params?: {
    id?: string;
  };
}

// ✅ REQUIRED for static export with dynamic routes
export async function generateStaticParams() {
  const solutionsCount = 4;
  return Array.from({ length: solutionsCount }, (_, i) => ({
    id: i.toString(),
  }));
}

export default async function SolutionsAndServicesPage({ params = {} }: PageProps) {
  const solutionIndex = Number(params.id ?? -1);

  if (isNaN(solutionIndex) || solutionIndex < 0 || solutionIndex >= 4) {
    notFound();
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <EngineeringSolutions goback={true} solution={solutionIndex} />
      <PartnerWIthUs />
    </div>
  );
}
