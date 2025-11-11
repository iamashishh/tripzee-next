import TripSlider from "../sliders/trip-slider";
import { tripsData } from "../cards/trip-cards";
import Link from "next/link";

interface CustomLabelProps {
  label: string;
  width?: number;
}

const CustomLabel = ({ label}: CustomLabelProps) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-heading">
      {label}
    </h2>
  </div>
);

interface TripSectionProps {
  title: string;
  width?: number;
}

async function TripSection({ title, width = 20 }: TripSectionProps) {
  const result = { data: tripsData };

  if (!result?.data?.length) return null;

  return (
    <main className="overflow-hidden bg-white" >

    <section className="lg:py-8 max-container  pt-10 md:py-10  relative">
      <div className="flex justify-between items-center mb-5">
        <CustomLabel label={title} width={width} />
      </div>

      
      <Link href="/package">
        <TripSlider data={result.data} />

      </Link>
        
    </section>
    </main>

  );
}

export default TripSection;
