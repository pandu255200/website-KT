// app/our-verticals/[id]/page.tsx

import { PartnerWIthUs } from "@/components/layout/partner-with-us";
// import { OurVerticals } from "@/app/(pages)/home/fragements/our-verticals";
import { notFound } from "next/navigation";
import { VerticalsUseCasesSlider } from "@/components/layout/verticals-use-cases";

interface PageProps {
  params: {
    id: string;
  };
}
// interface PageProps {
//   params: {
//     id: string;
//   };
// }

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const verticalsCount = 15;

  return Array.from({ length: verticalsCount }, (_, i) => ({
    id: i.toString(),
  }));
}

// export async function generateStaticParams(): Promise<{ id: string }[]> {
//   const verticalsCount = 15;

//   return Array.from({ length: verticalsCount }, (_, i) => ({
//     id: i.toString(),
//   }));
// }

export default async function OurVerticalsPage({ params }: PageProps) {
  const verticalIndex = Number(params.id);

  if (isNaN(verticalIndex) || verticalIndex < 0 || verticalIndex >= 15) {
    notFound();
  }

  const verticalsData = [
    { title: "Textiles, Fabric & Yarn", datsIds: [2, 7, 9] },
    {
      title: "Fast-Moving Consumer Goods",
      datsIds: [1, 2, 3, 5, 6, 7, 20, 22, 25, 26, 27, 28],
    },
    {
      title: "Retail, E-commerce & Market Places",
      datsIds: [1, 3, 6, 9, 16, 17, 20, 22, 24, 25, 26, 28, 29],
    },
    {
      title: "Chemicals & Pharmaceuticals",
      datsIds: [7, 11, 23, 27, 28],
    },
    {
      title: "Consumer, Electronics & Medical Devices",
      datsIds: [2, 5, 6, 7, 25, 26, 29],
    },
    {
      title: "Power, Energy, Oil & Gas",
      datsIds: [4, 9, 12, 14, 19, 21, 22, 23, 24, 28],
    },
    {
      title: "Real Estates & Heavy Infrastructure",
      datsIds: [4, 8, 10, 13, 14, 15, 18, 19, 21],
    },
    {
      title: "Mining, Metals & Industrial Automation",
      datsIds: [12, 14, 19, 21, 23, 24],
    },
    {
      title: "Automotives, Ancillaries & Heavy Machineries",
      datsIds: [2, 9, 20, 23],
    },
    {
      title: "Logistics, Warehousing & Transportation",
      datsIds: [1, 4, 5, 9, 14, 19, 20, 22, 24, 26, 27],
    },
    {
      title: "Hospitals, Healthcare & Lifesciences",
      datsIds: [8, 11, 13, 15, 16, 18, 21, 27],
    },
    {
      title: "Hotels, QSR & Hospitality",
      datsIds: [8, 10, 13, 15, 16, 17, 18, 29],
    },
    {
      title: "Banking, Financial Services and Insurance",
      datsIds: [],
    },
    {
      title: "Educational Institutes",
      datsIds: [8, 13, 15, 16, 17, 18, 25, 27, 29],
    },
    {
      title: "Telecom, Media & Entertainment",
      datsIds: [],
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden">
      <VerticalsUseCasesSlider
        pageTitle={verticalsData[verticalIndex].title}
        link={`/our-verticals/${verticalIndex}`}
        dataIds={verticalsData[verticalIndex].datsIds.concat([
          30, 31, 32, 33, 34, 35, 36, 37, 38,
        ])}
      />
      {/* <OurVerticals goback={true} vertical={verticalIndex} /> */}
      <PartnerWIthUs />
    </div>
  );
}
