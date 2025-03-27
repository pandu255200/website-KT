import { PartnerWIthUs } from "@/components/layout/partner-with-us";

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col overflow-hidden">
      {children}
      <PartnerWIthUs />
    </div>
  );
}
